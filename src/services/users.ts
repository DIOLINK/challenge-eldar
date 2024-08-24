import { User } from '@/types'
import axios from 'axios'
import { API_ROUTES } from './routes'

export async function getUsers(): Promise<User[]> {
  try {
    const response = await axios.get<User[]>(API_ROUTES.users())
    return response.data
  } catch (error) {
    console.error('Error during sign in:', error)

    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || 'Failed to sign in')
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}
export async function editUser(): Promise<User> {
  try {
    const response = await axios.put<User>(API_ROUTES.edituser())
    return response.data
  } catch (error) {
    console.error('Error during edit user:', error)

    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || 'Failed to edit')
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}
