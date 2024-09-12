import axios from 'axios'

const sharedLink = 'http://localhost:3010/api'

export async function getAllProducts(businessId: string) {
  try {
    const response = await axios.get(`${sharedLink}/products/${businessId}`)

    return response.data || []
  } catch (error) {
    console.error('Error al pedir los productos:', error)
  }
}

export async function getAllCategories() {
  try {
    const response = await axios.get(`${sharedLink}/category`)

    return response.data || []
  } catch (error) {
    console.error('Error al pedir las categorias:', error)
  }
}
