import Inventory from '@/app/ui/admin/inventory'
import Title from '@/app/ui/admin/title'
import React from 'react'

import { simonPostres } from '@/app/tempData/simon-postres'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Page() {
  const { products, urlTag } = simonPostres
  return (
    <main className="flex flex-col justify-between h-screen">
      <section>
        <Title titleProp={'Menu'} />
        <Inventory title="Productos desactivados" items={products} />

        <Title titleProp={'Categorias'} />
        <Inventory title="Postres Frios" items={products} />
        <Inventory title="Chocolate" items={products} />
      </section>
      <section>
        <Link href={`menues/create`}>
          <Button variant={'inventory'}>Agregar producto al menu</Button>
        </Link>
      </section>
    </main>
  )
}
