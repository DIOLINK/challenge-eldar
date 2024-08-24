import { decodeToken } from '@/libs/jwt'
import { RoleUser, User } from '@/types'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'PUT') {
    try {
      const token = req.cookies['auth-token']
      if (token) {
        const { firstname, lastname, email, password, username, user } =
          req.body
        const decode = await decodeToken(token)
        if (decode) {
          const { role } = decode as { role: RoleUser }
          if (role === RoleUser.admin) {
            const editUser: User = {
              id: user.id,
              firstname,
              lastname,
              email,
              login: {
                uuid: user.loadin.uuid,
                username,
                password,
              },
              address: {
                city: '',
                geo: {
                  lng: '',
                  lat: '',
                },
                street: '',
                suite: '',
                zipcode: '',
              },
              birthDate: new Date('1985-12-21'),
              role: RoleUser.admin,
              phone: '',
              website: '',
              company: {
                bs: '',
                name: '',
                catchPhrase: '',
              },
            }
            return res.status(201).json(editUser)
          } else {
            return res.status(403).json({
              message: 'You don`t have permission to access this resource.',
            })
          }
        }
      }
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        message: 'Something went wrong while editing the user',
      })
    }
  } else {
    res.setHeader('Allow', 'PUT')
    return res.status(405).json({
      error: `Method ${req.method} now allowed`,
    })
  }
}
