import { Hono } from 'hono';
import { getAnalyticsStats } from '../controller/analytics.js';
// import { getAnalyticsStats } from '../controllers/analyticsController';

const analyticsRoute = new Hono();

analyticsRoute.get('/', async (c) => {
  const stats = await getAnalyticsStats();
  return c.json(stats);
});

export default analyticsRoute;