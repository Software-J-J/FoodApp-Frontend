import axios from 'axios'
import { signIn } from 'next-auth/react'
import { UserRoles } from './types'

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
    roles: ['USER'],
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

export async function registerEmployee(formData: FormData, roles: UserRoles[]) {
  const newEmplyee = {
    email: formData.get('email'),
    password: formData.get('password'),
    name: formData.get('name'),
    phone: formData.get('phone'),
    address: formData.get('address'),
    businessId: formData.get('businessId'),
    roles,
  }

  try {
    const response = await axios.post(`${sharedLink}/auth/register`, newEmplyee)

    return response
  } catch (error) {
    console.error('Error en action de register employee: ', error)
  }
}

export async function createProduct(formData: FormData, token: string) {
  try {
    const newProductResponse = await axios.post(
      `${sharedLink}/products`,
      formData,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    )

    return newProductResponse
  } catch (error) {
    console.error('Error en action de createProduct: ', error)
  }
}

export async function createCategory(formData: FormData, token: string) {
  const category = {
    name: formData.get('name'),
  }
  try {
    const newCategory = await axios.post(
      'http://localhost:3010/api/category',
      category,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    )

    return newCategory
  } catch (error) {
    console.error('Error en action de createCategory: ', error)
  }
}
