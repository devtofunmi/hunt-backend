import { Hono } from 'hono';
import { getCommentsForProduct, createComment } from '../controller/comment.js';
import { authMiddleware } from '../middleware/middleware.js';

const commentRoute = new Hono();

commentRoute.get('/:productId', getCommentsForProduct);
commentRoute.post('/', authMiddleware, createComment);

export default commentRoute;


