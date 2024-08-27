'use client'

import { manrope } from '../../../ui/fonts'
import Cart from '../../../ui/cart/cart'
import SubTotal from '@/app/ui/cart/sub-total'
import { useContext, useEffect, useState } from 'react'
import { Product, ProductCartContextType } from '@/app/lib/types'
import { CartContext } from '@/app/ui/context/AppContext'

export default function Page() {
  const [data, setData] = useState<Product[]>([])
  const { cartProducts } = useContext(CartContext) as ProductCartContextType

  useEffect(() => {
    setData(cartProducts)
  }, [cartProducts])
  return (
    <main
      className={`${manrope.className} relative bg-[#F8F8FC] min-h-[42.75rem]`}
    >
      <Cart data={data} />
      {/* <SubTotal /> */}
    </main>
  )
}
