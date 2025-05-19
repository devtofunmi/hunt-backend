import prisma from "../prisma/client.js";


export const getAnalyticsStats = async () => {
  const [totalProducts, totalViews, totalUpvotes, featuredProducts] = await Promise.all([
    prisma.product.count(),
    prisma.product.aggregate({
      _sum: {
        views: true, // Make sure 'views' is a numeric field in your Product model
      },
    }),
    prisma.product.aggregate({
      _sum: {
        upvotes: true,
      },
    }),
    prisma.product.count({
      where: {
        isFeatured: true,
      },
    }),
  ]);

  return {
    totalProducts,
    totalViews: totalViews._sum.views || 0,
    totalUpvotes: totalUpvotes._sum.upvotes || 0,
    featuredProducts,
  };
};