import { Hono } from 'hono'
import { getProfile, login, signup } from '../controller/auth.js'

const authRoutes = new Hono()

authRoutes.post('/signup', signup)
authRoutes.post('/login', login)
authRoutes.get('/profile', getProfile)

export default authRoutes