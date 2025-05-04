import type { Context } from 'hono'
import { z } from 'zod'
import bcrypt from 'bcrypt'
import prisma from '../prisma/client.js'
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../utils/jwt.js'



const signupSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3),
  password: z.string().min(6),
})

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
})

export const signup = async (c: Context) => {
  const body = await c.req.json()
  const parsed = signupSchema.safeParse(body)

  if (!parsed.success) {
    return c.json({ error: parsed.error.flatten().fieldErrors }, 400)
  }

  const { email, username, password } = parsed.data

  const existingUser = await prisma.user.findFirst({
    where: { OR: [{ email }, { username }] },
  })

  if (existingUser) {
    return c.json({ error: 'User already exists' }, 409)
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: { email, username, password: hashedPassword },
  })

  const accessToken = generateAccessToken({ id: user.id })
  const refreshToken = generateRefreshToken({ id: user.id })

  c.header(
    'Set-Cookie',
    `refreshToken=${refreshToken}; HttpOnly; Path=/; Max-Age=${7 * 24 * 60 * 60}`
  )

  return c.json({
    accessToken,
    user: { id: user.id, email: user.email, username: user.username },
  })
}

export const login = async (c: Context) => {
  const body = await c.req.json()
  const parsed = loginSchema.safeParse(body)

  if (!parsed.success) {
    return c.json({ error: parsed.error.flatten().fieldErrors }, 400)
  }

  const { username, password } = parsed.data

  const user = await prisma.user.findUnique({
    where: { username },
  })

  if (!user) return c.json({ error: 'Invalid credentials' }, 401)

  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) return c.json({ error: 'Invalid credentials' }, 401)

  const accessToken = generateAccessToken({ id: user.id })
  const refreshToken = generateRefreshToken({ id: user.id })

  c.header(
    'Set-Cookie',
    `refreshToken=${refreshToken}; HttpOnly; Path=/; Max-Age=${7 * 24 * 60 * 60}`
  )

  return c.json({
    accessToken,
    user: { id: user.id, email: user.email, username: user.username },
  })
}

export const getProfile = async (c: Context) => {
  const cookie = c.req.header('Cookie') || ''
  const tokenMatch = cookie.match(/refreshToken=([^;]+)/)
  const refreshToken = tokenMatch?.[1]

  if (!refreshToken) {
    return c.json({ error: 'Unauthorized: No token' }, 401)
  }

  try {
    const payload = verifyRefreshToken(refreshToken) as { id: string }

    const user = await prisma.user.findUnique({
      where: { id: payload.id },
      select: { id: true, username: true, email: true },
    })

    if (!user) {
      return c.json({ error: 'User not found' }, 404)
    }

    return c.json({ user })
  } catch (error) {
    return c.json({ error: 'Invalid or expired token' }, 403)
  }
}

export const refresh = async (c: Context) => {
  const cookie = c.req.header('Cookie') || ''
  const tokenMatch = cookie.match(/refreshToken=([^;]+)/)
  const refreshToken = tokenMatch?.[1]

  if (!refreshToken) return c.json({ error: 'No refresh token provided' }, 401)

  try {
    const payload = verifyRefreshToken(refreshToken) as { id: string }
    const newAccessToken = generateAccessToken({ id: payload.id })
    return c.json({ accessToken: newAccessToken })
  } catch {
    return c.json({ error: 'Invalid or expired refresh token' }, 403)
  }
}

export const logout = async (c: Context) => {
  // Expire the cookie
  c.header('Set-Cookie', `refreshToken=; HttpOnly; Path=/; Max-Age=0`)
  return c.json({ message: 'Logged out successfully' })
}
