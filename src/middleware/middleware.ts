import type { MiddlewareHandler } from "hono"
import { verifyAccessToken } from "../utils/jwt.js"


export const authMiddleware: MiddlewareHandler = async (c, next) => {
  const authHeader = c.req.header('Authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return c.json({ error: 'Unauthorized' }, 401)
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = verifyAccessToken(token) as { id: string }
    // Store user ID on context for future use
    c.set('userId', decoded.id)
    await next()
  } catch (err) {
    return c.json({ error: 'Invalid or expired token' }, 401)
  }
}
