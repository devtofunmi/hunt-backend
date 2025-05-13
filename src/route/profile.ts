import { Hono } from 'hono';
import { getProfile, updateProfile } from '../controller/profile.js';
import { authMiddleware } from '../middleware/middleware.js';


const profileRoutes = new Hono();

profileRoutes.use('/', authMiddleware);
profileRoutes.get('/', (c) => {
  console.log("GET /profile endpoint hit");
  return getProfile(c);
});
profileRoutes.put('/', (c) => {
  console.log("PUT /profile endpoint hit");
  return updateProfile(c);
});



export default profileRoutes;
