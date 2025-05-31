import { Hono } from 'hono';
import { getCommentsForProduct, createComment, updateComment, deleteComment } from '../controller/comment.js';
import { authMiddleware } from '../middleware/middleware.js';

const commentRoute = new Hono();

commentRoute.get('/:productId', getCommentsForProduct);
commentRoute.post('/', authMiddleware, createComment);
commentRoute.patch('/:id', authMiddleware, updateComment);
commentRoute.delete('/:id', authMiddleware, deleteComment);

export default commentRoute;


