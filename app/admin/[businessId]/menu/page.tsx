'use client'

import Inventory from '@/components/admin/inventory'
import Title from '@/components/admin/title'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import useProducts from '@/hooks/useProducts'
import { useSession } from 'next-auth/react'
import { Suspense } from 'react'
import { Product } from '@/libs/types'

export default function Page() {
  // const { products } = simonPostres

  const { data: session } = useSession()

  const businessId = session?.user.businessId

  const { products, isLoading, isError } = useProducts(
    '66be42a0-63ff-4f7f-bf8d-27136255ac07'
  )

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>cagada noma</p>
  }

  const productos: Product[] = products.data

  return (
    <main className="flex flex-col justify-between items-center h-[80vh]">
      <section>
        <Title titleProp={'Menu'} />

        {products?.data.length === 0 ? (
          <p>Vacio</p>
        ) : (
          // <Suspense>
          <Inventory title="Todos los productos" products={productos} />
          // </Suspense>
        )}
      </section>
      <section>
        <Link href={`/create`}>
          <Button variant={'inventory'}>Agregar producto al menu</Button>
        </Link>
      </section>
    </main>
  )
}
