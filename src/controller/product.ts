import type { Context } from 'hono';
import prisma from '../prisma/client.js';
import { getUserId } from '../middleware/middleware.js';

export const createProduct = async (c: Context) => {
  const userId = getUserId(c);
  const body = await c.req.json();

  const {
    title,
    logo,
    shortDescription,
    fullDescription,
    link,
    githubUrl,
    tags,
  } = body;

  if (
    !title || !logo || !shortDescription || !fullDescription ||
    !link || !githubUrl || !tags || !Array.isArray(tags)
  ) {
    return c.json({ error: 'Missing or invalid fields' }, 400);
  }

  const product = await prisma.product.create({
    data: {
      userId, 
      title,
      logo,
      shortDescription,
      fullDescription,
      link,
      githubUrl,
      tags,
    },
  });

  return c.json(product, 201);
};


export const getAllProducts = async (c: Context) => {
  const products = await prisma.product.findMany();
  return c.json(products);
};

export const getTopProducts = async (c: Context) => {
  const products = await prisma.product.findMany({
    orderBy: { upvotes: 'desc' },
    take: 10,
  });
  return c.json(products);
};

export const getSavedProducts = async (c: Context) => {
  const userId = getUserId(c);
  const saved = await prisma.savedProduct.findMany({
    where: { userId },
    include: { product: true },
  });

  const products = saved.map((s) => s.product);
  return c.json(products);
};

export const toggleSaveProduct = async (c: Context) => {
  const userId = getUserId(c);
  const productId = c.req.param('id');

  const existing = await prisma.savedProduct.findUnique({
    where: {
      userId_productId: { userId, productId },
    },
  });

  if (existing) {
    await prisma.savedProduct.delete({
      where: { userId_productId: { userId, productId } },
    });
    return c.json({ saved: false });
  }

  await prisma.savedProduct.create({
    data: { userId, productId },
  });

  return c.json({ saved: true });
};

export const upvoteProduct = async (c: Context) => {
  const userId = getUserId(c);
  const productId = c.req.param('id');

  const alreadyUpvoted = await prisma.upvote.findUnique({
    where: { userId_productId: { userId, productId } },
  });

  if (alreadyUpvoted) {
    return c.json({ error: 'Already upvoted' }, 400);
  }

  await prisma.$transaction([
    prisma.upvote.create({ data: { userId, productId } }),
    prisma.product.update({
      where: { id: productId },
      data: { upvotes: { increment: 1 } },
    }),
  ]);

  return c.json({ upvoted: true });
};

