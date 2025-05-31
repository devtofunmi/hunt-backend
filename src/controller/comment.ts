import type { Context } from 'hono';
import prisma from '../prisma/client.js';


export const getCommentsForProduct = async (c: Context) => {
  const productId = c.req.param('productId');

  try {
    const comments = await prisma.comment.findMany({
  where: { productId, parentId: null }, // top-level only
  orderBy: { createdAt: 'desc' },
  include: {
    user: {
      select: {
        id: true,
        username: true,
        image: true,
      },
    },
    replies: {
      include: {
        user: {
          select: {
            id: true,
            username: true,
            image: true,
          },
        },
      },
      orderBy: {
        createdAt: 'asc',
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
  const { content, productId, parentId } = body;
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
        parentId, // allow null for top-level comments
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            image: true,
          },
        },
        replies: true,
      },
    });

    return c.json(comment, 201);
  } catch (err) {
    console.error(err);
    return c.json({ message: 'Failed to post comment' }, 500);
  }
};

export const updateComment = async (c: Context) => {
  const commentId = c.req.param('id');
  const { content } = await c.req.json();
  const userId = c.get('userId');

  const comment = await prisma.comment.findUnique({ where: { id: commentId } });

  if (!comment || comment.userId !== userId) {
    return c.json({ message: 'Unauthorized or not found' }, 403);
  }

  const updated = await prisma.comment.update({
    where: { id: commentId },
    data: { content },
  });

  return c.json(updated);
};

export const deleteComment = async (c: Context) => {
  const commentId = c.req.param('id');
  const userId = c.get('userId');

  const comment = await prisma.comment.findUnique({ where: { id: commentId } });

  if (!comment || comment.userId !== userId) {
    return c.json({ message: 'Unauthorized or not found' }, 403);
  }

  await prisma.comment.delete({ where: { id: commentId } });

  return c.json({ message: 'Comment deleted' });
};

