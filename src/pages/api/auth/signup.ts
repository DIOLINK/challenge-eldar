import type { NextApiRequest, NextApiResponse } from 'next'

import { addUser, findUserByEmail, users } from '@/data/users'
import { createToken } from '@/libs/jwt'
import { RoleUser, User } from '@/types'
import { hashPassword } from '@/utils/hashPass'
import { uuid } from 'uuidv4'
const cookie = require('cookie')
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { firstname, lastname, email, password, username } = req.body

    const existingUser = await findUserByEmail(email)
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }
    const hashedPassword = await hashPassword(password)

    const newUser: User = {
      id: users.length + 1,
      firstname,
      lastname,
      email,
      login: {
        uuid: uuid(),
        username,
        password: hashedPassword,
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
    const token = await createToken({
      id: newUser.id,
      username: newUser.login.username,
      role: newUser.role,
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
    addUser(newUser)

    return res
      .status(201)
      .json({ message: 'User registered successfully', user: newUser })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
