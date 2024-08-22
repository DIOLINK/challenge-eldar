import { SignInResponseType } from '@/types'
import axios from 'axios'
import { API_ROUTES } from './routes'

export async function SignIn(formData: FormData): Promise<SignInResponseType> {
  const body = {
    username: formData.get('username') as string,
    password: formData.get('password') as string,
  }

  try {
    const response = await axios.post<SignInResponseType>(
      API_ROUTES.signin(),
      body
    )

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
export async function SignUp(formData: FormData): Promise<SignInResponseType> {
  const body = {
    username: formData.get('username') as string,
    firstname: formData.get('firstname') as string,
    lastname: formData.get('lastname') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  try {
    const response = await axios.post<SignInResponseType>(
      API_ROUTES.signup(),
      body
    )

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
export async function SignOut(): Promise<void> {
  await axios.post<SignInResponseType>(API_ROUTES.signup())
}
