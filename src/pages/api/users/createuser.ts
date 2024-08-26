import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const token = req.cookies['auth-token']
      if (token) {
        return res.status(201)
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
