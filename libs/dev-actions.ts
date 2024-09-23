import axios from 'axios'
import { DeliveryMethod } from './types'

const sharedLink = 'http://localhost:3010/api'

export async function createOrder(itemsList: any) {
  try {
    const {} = itemsList

    const newOrder = await axios.post(`${sharedLink}/orders`, {
      items: [
        {
          productId: 1,
          quantity: 1,
          price: 55,
        },
        {
          productId: 2,
          quantity: 4,
          price: 55,
        },
      ],
      businessId: 'a63a5bfa-cd96-4f6b-8972-f654ef14f617',
      deliveryMethod: 'DELIVERY',
      name: 'Order Test',
      phone: '12345678',
      address: 'Evergreen 1234',
    })

    return newOrder
  } catch (error) {
    console.error('Error en actions al crear order:', error)
  }
}
