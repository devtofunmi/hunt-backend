import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET!
const REFRESH_SECRET = process.env.REFRESH_SECRET!

export function generateAccessToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' })
}

export function generateRefreshToken(payload: object) {
  return jwt.sign(payload, REFRESH_SECRET, { expiresIn: '7d' })
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, JWT_SECRET)
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(token, REFRESH_SECRET)
}
