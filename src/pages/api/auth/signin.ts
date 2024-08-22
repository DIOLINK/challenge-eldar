import { fetchUser } from '@/data/users'
import { createToken } from '@/libs/jwt'
import { RoleUser } from '@/types'
import { NextApiRequest, NextApiResponse } from 'next'
const cookie = require('cookie')
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { username, password }: { username: string; password: string } =
      req.body
    try {
      const foundUser = await fetchUser(username, password)
      if (foundUser) {
        const token = await createToken({
          id: foundUser.id,
          username: foundUser.login.username,
          role: foundUser.role ?? RoleUser.user,
        })

        res.setHeader(
          'Set-Cookie',
          cookie.serialize('auth-token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60, // One hour
            path: '/',
          })
        )
        return res.status(201).json({
          user: foundUser,
        })
      } else {
        return res.status(404).json({
          message:
            'Authentication failed due to invalid credentials. Please check your information and try again.',
        })
      }
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        error: 'Something went wrong when authenticating',
      })
    }
  } else {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({
      error: `Method ${req.method} now allowed`,
    })
  }
}
