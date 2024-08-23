import { NextApiRequest, NextApiResponse } from 'next'
const cookie = require('cookie')
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('auth-token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 0,
        path: '/',
      })
    )
    return res.status(200).json({ message: 'Logout success' })
  } else {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({
      error: `Method ${req.method} now allowed`,
    })
  }
}
