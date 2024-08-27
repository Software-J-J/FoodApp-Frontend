import { Button } from '@/app/ui/button'
import { manrope } from '@/app/ui/fonts'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div
      className={`${manrope.className} min-h-[42.75em] flex flex-col items-center justify-around`}
    >
      <div></div>
      <div>
        <CheckCircleIcon className="text-deepOak-400 h-20 w-20 mx-auto" />
        <p className="text-deepOak-600 font-semibold text-2xl">
          Muchas gracias! <br /> Compra realizada
        </p>
      </div>
      <div>
        <Button asChild>
          <Link href={'/simon-postres/comprar'}>Volver a la tienda</Link>
        </Button>
      </div>
    </div>
  )
}
