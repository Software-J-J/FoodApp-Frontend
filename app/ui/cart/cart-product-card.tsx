'use client'

import Image from 'next/image'
import { Button } from '../button'
import { Product, ProductCartContextType } from '@/app/lib/types'
import { useContext, useState } from 'react'
import { CartContext } from '../context/AppContext'

export default function CartProductCard({ product }: { product: Product }) {
  const [displayQuantity, setDisplayQuantity] = useState(product.quantity)
  const { addToCart, removeCartProduct } = useContext(
    CartContext
  ) as ProductCartContextType
  const handleAddToCartButtonClick = () => {
    addToCart(product)
    setDisplayQuantity(product.quantity!)
  }

  const handleRemoveCartProductButtonClick = () => {
    removeCartProduct(product.id)

    setDisplayQuantity(product.quantity!)
  }

  return (
    <div
      key={product.id}
      className="flex justify-around w-[335px] h-28 bg-white rounded-lg shadow-sm"
    >
      <div className="max-w-1/5 content-center items-center">
        <Image
          src={product.imagen}
          height={64}
          width={64}
          alt="product"
          className=" rounded-md contain-strict"
        />
      </div>
      <div className="flex flex-col justify-center w-2/5 ">
        <h1 className="text-base font-medium">{product.nombre}</h1>
        <p className="text-base font-medium text-gray-400">
          {product.descripcion.substring(0, 16)}
        </p>
        <p className="text-xl font-extrabold">
          ${product.precio} <em className="text-sm text-gray-400">c/u</em>
        </p>
      </div>
      <div className="flex grid-cols-3 gap-1 justify-center items-center w-1/5">
        <Button
          variant="default"
          size={'sm'}
          onClick={handleRemoveCartProductButtonClick}
        >
          -
        </Button>
        <Button variant="ghost" size={'icon'} className="w-3 cursor-default">
          {displayQuantity}
        </Button>
        <Button
          variant="default"
          size={'sm'}
          onClick={handleAddToCartButtonClick}
        >
          +
        </Button>
      </div>
    </div>
  )
}
