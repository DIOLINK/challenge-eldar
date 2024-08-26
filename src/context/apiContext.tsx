'use client'

import { useForm } from '@/hooks/useForm'
import { useLocalState } from '@/hooks/useLocalStorage'
import { FlattenedObject, RoleUser, User } from '@/types'
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
import { uuid } from 'uuidv4'
interface ApiContextType {
  users?: User[]
  values: FlattenedObject
  rowSelectionModel: GridRowSelectionModel
  setUsersContext: (users: User[]) => void
  addUser: (user: User) => void
  editUsers: (user: User) => void
  deleteUsers: () => void
  createUser: () => void
  setRowSelectionModel: Dispatch<SetStateAction<GridRowSelectionModel>>
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const ApiContext = createContext<ApiContextType>({} as ApiContextType)

export const UsersContextProvider = ({ children }: PropsWithChildren) => {
  const [storedUsersValue, setUsersValue] = useLocalState<User[]>('users', [])
  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>([])
  const [users, setUsers] = useState<User[]>(storedUsersValue as User[])

  const { values, handleInputChange, reset } = useForm<FlattenedObject>({
    ...flattenObject({} as User),
  })

  function userByValues(user?: User): User {
    const {
      id,
      login: { uuid },
      role,
    } = user as User
    return {
      id: id ?? users.length + 1,
      firstname: values['firstname'] as string,
      lastname: values['lastname'] as string,
      email: values['email'] as string,
      login: {
        uuid,
        username: values['login.username'] as string,
        password: values['login.password'] as string,
        md5: values['login.md5'] as string,
        sha1: values['login.sha1'] as string,
        registered: new Date(values['login.re'] as string),
      },
      address: {
        city: values['address.city'] as string,
        geo: {
          lng: values['address.geo.lng'] as string,
          lat: values['address.geo.lat'] as string,
        },
        street: values['address.street'] as string,
        suite: values['address.suite'] as string,
        zipcode: values['address.zipcode'] as string,
      },
      birthDate: new Date(values['birthDate'] as string),
      role: role ?? RoleUser.user,
      phone: values['phone'] as string,
      website: values['website'] as string,
      company: {
        bs: values['company.bs'] as string,
        name: values['company.name'] as string,
        catchPhrase: values['company.catchPhrase'] as string,
      },
    }
  }

  useEffect(() => {
    const findUser = users.find((user) => user.id === rowSelectionModel[0])
    if (!findUser) {
      reset({
        ...flattenObject({} as User),
      })
    } else {
      reset({
        ...flattenObject({
          ...findUser,
        }),
      })
    }
  }, [setRowSelectionModel, rowSelectionModel])

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

  function createUser() {
    const newUser: User = {
      id: users.length + 1,
      firstname: values['firstname'] as string,
      lastname: values['lastname'] as string,
      email: values['email'] as string,
      login: {
        uuid: uuid(),
        username: values['login.username'] as string,
        password: values['login.password'] as string,
        md5: values['login.md5'] as string,
        sha1: values['login.sha1'] as string,
        registered: new Date(values['login.re'] as string),
      },
      address: {
        city: values['address.city'] as string,
        geo: {
          lng: values['address.geo.lng'] as string,
          lat: values['address.geo.lat'] as string,
        },
        street: values['address.street'] as string,
        suite: values['address.suite'] as string,
        zipcode: values['address.zipcode'] as string,
      },
      birthDate: new Date(values['birthDate'] as string),
      role: RoleUser.user,
      phone: values['phone'] as string,
      website: values['website'] as string,
      company: {
        bs: values['company.bs'] as string,
        name: values['company.name'] as string,
        catchPhrase: values['company.catchPhrase'] as string,
      },
    }
    addUser(newUser)
  }

  function editUsers() {
    const findUser = users.find((user) => user.id === rowSelectionModel[0])
    if (!findUser) return
    const newUser = userByValues(findUser as User)
    setUsers((oldUsers) =>
      oldUsers.map((user) => (user.id === newUser.id ? { ...newUser } : user))
    )
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
        values,
        users,
        rowSelectionModel,
        handleInputChange,
        setUsersContext,
        addUser,
        editUsers,
        createUser,
        deleteUsers,
        setRowSelectionModel,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

export const useApiContext = () => useContext(ApiContext)
