import { hash } from 'bcrypt'

export async function hashPassword(password: string) {
  const passHash = await hash(password, 10)
  return passHash as string
}
