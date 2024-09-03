'use server'

import axios from 'axios'
import { redirect } from 'next/navigation'

export async function crearOrden(formData: FormData) {
  'use server'
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
