import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import authRoutes from './route/auth.js';
import profileRoutes from './route/profile.js';
import { config } from 'dotenv';
config();
const app = new Hono();
app.use('*', cors({
    origin: (origin) => {
        const allowedOrigins = [
            'http://localhost:3000',
            'https://launchhunt.up.railway.app',
            'https://launchhunt.netlify.app',
        ];
        return allowedOrigins.includes(origin ?? '') ? origin : '';
    },
    credentials: true,
    allowHeaders: ['Content-Type'],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));
app.get('/', (c) => c.text('Hello Jay!'));
app.route('/auth', authRoutes);
app.route('/profile', profileRoutes);
serve({
    fetch: app.fetch,
    port: 3000,
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
});
export default app;
