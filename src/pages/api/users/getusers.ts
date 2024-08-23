import { getUsersApi } from '@/data/users'
import { decodeToken } from '@/libs/jwt'
import { ClearUser, RoleUser, User } from '@/types'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const token = req.cookies['auth-token']
      if (token) {
        const decode = await decodeToken(token)

        if (decode) {
          const { role } = decode as { role: RoleUser }
          if (role !== RoleUser.admin) {
            const users = await getUsersApi()
            const attributesToRemove: (keyof User)[] = [
              'email',
              'login',
              'address',
              'company',
              'phone',
            ]
            const clerUser: ClearUser[] = users.map((user) => {
              attributesToRemove.forEach((attr) => delete user[attr])
              return user
            })
            return res.status(201).json(clerUser)
          } else {
            const users = await getUsersApi()
            return res.status(201).json(users)
          }
        }
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
