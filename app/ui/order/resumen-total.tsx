'use client'

import React from 'react'
import { CartContext } from '../context/AppContext'
import { ProductCartContextType } from '@/app/lib/types'
import { manrope } from '../fonts'

export default function ResumeTotal() {
  const { cartProducts } = React.useContext(
    CartContext
  ) as ProductCartContextType
  const [total, setTotal] = React.useState(0)

  React.useEffect(() => {
    const calculateTotal = () => {
      const newTotal = cartProducts.reduce((acc, product) => {
        return acc + product.precio * product.quantity!
      }, 0)
      setTotal(newTotal)
    }
    return calculateTotal()
  }, [cartProducts])
  return (
    <div
      className={`bottom-0 gap-2 border-2 w-full h-40 flex flex-col items-center justify-center rounded-md`}
    >
      <div>
        <h1>Items totales</h1>
        <p>{cartProducts.length}</p>
      </div>
      <div>
        <h1>Total a pagar</h1>
        <p>${total},00</p>
      </div>
    </div>
  )
}
