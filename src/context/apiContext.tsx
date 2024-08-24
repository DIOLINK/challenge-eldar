'use client'

import { useForm } from '@/hooks/useForm'
import { useFormUser } from '@/hooks/useFormUser'
import { useLocalState } from '@/hooks/useLocalStorage'
import { FlattenedObject, User } from '@/types'
import { flattenObject } from '@/utils/flattenObject'
import { GridRowSelectionModel } from '@mui/x-data-grid'
import {
  ChangeEvent,
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
  userSelected: User
  values: FlattenedObject
  rowSelectionModel: GridRowSelectionModel
  setUsersContext: (users: User[]) => void
  addUser: (user: User) => void
  editUsers: (user: User) => void
  deleteUsers: () => void
  setRowSelectionModel: Dispatch<SetStateAction<GridRowSelectionModel>>
  setUserSelected: Dispatch<SetStateAction<User>>
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const ApiContext = createContext<ApiContextType>({} as ApiContextType)

export const UsersContextProvider = ({ children }: PropsWithChildren) => {
  const [storedUsersValue, setUsersValue] = useLocalState<User[]>('users', [])
  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>([])
  const [users, setUsers] = useState<User[]>(storedUsersValue as User[])

  const { userSelected, userByValues, setUserSelected } = useFormUser(users)

  const { values, handleInputChange, reset } = useForm<FlattenedObject>({
    ...flattenObject({
      ...users.find((user) => user.id === rowSelectionModel[0]),
    }),
  })

  useEffect(() => {
    const findUser = users.find((user) => user.id === rowSelectionModel[0])
    reset({
      ...flattenObject({
        ...findUser,
      }),
    })
  }, [setRowSelectionModel, rowSelectionModel])

  useEffect(() => {
    setUsersValue(users)
  }, [users])

  function setUsersContext(users: User[]) {
    setUsers(users)
  }

  function addUser() {
    const newUser = userByValues()
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

  function editUsers() {}

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
        values,
        users,
        userSelected,
        rowSelectionModel,
        setUserSelected,
        handleInputChange,
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
