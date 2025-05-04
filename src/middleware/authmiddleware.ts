import type { Context, HonoRequest } from 'hono';
import { verifyRefreshToken } from '../utils/jwt.js';

declare module 'hono' {
  interface HonoRequest {
    user?: { id: string };
  }
}

export const authMiddleware = async (c: Context) => {
  const cookie = c.req.header('Cookie') || '';
  const tokenMatch = cookie.match(/refreshToken=([^;]+)/);
  const refreshToken = tokenMatch?.[1];

  if (!refreshToken) {
    return c.json({ error: 'No refresh token provided' }, 401);
  }

  try {
    // Verify the refresh token
    const payload = verifyRefreshToken(refreshToken);

    // Attach user id to context so routes can access it
    if (typeof payload !== 'string' && 'id' in payload) {
      c.req.user = { id: payload.id };
    } else {
      throw new Error('Invalid token payload');
    }
    return;
  } catch (error) {
    console.error('Token verification failed', error);
    return c.json({ error: 'Invalid or expired refresh token' }, 403);
  }
};
