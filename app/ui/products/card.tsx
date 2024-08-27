'use client'

import Image from 'next/image'
import { useState } from 'react'
import DetailProduct from './detail-product'
import { Product } from '@/app/lib/types'

export default function Card({ product }: { product: Product }) {
  const [showDetail, setShowDetail] = useState(false)

  return (
    <>
      {showDetail && (
        <DetailProduct product={product} handleModal={setShowDetail} />
      )}
      <div
        onClick={() => setShowDetail(true)}
        className="min-h-72 min-w-48 relative flex flex-col items-center hover:scale-105 duration-150 mt-3 cursor-pointer"
      >
        <div className="w-40 h-40 rounded-full contain-strict border-2 shadow-md relative">
          <Image
            fill
            className="object-cover"
            // width={300}
            // height={300}
            alt="food"
            src={product.image}
          ></Image>
        </div>
        <div className="h-48 w-28 rounded-2xl shadow-lg text-center absolute top-16">
          <div className="h-1/2"></div>
          <div className="h-1/2 flex flex-col justify-around">
            <h1 className="text-base font-semibold leading-none">
              {product.name}
            </h1>
            <p className="text-xs text-gray-400">
              {product.description.substring(0, 18)}
            </p>
            <div className="font-bold ">
              $ <em className="text-lg text-deepOak-500"> {product.price}</em>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
