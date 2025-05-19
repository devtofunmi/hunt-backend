import prisma from "../prisma/client.js";


export const getAnalyticsStats = async () => {
  // Fetch product counts, sums, and the analytics record with homepageViews
  const [totalProducts, productViews, totalUpvotes, featuredProducts, analyticsRecord] = await Promise.all([
    prisma.product.count(),
    prisma.product.aggregate({
      _sum: { views: true }, // total product views (optional)
    }),
    prisma.product.aggregate({
      _sum: { upvotes: true },
    }),
    prisma.product.count({
      where: { isFeatured: true },
    }),
    prisma.analytics.findFirst(), // Get homepage views record
  ]);

  return {
    totalProducts,
    totalViews: analyticsRecord?.homepageViews || 0,  // Use homepageViews here
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