'use client'

import { useLocalState } from '@/hooks/useLocalStorage'
import { ClearUser, User } from '@/types'
import { GridRowSelectionModel } from '@mui/x-data-grid'
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react'

interface ApiContextType {
  users?: User[] | ClearUser[]
  rowSelectionModel: GridRowSelectionModel
  setUsersContext: (users: User[] | ClearUser[]) => void
  resetUsers: () => void
  createUsers: () => void
  editUsers: (user: User) => void
  deleteUsers: () => void
  setRowSelectionModel: Dispatch<SetStateAction<GridRowSelectionModel>>
}

export const ApiContext = createContext<ApiContextType>({} as ApiContextType)

export const UsersContextProvider = ({ children }: PropsWithChildren) => {
  const [storedUsersValue, setUsersValue] = useLocalState<User[] | ClearUser[]>(
    'users',
    []
  )
  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>([])
  const [users, setUsers] = useState<User[] | ClearUser[]>(
    storedUsersValue as User[] | ClearUser[]
  )

  function setUsersContext(users: User[] | ClearUser[]) {
    setUsersValue(users)
    setUsers(users)
  }

  function resetUsers() {
    setUsersValue([])
  }
  function createUsers() {}

  function editUsers(user: User) {
    console.log(`Editing user with ID: ${rowSelectionModel}`, user)
  }

  function deleteUsers() {
    if (rowSelectionModel.length > 0) {
      rowSelectionModel.forEach((singleId) => {
        const nuwUsers = users.filter((u) => u.id !== singleId)
        console.log('🚀 ~ ids.forEach ~ nuwUsers:', nuwUsers)
      })
    }
  }

  return (
    <ApiContext.Provider
      value={{
        users,
        rowSelectionModel,
        setUsersContext,
        resetUsers,
        createUsers,
        editUsers,
        deleteUsers,
        setRowSelectionModel,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

export const useApiContext = () => useContext(ApiContext)
