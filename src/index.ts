import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import authRoutes from './route/auth.js'
import profileRoutes from './route/profile.js'
import { config } from 'dotenv'
import productRoutes from './route/product.js'
import analyticsRoute from './route/analytics.js'

config();

const app = new Hono()




app.use('*', cors({
  origin: ['http://localhost:3000', 'https://launchhunt.up.railway.app', 'https://launchhunt.netlify.app'],
  allowHeaders: ['Content-Type', 'Authorization'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));


app.get('/', (c) => c.text('Hello Jay!'));
app.route('/analytics', analyticsRoute);
app.route('/products', productRoutes);
app.route('/auth', authRoutes)
app.route('/profile', profileRoutes)

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  }
)
