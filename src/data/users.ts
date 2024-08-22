import { User } from '@/types'

export const users: User[] = []

export function addUser(user: User) {
  users.push(user)
}

export function findUserByEmail(email: string): User | undefined {
  return users.find((user) => user.email === email)
}
