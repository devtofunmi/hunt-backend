import type { Context } from 'hono';
import prisma from '../prisma/client.js';


export const getCommentsForProduct = async (c: Context) => {
  const productId = c.req.param('productId');

  try {
    const comments = await prisma.comment.findMany({
      where: { productId },
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            image: true,
          },
        },
      },
    });

    return c.json(comments);
  } catch (err) {
    console.error(err);
    return c.json({ message: 'Failed to fetch comments' }, 500);
  }
};

export const createComment = async (c: Context) => {
  const body = await c.req.json();
  const { content, productId } = body;
  const userId = c.get('userId');

  if (!userId) {
    return c.json({ message: 'Unauthorized' }, 401);
  }

  try {
    const comment = await prisma.comment.create({
      data: {
        content,
        productId,
        userId,
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            image: true,
          },
        },
      },
    });

    return c.json(comment, 201);
  } catch (err) {
    console.error(err);
    return c.json({ message: 'Failed to post comment' }, 500);
  }
};
