export interface User {
  id: number
  firstname: string
  lastname: string
  email: string
  login: {
    uuid: string
    username: string
    password: string
  }
  role?: RoleUser
}

export enum RoleUser {
  admin = 'admin',
  user = 'user',
}

export interface SignInResponseType {
  success: boolean
  token?: string
  message?: string
}
