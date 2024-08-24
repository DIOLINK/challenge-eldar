import { useApiContext } from '@/context'
import { FlattenedObject, User } from '@/types'
import { flattenObject } from '@/utils/flattenObject'
import { useState } from 'react'
import { useForm } from './useForm'

export const useUser = (listUsers: User[]) => {
  const {
    rowSelectionModel: [id],
  } = useApiContext()
  const [userSelected, setUserSelected] = useState<User>({
    ...listUsers.find((user) => user.id === id),
  } as User)
  const { values, reset, handleInputChange } = useForm<FlattenedObject>({
    ...flattenObject(userSelected),
  })
  return { values, setUserSelected, reset, handleInputChange }
}
