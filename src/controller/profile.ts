import type { Context } from 'hono';
import prisma from '../prisma/client.js';
import { getUserId } from '../middleware/middleware.js';

// Profile controller: Fetch the current user's profile
export const getProfile = async (c: Context) => {
  const userId = getUserId(c); // Get the user ID from the context set by the middleware

  try {
    // Fetch user data from the database using the userId from the context
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, username: true },
    });

    if (!user) {
      return c.json({ error: 'User not found' }, 404);
    }

    return c.json({ user });
  } catch (error) {
    console.error('Error fetching profile:', error);
    return c.json({ error: 'Failed to fetch profile' }, 500);
  }
};

// Profile controller: Update the current user's profile
export const updateProfile = async (c: Context) => {
  // Use the middleware to get the authenticated user's ID
  const userId = getUserId(c); // This retrieves the user ID from the context

  const { username, email } = await c.req.json();

  try {
    // Update the user profile in the database
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
