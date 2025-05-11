import { Hono } from 'hono';
import { login, signup, refreshToken } from '../controller/auth.js';
import { getProfile } from '../controller/profile.js';
const authRoutes = new Hono();
authRoutes.post('/signup', signup);
authRoutes.post('/login', login);
authRoutes.get('/profile', getProfile);
authRoutes.post("/refresh", refreshToken);
export default authRoutes;
