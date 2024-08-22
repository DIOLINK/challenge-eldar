import jwt from 'jsonwebtoken'

const TOKEN = process.env.TOKEN_SECRET ?? 'secret'

export function createToken(payload: string | Buffer | object) {
  return new Promise<string | undefined>((resolve, reject) => {
    jwt.sign(payload, TOKEN, { expiresIn: '1h' }, (error, token) => {
      if (error) reject(error)
      resolve(token)
    })
  })
}
