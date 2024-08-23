export interface ClearUser
  extends Omit<User, 'login' | 'email' | 'addres' | 'phone'> {}

export enum RoleUser {
  admin = 'admin',
  user = 'user',
}

export interface SignInResponseType {
  success: boolean
  token?: string
  message?: string
  user?: User
}

export interface User {
  id: number
  firstname: string
  lastname: string
  email: string
  birthDate: Date
  login: Login
  address: Address
  phone: string
  website: string
  company: Company
  role: RoleUser
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

export interface Login {
  uuid: string
  username: string
  password: string
}

export interface FlattenedObject {
  [key: string]: string | number | boolean | null | undefined
}
