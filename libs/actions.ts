'use server'

import { redirect } from 'next/navigation'
import { z } from 'zod'

const FormSchema = z.object({
  id: z.string(),
  userName: z.string({
    invalid_type_error: 'Por favor ingrese un nombre',
  }),
  // address: z.string({
  //   invalid_type_error: 'Por favor ingrese una direccion',
  // }),
  // phone: z.string({
  //   invalid_type_error: 'Por favor ingrese una numero de telefono',
  // }),
  // amount: z.string({
  //   invalid_type_error: 'Por favor ingrese un monto',
  // }),
  // amount: z.coerce
  //   .number()
  //   .gt(0, { message: 'Por favor ingresa un monto mayor a $0' }),
  date: z.string(),
})

const CreateOrder = FormSchema.omit({ id: true, date: true })

export type State = {
  errors?: {
    userName?: string[]
    // address?: string[]
    // phone?: string[]
    // amount?: string[]
  }
  message?: string | null
}

export async function createOrder(
  prevState: State | undefined,
  formData: FormData
) {
  //Validacion usando Zod
  const validateFields = CreateOrder.safeParse({
    userName: formData.get('userName'),
    // address: formData.get('address'),
    // phone: formData.get('phone'),
    // amount: formData.get('amount'),
  })

  //Si falla la validacion del form retorna un error.
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Falta completar el formulario. Fallo el crear pedido',
    }
  }

  const {
    userName,
    // address, phone, amount
  } = validateFields.data
  const date = new Date().toISOString().split('T')[0]

  try {
    //Aca se va a mandar a la db

    //log por ahora
    console.log(
      `Pedido de ${userName} en la fecha ${date}`
      // `Pedido de ${userName} (Celular: ${phone}) a ${address}. Por un monto de ${amount}`
    )
  } catch (error) {
    return {
      message: 'Error al crear orden',
    }
  }

  console.log('asd')
}

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

export async function createProduct(formData: FormData) {
  const rawFormData = {
    name: formData.get('name'),
    description: formData.get('description'),
    price: formData.get('price'),
    image: formData.get('image'),
    category: formData.get('category'),
  }

  const { name, description, price, image, category } = rawFormData

  console.log(
    `Producto ${name} creado! Precio: ${price}, categoria: ${category}`
  )
  redirect('/simon-postres/admin/menues')
}

// id: number
//   name: string
//   description: string
//   price: number
//   image: string
//   category: string
//   available: boolean
