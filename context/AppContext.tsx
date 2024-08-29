'use client'

import { Product, ProductCartContextType } from '@/libs/types'
import { createContext, useState } from 'react'

export const CartContext = createContext<ProductCartContextType | null>(null)

// export const calcTotalProduct = (cartProducts: Product[]) => {
//   const totalCart = cartProducts.reduce(
//     (accumulator, currentValue) =>
//       accumulator + currentValue.quantity! * currentValue.precio,
//     0
//   )
//   return totalCart
// }

export default function AppProvider({ children }: { children: any }) {
  const [cartProducts, setCartProducts] = useState<Product[]>([])
  console.log(cartProducts)

  // const ls = typeof window !== 'undefined' ? window.localStorage : null

  const addToCart = (product: Product) => {
    //revisamos si ya existe en el carrito
    let isAlreadyInCart = cartProducts.find(
      (prevProduct) => prevProduct.id === product.id
    )

    if (!!isAlreadyInCart) {
      //si ya existe aumentamos la cantidad
      let idxProduct = cartProducts.findIndex(
        (p) => p.id === isAlreadyInCart.id
      )

      const newProducts = cartProducts
      newProducts[idxProduct].quantity!++
      setCartProducts(newProducts)
    } else {
      //si no existe lo agregamos al carrito
      setCartProducts((prevProducts: Product[]) => {
        const cartProduct = { ...product, quantity: 1 }
        const newProducts = [...prevProducts, cartProduct]
        return newProducts
      })
    }
  }

  const removeCartProduct = (idProduct: number) => {
    //revisamos si ya existe en el carrito
    const isAlreadyInCart = cartProducts.find(
      (prevProduct) => idProduct === prevProduct.id
    )
    if (!!isAlreadyInCart && isAlreadyInCart.quantity! >= 2) {
      //si el producto.quantity <= 2 entonces le resta 1
      const idxProduct = cartProducts.findIndex((obj) => obj.id == idProduct)
      setCartProducts((prevProducts: Product[]) => {
        cartProducts[idxProduct].quantity!--

        return cartProducts
      })
    } else if (!!isAlreadyInCart && isAlreadyInCart.quantity! <= 1) {
      //si el producto.quantity es =< 1 lo saca del array
      const idxProduct = cartProducts.findIndex((obj) => obj.id == idProduct)
      setCartProducts((prevProducts: Product[]) => {
        const newProducts = prevProducts.filter(
          (p, index) => index !== idxProduct
        )
        return newProducts
      })
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addToCart,
        removeCartProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
