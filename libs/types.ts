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

export type UserData = {
  id: string
  name: string
  email: string
  roles: UserRoles[]

  businessId?: string
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

export type UserRolContextType = {
  choosedRol: UserRoles
  setChoosedRol: (rol: UserRoles) => void
}

// TYPADO DE BACKEND

export type Product = {
  businessId: string
  category: Category
  categoryId: number

  id: number
  name: string
  description: string
  price: number
  image: string
  status: boolean

  createdAt: Date
  updatedAt: Date
}

export type Category = {
  id: string
  name: string
  status: boolean
}

export type OrderStatus = 'PENDING' | 'PAID' | 'DELIVERED' | 'CANCELLED'

export type UserRoles =
  | 'DESARROLLADOR'
  | 'ADMINISTRADOR'
  | 'CAJA'
  | 'COCINA'
  | 'CADETE'
  | 'USER'

export type DeliveryMethod = 'PICKUP' | 'DELIVERY'

export type Order = {
  id: string
  totalAmount: number
  totalItems: number
  status: OrderStatus
  paid: boolean
  paidAt: Date
  stripeChargeId?: string
  createdAt: Date
  updateAt: Date

  userId?: string
  user?: User

  guestName?: string // Para usuarios no autenticados
  guestPhone?: string
  guestAddress?: string
  deliveryMethod: DeliveryMethod

  orderItem: OrderItem[]
  orderReceipt?: OrderReceipt
}

export type OrderItem = {
  id: string
  productId: number
  quantity: number
  price: number

  order?: Order
  orderId?: string
}

export interface OrderReceipt {
  id: string

  order: Order
  orderId: string //relacion uno a uno

  receiptUrl: string

  createdAt: Date
  updateAt: Date
}

export interface User {
  id: string
  email: string
  name: string
  password: string
  phone?: string // Campos opcionales
  address?: string // Opcional para permitir que los usuarios elijan no guardarlo
  deliveryMethod?: DeliveryMethod // Puede ser algo como "pickup" o "delivery"
  status: boolean

  orders: Order[]
  roles: UserRoles[]

  createdAt: Date
  updatedAt: Date
}
