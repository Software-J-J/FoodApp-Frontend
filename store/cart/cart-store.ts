import { create } from 'zustand'

type Product = {
  id: number
}

interface State {
  cartProducts: Product[]
  addToCart: (product: Product) => void
  removeCartProduct: (idProduct: number) => Product[] | void
}

export const useCartStore = create<State>((set) => ({
  cartProducts: [],
  addToCart: (product: Product) => {},
  removeCartProduct: (id: number) => {},
}))
