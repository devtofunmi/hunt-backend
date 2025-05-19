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

export const incrementHomepageViews = async () => {
  try {
    const record = await prisma.analytics.findFirst();

    if (record) {
      await prisma.analytics.update({
        where: { id: record.id },
        data: {
          homepageViews: {
            increment: 1,
          },
        },
      });
    } else {
      await prisma.analytics.create({
        data: {
          homepageViews: 1,
        },
      });
    }

    return { success: true };
  } catch (error) {
    console.error("Error incrementing homepage views:", error);
    return { success: false, error: "Failed to increment homepage views" };
  }
};