import { User } from '@/types'

export function findUserByEmail(email: string, users?: User[]): User | null {
  return (
    users?.find(
      (user) => user.email.toLowerCase().trim() === email.toLowerCase().trim()
    ) || null
  )
}
