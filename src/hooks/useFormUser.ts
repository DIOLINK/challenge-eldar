import { FlattenedObject, RoleUser, User } from '@/types'
import { flattenObject } from '@/utils/flattenObject'
import { useState } from 'react'
import { useForm } from './useForm'

export const useFormUser = (listUsers: User[]) => {
  const [userSelected, setUserSelected] = useState<User>({} as User)

  const { values, reset, handleInputChange } = useForm<FlattenedObject>({
    ...flattenObject(userSelected),
  })

  function userByValues(): User {
    const {
      id,
      login: { uuid },
      role,
    } = userSelected
    return {
      id: id ?? listUsers.length + 1,
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

  return {
    values,
    userSelected,
    setUserSelected,
    reset,
    handleInputChange,
    userByValues,
  }
}
