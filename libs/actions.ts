import axios from 'axios'
import { DeliveryMethod, User } from './types'

const sharedLink = 'http://localhost:3010/api'

export async function getAllProducts(businessId: string) {
  try {
    const response = await axios.get(`${sharedLink}/products/${businessId}`)

    return response.data || []
  } catch (error) {
    console.error('Error en actions al pedir los productos:', error)
  }
}

export async function getAllCategories() {
  try {
    const response = await axios.get(`${sharedLink}/category`)

    return response.data || []
  } catch (error) {
    console.error('Error en actions al pedir las categorias:', error)
  }
}

export async function createOrder(
  itemsList: any,
  deliveryMethod: DeliveryMethod,
  userInfo: User
) {
  try {
    const {} = itemsList
    const { name, phone, address } = userInfo

    const newOrder = await axios.post(`${sharedLink}/orders`, {
      items: [
        {
          productId: 4,
          quantity: 2,
          price: 55,
        },
      ],
      deliveryMethod,
      name,
      phone,
      address,
    })

    return newOrder.status
  } catch (error) {
    console.error('Error en actions al crear order:', error)
  }
}

export async function getOrderById(orderId: string) {
  try {
    const order = await axios.get(`${sharedLink}/order/${orderId}`)

    return order.data
  } catch (error) {
    console.error('Error en actions al buscar order:', error)
  }
}

export async function getAllOrders(token: string) {
  try {
    const allOrders = await axios.get(`${sharedLink}/orders`, {
      headers: { Authorization: 'Bearer ' + token },
    })
    return allOrders.data
  } catch (error) {
    console.error('Error en actions al buscar las ordenes:', error)
  }
}
