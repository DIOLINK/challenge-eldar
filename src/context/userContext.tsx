'use client'

import { isEmpty } from '@/helpers'
import { useLocalState } from '@/hooks/useLocalStorage'
import { getUsers } from '@/services'
import { User } from '@/types'
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface UserContextType {
  user?: User
  users?: User[]
  setUserContext: (user: User) => void
  resetUser: () => void
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [storedValue, setValue] = useLocalState<User | undefined>(
    'user',
    undefined
  )
  const [user, setUser] = useState<User | undefined>(storedValue as User)

  const [storedUsersValue, setUsersValue] = useLocalState<User[]>('users', [])
  const [users, setUsers] = useState<User[]>(storedUsersValue as User[])

  useEffect(() => {
    if (!isEmpty<User>(users)) return
    getUsers().then((data) => {
      setUsers(data)
      setUsersValue(data)
    })
  }, [])

  function setUserContext(user: User) {
    setUser(user)
    setValue(user)
  }

  function resetUser() {
    setUser(undefined)
    setValue(undefined)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        users,
        setUserContext,
        resetUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
