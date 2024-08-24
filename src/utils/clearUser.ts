import { ClearUser, User } from '@/types'

const attributesToRemove: (keyof User)[] = [
  'email',
  'login',
  'address',
  'company',
  'phone',
]
export function getClearUser(users: User[]) {
  const clearUser: ClearUser[] = users.map((user) => {
    attributesToRemove.forEach((attr) => delete user[attr])
    return user
  })
  return clearUser
}
