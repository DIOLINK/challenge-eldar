export const API_ROUTES = {
  root_auth: '/api/auth',
  root_users: '/api/users',
  signin: function (): string {
    return `${this.root_auth}/signin`
  },
  signup: function (): string {
    return `${this.root_auth}/signup`
  },
  signout: function (): string {
    return `${this.root_auth}/signout`
  },
  users: function (): string {
    return `${this.root_users}/getusers`
  },
  edituser: function (): string {
    return `${this.root_users}/edituser`
  },
  createuser: function (): string {
    return `${this.root_users}/createuser`
  },
}
