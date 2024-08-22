import { User } from '@/types'
import { useState } from 'react'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)

  const login = async (username: string, password: string) => {
    console.log('🚀 ~ login ~ password:', password)
    console.log('🚀 ~ login ~ username:', username)
    setUser(null)

    return false
  }

  const logout = () => {
    setUser(null)
  }

  return { user, login, logout }
}
