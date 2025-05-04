import type { Context } from 'hono';
import { verifyRefreshToken, generateAccessToken } from '../utils/jwt.js';  // Assuming you have these utils
import prisma from '../prisma/client.js';

// Profile controller: Fetch the current user's profile
export const getProfile = async (c: Context) => {
  // Get the refreshToken from the cookies
  const cookie = c.req.header('Cookie') || '';
  const tokenMatch = cookie.match(/refreshToken=([^;]+)/);
  const refreshToken = tokenMatch?.[1];

  if (!refreshToken) {
    return c.json({ error: 'No refresh token provided' }, 401);
  }

  try {
    // Verify the refresh token
    const payload = verifyRefreshToken(refreshToken); // The payload should contain the user ID

    // Generate a new access token using the payload data (user ID)
    let accessToken: string;
    if (typeof payload !== 'string' && payload.id) {
      accessToken = generateAccessToken({ id: payload.id });
    } else {
      throw new Error('Invalid token payload');
    }

    // Fetch user data from the database using the ID from the payload
    const user = await prisma.user.findUnique({
      where: { id: payload.id },
      select: { id: true, email: true, username: true },
    });

    if (!user) {
      return c.json({ error: 'User not found' }, 404);
    }

    // Return the profile information with the new access token
    return c.json({ user, accessToken });
  } catch (error) {
    console.error('Token verification failed:', error);
    return c.json({ error: 'Invalid or expired refresh token' }, 403);
  }
};

// Profile controller: Update the current user's profile
export const updateProfile = async (c: Context) => {
  // Assuming user information is set in req.user by middleware
  const userId = c.req.user?.id;

  if (!userId) {
    return c.json({ error: 'User not authenticated' }, 401);
  }

  const { username, email } = await c.req.json();

  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { username, email },
    });

    return c.json({ user: updatedUser });
  } catch (error) {
    console.error('Error updating profile:', error);
    return c.json({ error: 'Failed to update profile' }, 500);
  }
};