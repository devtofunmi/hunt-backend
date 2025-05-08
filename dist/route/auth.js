import { Hono } from 'hono';
import { login, signup } from '../controller/auth.js';
import { getProfile } from '../controller/profile.js';
const authRoutes = new Hono();
authRoutes.post('/signup', signup);
authRoutes.post('/login', login);
authRoutes.get('/profile', getProfile);
export default authRoutes;
