import { RoleUser, User } from '@/types'

export function isAdmin(user?: User): boolean {
  if (!user) return false
  return user?.role === RoleUser.admin
}
