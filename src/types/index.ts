export interface User {
  id: number
  firstname: string
  lastname: string
  email: string
  role?: RoleUser
}

export enum RoleUser {
  admin = 'admin',
  user = 'user',
}
