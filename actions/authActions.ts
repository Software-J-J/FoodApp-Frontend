'use server'

import { signIn, signOut } from '@/auth'
import { signUpSchema } from '@/lib/zod'
import { AuthError } from 'next-auth'
import axios from 'axios'

const sharedLink = 'http://localhost:3010/api'

export async function handleCredentialsSignin({
  email,
  password,
}: {
  email: string
  password: string
}) {
  try {
    await signIn('credentials', { email, password, redirectTo: '/' })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            message: 'Correo y/o contraseña erroneos',
          }
        default:
          return {
            message: 'Algo salio mal :c',
          }
      }
    }
    throw error
  }
}

export async function handleSignOut() {
  await signOut()
}

export async function handleSignUp({
  name,
  email,
  password,
  confirmPassword,
}: {
  name: string
  email: string
  password: string
  confirmPassword: string
}) {
  try {
    const parsedCredentials = signUpSchema.safeParse({
      name,
      email,
      password,
      confirmPassword,
    })
    if (!parsedCredentials.success) {
      return { success: false, message: 'Datos erroneos.' }
    }

    const response = await axios.post(`${sharedLink}/auth/register`, {
      email,
      password,
      name,
      phone: '3435509393',
      address: 'Av Almafuerte 1234',
      roles: ['USER'],
    })

    return { success: true, message: 'Cuenta creada exitosamente.' }
  } catch (error) {
    console.error('Error creando cuenta: ', error)
    return {
      success: false,
      message: 'Ocurrio un error inesperado. Por favor prueba otra vez.',
    }
  }
}
