import axios from 'axios'
import { signIn } from 'next-auth/react'

const sharedLink = 'http://localhost:3010/api'

export async function logIn(formData: FormData) {
  const user = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  try {
    const response = await signIn('credentials', { ...user, callbackUrl: '/' })

    return response
  } catch (error) {
    console.error('Error en action de login:', error)
  }
}

export async function register(formData: FormData) {
  const newUser = {
    email: formData.get('email'),
    password: formData.get('password'),
    name: formData.get('name'),
    phone: formData.get('phone'),
    address: formData.get('address'),
  }

  try {
    const response = await axios.post(`${sharedLink}/auth/register`, newUser)

    await signIn('credentials', {
      email: response.data.email,
      password: formData.get('password'),
      callbackUrl: '/',
    })
  } catch (error) {
    console.error('Error en action de register: ', error)
  }
}
