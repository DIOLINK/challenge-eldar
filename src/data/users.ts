import { User } from '@/types'
import axios from 'axios'
const localStorageKey = 'users'
export let users: User[] = JSON.parse(
  localStorage.getItem(localStorageKey) || '[]'
)
const API_URL = process.env.API_URL ?? ''
export async function fetchUser(
  username: string,
  password: string
): Promise<User | null> {
  if (users.length === 0) {
    const response = await axios.get<User[]>(API_URL)
    users = response.data
    localStorage.setItem(localStorageKey, JSON.stringify(users))
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

export function findUserByEmail(email: string): User | undefined {
  return users.find((user) => user.email === email)
}
