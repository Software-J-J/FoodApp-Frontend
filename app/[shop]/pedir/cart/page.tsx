'use client'

import { manrope } from '../../../../components/shared/fonts'
import Cart from '../../../../components/cart/cart'
import SubTotal from '@/components/cart/sub-total'
import { useContext, useEffect, useState } from 'react'
import { Product, ProductCartContextType } from '@/libs/types'
import { CartContext } from '@/context/AppContext'
import { useCartStore } from '@/store/cart/cart-store'

export default function Page() {
  const [data, setData] = useState<Product[]>([])
  const { cartProducts } = useCartStore()

  return (
    <main
      className={`${manrope.className} relative bg-[#F8F8FC] min-h-[42.75rem]`}
    >
      <Cart data={data} />
      {/* <SubTotal /> */}
    </main>
  )
}
