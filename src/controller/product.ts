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
    github,
    twitter,
    linkedin,
    bluesky,
  } = body;

  if (
    !title ||
    !logo ||
    !shortDescription ||
    !fullDescription ||
    !link ||
    !githubUrl ||
    !tags ||
    !Array.isArray(tags)
  ) {
    return c.json({ error: 'Missing or invalid fields' }, 400);
  }

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  if (!isValidUrl(link) || !isValidUrl(githubUrl)) {
    return c.json({ error: 'Invalid link or GitHub URL' }, 400);
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
      twitter,
      github,
      linkedin,
      bluesky,
    },
  });

  return c.json(product, 201);
};

export const getUserProducts = async (c: Context) => {
  const userId = getUserId(c);

  if (!userId) {
    return c.json({ error: 'Unauthorized' }, 401);
  }

  const products = await prisma.product.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });

  return c.json(products);
};


export const getAllProducts = async (c: Context) => {
  const userId = getUserId(c);

  // Fetch all products with user info
  const products = await prisma.product.findMany({
    include: {
      user: {
        select: {
          id: true,
          username: true,
          image: true,
          bio: true,
          twitter: true,
          github: true,
          linkedin: true,
          bluesky: true,
        },
      },
    },
  });

  // If no user is logged in, just return all products with saved: false
  if (!userId) {
    return c.json(
      products.map((p) => ({
        ...p,
        saved: false,
      }))
    );
  }

  // Get all saved product IDs for the current user
  const saved = await prisma.savedProduct.findMany({
    where: {
      userId,
      productId: {
        in: products.map((p) => p.id),
      },
    },
    select: {
      productId: true,
    },
  });

  const savedSet = new Set(saved.map((s) => s.productId));

  // Attach 'saved' boolean to each product
  const productsWithSaved = products.map((p) => ({
    ...p,
    saved: savedSet.has(p.id),
  }));

  return c.json(productsWithSaved);
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
    include: {
      product: true,
    },
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

export const getUpvotedProducts = async (c: Context) => {
  const userId = getUserId(c);

  if (!userId) {
    return c.json({ error: 'Unauthorized' }, 401);
  }

  const upvoted = await prisma.upvote.findMany({
    where: { userId },
    include: {
      product: true,
    },
  });

  const products = upvoted.map((u) => u.product);
  return c.json(products);
};