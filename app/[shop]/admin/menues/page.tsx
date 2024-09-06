'use client'

import Inventory from '@/components/admin/inventory'
import Title from '@/components/admin/title'
import React, { Suspense } from 'react'

import { simonPostres } from '@/tempData/simon-postres'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import useProducts from '@/hooks/useProducts'

export default function Page() {
  const { products, urlTag } = simonPostres

  const { products: productos } = useProducts()

  return (
    <main className="flex flex-col justify-between h-screen">
      <section>
        <Title titleProp={'Menu'} />
        <Inventory title="Productos desactivados" items={products} />

        <Title titleProp={'Categorias'} />
        <Inventory title="Postres Frios" items={products} />
        <Inventory title="Chocolate" items={products} />
        {/* <Suspense>
          <Inventory title="Chocolate" items={productos} />
        </Suspense> */}
      </section>
      <section>
        <Link href={`menues/create`}>
          <Button variant={'inventory'}>Agregar producto al menu</Button>
        </Link>
      </section>
    </main>
  )
}
