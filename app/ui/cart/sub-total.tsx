'use client'

import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/AppContext'
import { ProductCartContextType } from '@/app/lib/types'

import { Button } from '../button'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { manrope } from '../fonts'

export default function SubTotal() {
  const { cartProducts } = useContext(CartContext) as ProductCartContextType
  const [total, setTotal] = useState(0)

  const [showTotal, setShowTotal] = useState<any>(false)

  useEffect(() => {
    const calculateTotal = () => {
      const newTotal = cartProducts.reduce((acc, product) => {
        return acc + product.precio * product.quantity!
      }, 0)
      setTotal(newTotal)
    }
    return calculateTotal()
  }, [cartProducts, showTotal])

  return (
    <>
      <Button
        className="absolute bottom-10 right-2"
        variant={'outline'}
        size={'icon'}
        onClick={() => setShowTotal(!showTotal)}
        asChild
      >
        <ShoppingBagIcon />
      </Button>
      {showTotal && (
        <div
          onClick={() => setShowTotal(false)}
          className="h-96 fixed inset-0  z-20  justify-self-center self-end mb-20"
        >
          <div
            // onClick={(ev) => ev.stopPropagation()}
            className={`${manrope.className} bottom-0 gap-2 border-2 bg-red-200 w-40 h-40 flex flex-col items-center justify-center`}
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
        </div>
      )}
    </>
  )
}
