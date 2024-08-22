import type { NextApiRequest, NextApiResponse } from 'next'

import { addUser, findUserByEmail, users } from '@/data/users'
import { RoleUser } from '@/types'
import { hashPassword } from '@/utils/hashPass'
import { uuid } from 'uuidv4'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { firstname, lastname, email, password, username } = req.body

    const existingUser = findUserByEmail(email)
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const hashedPassword = await hashPassword(password)

    const newUser = {
      id: users.length + 1,
      firstname,
      lastname,
      email,
      login: {
        uuid: uuid(),
        username,
        password: hashedPassword,
      },
      role: RoleUser.user,
    }

    addUser(newUser)

    return res
      .status(201)
      .json({ message: 'User registered successfully', user: newUser })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
