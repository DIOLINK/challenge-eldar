export const API_ROUTES = {
  root_auth: '/api/auth',
  signin: function (): string {
    return `${this.root_auth}/signin`
  },
  signup: function (): string {
    return `${this.root_auth}/signup`
  },
  signout: function (): string {
    return `${this.root_auth}/signout`
  },
}
