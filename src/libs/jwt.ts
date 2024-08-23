import jwt, { JwtPayload } from 'jsonwebtoken'

const TOKEN = process.env.TOKEN_SECRET || 'secret'

export function createToken(payload: string | Buffer | object) {
  return new Promise<string | undefined>((resolve, reject) => {
    jwt.sign(payload, TOKEN, { expiresIn: '1h' }, (error, token) => {
      if (error) reject(error)
      resolve(token)
    })
  })
}

export function decodeToken(
  token: string
): Promise<string | JwtPayload | unknown | undefined> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, TOKEN, (error, decoded) => {
      if (error) {
        reject(error)
      } else {
        resolve(decoded)
      }
    })
  })
}
