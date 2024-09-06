import axios from 'axios'
import { redirect } from 'next/navigation'

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

export async function getAllProducts() {
  try {
    const response = await axios.get('http://localhost:3010/api/products')
    // console.log('Respuesta del servidor:', response)
    return response.data
  } catch (error) {
    console.error('Error al pedir los productos:', error)
  }
}
