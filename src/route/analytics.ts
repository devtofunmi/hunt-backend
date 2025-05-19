import { Hono } from 'hono';
import {
  getAnalyticsStats,
  incrementHomepageViews,
} from '../controller/analytics.js';

const analyticsRoute = new Hono();

// Get global stats (product count, total views, etc.)
analyticsRoute.get('/', async (c) => {
  const stats = await getAnalyticsStats();
  return c.json(stats);
});



// Increment homepage views
analyticsRoute.post('/view/homepage', async (c) => {
  const result = await incrementHomepageViews();
  return c.json(result, result.success ? 200 : 500);
});

export default analyticsRoute;
