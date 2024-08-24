'use client'

import { useLocalState } from '@/hooks/useLocalStorage'
import { User } from '@/types'
import { GridRowSelectionModel } from '@mui/x-data-grid'
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'

interface ApiContextType {
  users?: User[]
  rowSelectionModel: GridRowSelectionModel
  setUsersContext: (users: User[]) => void
  addUser: (user: User) => void
  editUsers: (user: User) => void
  deleteUsers: () => void
  setRowSelectionModel: Dispatch<SetStateAction<GridRowSelectionModel>>
}

export const ApiContext = createContext<ApiContextType>({} as ApiContextType)

export const UsersContextProvider = ({ children }: PropsWithChildren) => {
  const [storedUsersValue, setUsersValue] = useLocalState<User[]>('users', [])
  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>([])
  const [users, setUsers] = useState<User[]>(storedUsersValue as User[])

  useEffect(() => {
    setUsersValue(users)
  }, [users])

  function setUsersContext(users: User[]) {
    setUsers(users)
  }

  function addUser(newUser: User) {
    const findUser = users.find(
      (user) =>
        user.email.toLowerCase() === newUser.email.toLowerCase() &&
        user.login.username.toLowerCase() === user.login.username.toLowerCase()
    )
    if (!findUser) {
      setUsers((oldUsers) => [...oldUsers, newUser])
      setUsersValue(users)
    }
  }

  function editUsers() {
    console.log(`Editing user with ID: ${rowSelectionModel}`)
  }

  function deleteUsers() {
    if (rowSelectionModel.length > 0) {
      rowSelectionModel.forEach((singleId) => {
        setUsers((oldUsers) => oldUsers.filter((u) => u.id !== singleId))
      })
    }
  }

  return (
    <ApiContext.Provider
      value={{
        users,
        rowSelectionModel,
        setUsersContext,
        addUser,
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
