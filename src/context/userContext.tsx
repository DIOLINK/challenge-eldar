'use client'

import { ROUTES } from '@/helpers'
import { useLocalState } from '@/hooks/useLocalStorage'
import { SignOut } from '@/services'
import { User } from '@/types'
import { useRouter } from 'next/router'
import { createContext, PropsWithChildren, useContext, useState } from 'react'

interface UserContextType {
  user?: User
  setUserContext: (user: User) => void
  resetUser: () => void
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter()
  const [storedValue, setValue] = useLocalState<User | undefined>(
    'user',
    undefined
  )
  const [user, setUser] = useState<User | undefined>(storedValue as User)

  function setUserContext(user: User) {
    setUser(user)
    setValue(user)
  }

  function resetUser() {
    SignOut().then(() => {
      setUser(undefined)
      setValue(undefined)
      router.push(ROUTES.auth)
    })
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUserContext,
        resetUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
