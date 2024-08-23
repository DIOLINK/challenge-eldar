'use client'

import { isEmpty } from '@/helpers'
import { useLocalState } from '@/hooks/useLocalStorage'
import { getUsers } from '@/services'
import { ClearUser, User } from '@/types'
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'

interface ApiContextType {
  users?: User[] | ClearUser[]
  setUsersContext: (users: User[] | ClearUser[]) => void
  resetUsers: () => void
}

export const ApiContext = createContext<ApiContextType>({} as ApiContextType)

export const UsersContextProvider = ({ children }: PropsWithChildren) => {
  const [storedUsersValue, setUsersValue] = useLocalState<User[] | ClearUser[]>(
    'users',
    []
  )
  const [users, setUsers] = useState<User[] | ClearUser[]>(
    storedUsersValue as User[] | ClearUser[]
  )

  useEffect(() => {
    if (!isEmpty<User | ClearUser>(users)) return
    getUsers().then((data) => {
      setUsers(data)
      setUsersValue(data)
    })
  }, [])

  function setUsersContext(users: User[] | ClearUser[]) {
    setUsersValue(users)
  }

  function resetUsers() {
    setUsersValue([])
  }

  return (
    <ApiContext.Provider
      value={{
        users,
        setUsersContext,
        resetUsers,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

export const useApiContext = () => useContext(ApiContext)
