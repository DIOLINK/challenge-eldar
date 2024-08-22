import { isFrontend } from '@/helpers'
import { User } from '@/types'
import axios from 'axios'
const localStorageKey = 'users'
export let users: User[] = []

export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? ''
export async function fetchUser(
  username: string,
  password: string
): Promise<User | null> {
  if (users.length === 0) {
    const response = await axios.get<User[]>(API_URL)
    users = response.data
    if (isFrontend())
      window.localStorage.setItem(localStorageKey, JSON.stringify(users))
  }

  return (
    users.find(
      (user) =>
        user.login.username === username && user.login.password === password
    ) || null
  )
}

export function addUser(user: User) {
  users.push(user)
}

export async function findUserByEmail(
  email: string
): Promise<User | undefined> {
  if (users.length === 0) {
    const response = await axios.get<User[]>(API_URL)
    users = response.data
    if (isFrontend())
      window.localStorage.setItem(localStorageKey, JSON.stringify(users))
  }
  return users.find((user) => user.email === email)
}
