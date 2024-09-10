import axios from 'axios'
import { redirect } from 'next/navigation'
import { Product } from './types'

export async function crearOrden(formData: FormData) {
  const rawFormData = {
    userName: formData.get('userName'),
    phone: formData.get('phone'),
    address: formData.get('address'),
  }

  const { userName, phone, address } = rawFormData

  console.log(`Pedido de ${userName}(Num de telefono ${phone}) a ${address}`)
  redirect('/simon-postres/order/success')
}

// CON BACKEND

const sharedLink = 'http://localhost:3010/api'

export async function getAllProducts(businessId: string) {
  try {
    const response = await axios.get(`${sharedLink}/products/${businessId}`)

    return response.data || []
  } catch (error) {
    console.error('Error al pedir los productos:', error)
  }
}
