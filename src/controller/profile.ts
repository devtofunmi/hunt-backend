import type { Context } from 'hono';
import prisma from '../prisma/client.js';
import { getUserId } from '../middleware/middleware.js';

export const getProfile = async (c: Context) => {
  const userId = getUserId(c);

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        username: true,
        image: true,
        bio: true,
        twitter: true,
        github: true,
        linkedin: true,
        bluesky: true,
      },
    });

    if (!user) {
      return c.json({ error: "User not found" }, 404);
    }

    return c.json({ user });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return c.json({ error: "Failed to fetch profile" }, 500);
  }
};


export const updateProfile = async (c: Context) => {
  const userId = getUserId(c);

  const {
    username,
    bio,
    image,
    socialLinks,
  } = await c.req.json();

  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        username,
        bio,
        image,
        twitter: socialLinks?.twitter,
        github: socialLinks?.github,
        linkedin: socialLinks?.linkedin,
        bluesky: socialLinks?.bluesky,
      },
    });

    return c.json({ user: updatedUser });
  } catch (error) {
    console.error("Error updating profile:", error);
    return c.json({ error: "Failed to update profile" }, 500);
  }
};

