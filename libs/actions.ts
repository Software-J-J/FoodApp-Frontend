import axios from 'axios'
import { DeliveryMethod, OrderStatus, User } from './types'

const sharedLink = 'http://localhost:3010/api'

export async function getAllProducts(businessId: string) {
  try {
    const products = await axios.get(`${sharedLink}/products/${businessId}`)

    return products.data || []
  } catch (error) {
    console.error('Error en actions al pedir los productos:', error)
  }
}

export async function getProductById(productId: string) {
  try {
    const response = await axios.get(`${sharedLink}/products/id/${productId}`)

    return response.data || []
  } catch (error) {
    console.error('Error en actions al pedir producto:', error)
  }
}

export async function getAllCategories(businessId: string) {
  try {
    const response = await axios.get(`${sharedLink}/category/${businessId}`)

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

export async function getOrderById(orderId: string, token: string) {
  try {
    const order = await axios.get(`${sharedLink}/orders/${orderId}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })

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

export async function changeOrderPaid(orderId: string, token: string) {
  try {
    const paidOrder = await axios.patch(
      `${sharedLink}/orders/paid/${orderId}`,
      {
        paid: true,
      },
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    )

    return paidOrder
  } catch (error) {
    console.error('Error en actions al modificar paid order: ', error)
  }
}

export async function reportOrder(orderId: string, token: string) {
  try {
    const report = await axios.get(`${sharedLink}/reports/order/${orderId}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
      responseType: 'blob',
    })

    const archivoPDF = new Blob([report.data], { type: 'application/pdf' })
    const url = window.URL.createObjectURL(archivoPDF)
    window.open(url)
  } catch (error) {
    console.error('¡Ups! Algo salió mal al buscar o ver el reporte:', error)
  }
}

export async function updateUser({
  userId,
  userData,
  newValue,
  token,
}: {
  userId: string
  userData: string
  newValue: string
  token: string
}) {
  const newData = { [userData]: newValue }
  try {
    const userUpdate = await axios.patch(
      `${sharedLink}/auth/${userId}`,
      newData,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    )

    return userUpdate
  } catch (error) {
    console.error('Error en actions al modificar usuario', error)
  }
}

export async function getAllUsers(token: string) {
  try {
    const allUsers = await axios.get(`${sharedLink}/auth`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })

    return allUsers
  } catch (error) {
    console.error('Error en actions al traer todos los usuarios', error)
  }
}

export async function updateBusiness({
  token,
  businessId,
  newData,
}: {
  token: string
  businessId: string
  newData: any
}) {
  try {
    const updatedBusiness = await axios.patch(
      `${sharedLink}/business/${businessId}`,
      newData,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    )

    return updatedBusiness
  } catch (error) {
    console.error('Error en actions al modificar business', error)
  }
}

export async function updateProduct({
  productId,
  newData,
  token,
}: {
  productId: string
  newData: any
  token: string
}) {
  try {
    const updatedProduct = await axios.patch(
      `${sharedLink}/products/${productId}`,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    )

    return updatedProduct
  } catch (error) {
    console.error('Error en actions al modificar producto', error)
  }
}

export async function deleteProduct({
  productId,
  token,
}: {
  productId: string
  token: string
}) {
  try {
    const deletedProduct = await axios.delete(
      `${sharedLink}/products/${productId}`,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    )

    return deletedProduct
  } catch (error) {
    console.error('Error en actions al borrar producto', error)
  }
}

export async function updateCategory({
  productId,
  token,
}: {
  productId: string
  token: string
}) {
  try {
    const updatedCategory = await axios.delete(
      `${sharedLink}/products/${productId}`,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    )

    return updatedCategory
  } catch (error) {
    console.error('Error en actions al updatear categoria', error)
  }
}

export async function deleteCategory({
  productId,
  token,
}: {
  productId: string
  token: string
}) {
  try {
    const deletedCategory = await axios.delete(
      `${sharedLink}/category/${productId}`,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    )

    return deletedCategory
  } catch (error) {
    console.error('Error en actions al borrar categoria', error)
  }
}

export async function getOrderHistory(orderId: string, token: string) {
  try {
    const orderHistory = await axios.get(
      `${sharedLink}/orders/status/${orderId}`,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    )

    return orderHistory
  } catch (error) {
    console.error('Error en actions al traer historial', error)
  }
}

export async function getProductsByCategory(categoryId: string) {
  try {
    const categoryArray = await axios.get(
      `${sharedLink}/category/id/${categoryId}`
    )

    return categoryArray.data
  } catch (error) {
    console.error(
      'Error en actions al pedir los productos por categoria:',
      error
    )
  }
}
