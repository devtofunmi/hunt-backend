import { Hono } from 'hono';
import { getProfile, updateProfile } from '../controller/profile.js';
// import { authMiddleware } from '../middleware/authmiddleware.js';
import { authMiddleware } from '../middleware/middleware.js';


const profileRoutes = new Hono();

// Route to get the current user's profile
profileRoutes.use('/', authMiddleware);
profileRoutes.get('/', getProfile);
profileRoutes.put('/', updateProfile);


export default profileRoutes;
