import { Hono } from 'hono';
import { getAllProducts, getSavedProducts, getTopProducts, toggleSaveProduct, upvoteProduct } from '../controller/product.js';
import { authMiddleware } from '../middleware/middleware.js';


const productRoutes = new Hono();

// Public routes
productRoutes.get('/products', getAllProducts);
productRoutes.get('/products/top', getTopProducts);

// Authenticated routes
productRoutes.use('/products/*', authMiddleware);
productRoutes.get('/products/saved', getSavedProducts);
productRoutes.post('/products/:id/save', toggleSaveProduct);
productRoutes.post('/products/:id/upvote', upvoteProduct);

export default productRoutes;
