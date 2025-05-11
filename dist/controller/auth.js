import { z } from 'zod';
import bcrypt from 'bcrypt';
import prisma from '../prisma/client.js';
import { SignJWT, jwtVerify, errors } from 'jose';
import { authenticate } from '../middleware/middleware.js';
const secretStr = process.env.JWT_SECRET;
if (!secretStr || secretStr.length < 32) {
    throw new Error('JWT_SECRET must be set and at least 32 characters long.');
}
const secret = new TextEncoder().encode(secretStr);
// Validation schemas for signup and login
const signupSchema = z.object({
    email: z.string().email(),
    username: z.string().min(3),
    password: z.string().min(6),
});
const loginSchema = z.object({
    username: z.string(),
    password: z.string(),
});
// Helper to set cookie
const setCookie = (c, name, value, maxAge) => {
    const cookieOptions = process.env.NODE_ENV === 'production'
        ? 'Secure; SameSite=None;'
        : 'SameSite=Lax;';
    c.header('Set-Cookie', `${name}=${value}; HttpOnly; Path=/; Max-Age=${maxAge}; ${cookieOptions}`);
};
// Signup function
export const signup = async (c) => {
    const body = await c.req.json();
    const parsed = signupSchema.safeParse(body);
    if (!parsed.success) {
        return c.json({ error: parsed.error.flatten().fieldErrors }, 400);
    }
    const { email, username, password } = parsed.data;
    const existingUser = await prisma.user.findFirst({
        where: { OR: [{ email }, { username }] },
    });
    if (existingUser) {
        return c.json({ error: 'User already exists' }, 409);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await prisma.user.create({
            data: { email, username, password: hashedPassword },
        });
        // Generate refresh token
        const refreshToken = await signRefreshToken({ sub: user.id });
        // Set the refresh token as a cookie
        setCookie(c, 'refreshToken', refreshToken, 7 * 24 * 60 * 60);
        // Generate access token
        const accessToken = await signAccessToken({ sub: user.id });
        return c.json({
            accessToken,
            user: { id: user.id, email: user.email, username: user.username },
        });
    }
    catch (error) {
        console.error('Error creating user:', error);
        return c.json({ error: 'Internal Server Error' }, 500);
    }
};
// Login function
export const login = async (c) => {
    const body = await c.req.json();
    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
        return c.json({ error: parsed.error.flatten().fieldErrors }, 400);
    }
    const { username, password } = parsed.data;
    try {
        const user = await prisma.user.findUnique({
            where: { username },
        });
        if (!user)
            return c.json({ error: 'Invalid credentials' }, 401);
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid)
            return c.json({ error: 'Invalid credentials' }, 401);
        // Generate refresh token
        const refreshToken = await signRefreshToken({ sub: user.id });
        // Set the refresh token as a cookie
        setCookie(c, 'refreshToken', refreshToken, 7 * 24 * 60 * 60);
        // Generate access token
        const accessToken = await signAccessToken({ sub: user.id });
        return c.json({
            accessToken,
            user: { id: user.id, email: user.email, username: user.username },
        });
    }
    catch (error) {
        console.error('Error logging in user:', error);
        return c.json({ error: 'Internal Server Error' }, 500);
    }
};
// Refresh token handler
export const refreshToken = async (c) => {
    const cookie = c.req.header("cookie");
    const token = cookie?.split("; ").find((c) => c.startsWith("refreshToken="))?.split("=")[1];
    if (!token)
        return c.json({ error: "No refresh token provided" }, 401);
    try {
        const payload = await verifyToken(token);
        if (!payload.sub)
            return c.json({ error: "Invalid token" }, 403);
        const newAccessToken = await signAccessToken({ sub: payload.sub });
        return c.json({ accessToken: newAccessToken });
    }
    catch (err) {
        console.error('Error verifying token:', err);
        return c.json({ error: "Token verification failed" }, 403);
    }
};
// Logout function
export const logout = async (c) => {
    // Expire the refresh token cookie
    setCookie(c, 'refreshToken', '', 0); // Max-Age=0 to expire it immediately
    return c.json({ message: 'Logged out successfully' });
};
// Protect routes using the `authenticate` middleware
export const protectedRoute = async (c) => {
    // This middleware checks for the access token
    await authenticate(c);
    // Your protected route logic here
    return c.json({ message: 'You have access to this route' });
};
// Sign Access Token (short-lived)
export async function signAccessToken(payload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(process.env.ACCESS_TOKEN_EXPIRY || '15m') // default: 15 minutes
        .sign(secret);
}
// Sign Refresh Token (long-lived)
export async function signRefreshToken(payload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(process.env.REFRESH_TOKEN_EXPIRY || '7d') // default: 7 days
        .sign(secret);
}
// Verify Token
export const verifyToken = async (token) => {
    try {
        if (process.env.NODE_ENV !== 'production') {
            console.log('Verifying token:', token);
        }
        const { payload } = await jwtVerify(token, secret);
        return payload;
    }
    catch (err) {
        if (err instanceof errors.JWTExpired) {
            console.error('Token has expired.');
            throw new Error('Token expired');
        }
        console.error('JWT verification failed:', err);
        throw new Error('Invalid token or error verifying the token.');
    }
};
