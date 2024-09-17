import axios from 'axios'
import { DeliveryMethod, OrderStatus, User } from './types'

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

    return newOrder
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
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })

    return allOrders.data
  } catch (error) {
    console.error('Error en actions al buscar las ordenes:', error)
  }
}

export async function getAllBusiness() {
  try {
    const allBusiness = await axios.get(`${sharedLink}/business`)

    return allBusiness.data
  } catch (error) {
    console.error('Error en actions al buscar los negocios:', error)
  }
}

export async function getBusinessById(businessId: string) {
  try {
    const business = await axios.get(`${sharedLink}/business/${businessId}`)

    return business.data
  } catch (error) {
    console.error('Error en actions al buscar el negocio:', error)
  }
}

export async function changeOrderStatus(
  orderId: string,
  newStatus: OrderStatus,
  token: string
) {
  try {
    const nextStep = await axios.patch(
      `${sharedLink}/orders/${orderId}`,
      {
        status: newStatus,
      },
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    )

    return nextStep
  } catch (error) {
    console.error('Error en actions al modificar order: ', error)
  }
}

export async function reportOrder(orderId: string, token: string) {
  try {
    const report = await axios.get(`${sharedLink}/reports/order/${orderId}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })

    return report
  } catch (error) {
    console.error('Error en actions al imprimir reporte')
  }
}
