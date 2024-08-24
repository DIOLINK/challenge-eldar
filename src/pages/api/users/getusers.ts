import { getUsersApi } from '@/data/users'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const token = req.cookies['auth-token']
      if (token) {
        const users = await getUsersApi()
        return res.status(201).json(users)
      }
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        error: 'Something went wrong when authenticating',
      })
    }
  } else {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({
      error: `Method ${req.method} now allowed`,
    })
  }
}
