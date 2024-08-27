import { Dispatch, SetStateAction } from 'react'

export type DataBussiness = {
  id: number
  name: string
  urlTag: string
  colors: string[]
  logoUrl: string
  backgroundMenu: string
  address: string
  phone: string
  filters: Filters[]
  products: Product[]
}

export type Filters = {
  id: number
  name: string
}

export type Product = {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  available: boolean
}

export interface ProductCart extends Product {
  quantity: number
}

export type ProductCartContextType = {
  cartProducts: Product[]
  setCartProducts: Dispatch<SetStateAction<Product[]>>
  addToCart: (product: Product) => Product[] | void
  removeCartProduct: (idProduct: number) => void
}
