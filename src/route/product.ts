import { Hono } from 'hono';
import { createProduct, getAllProducts, getSavedProducts, getTopProducts, getUpvotedProducts, getUserProducts, toggleSaveProduct, upvoteProduct } from '../controller/product.js';
import { authMiddleware } from '../middleware/middleware.js';


const productRoutes = new Hono();
//public routes
productRoutes.get('/', getAllProducts); // GET /products
productRoutes.get('/top', getTopProducts); // GET /products/top
// Authenticated routes
productRoutes.use('*', authMiddleware);
productRoutes.get('/saved', getSavedProducts); // GET /products/saved
productRoutes.get('/upvoted', getUpvotedProducts); // GET /products/upvoted
productRoutes.post('/:id/save', toggleSaveProduct); // POST /products/:id/save
productRoutes.post('/:id/upvote', upvoteProduct); // POST /products/:id/upvote
productRoutes.post('/', createProduct); // POST /products
productRoutes.get('/me', getUserProducts); // GET /products/me


export default productRoutes;
