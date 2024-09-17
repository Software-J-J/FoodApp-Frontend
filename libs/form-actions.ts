import { signIn } from 'next-auth/react'

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
