'use client'

import Inventory from '@/components/admin/inventory'
import Title from '@/components/admin/title'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import useProducts from '@/hooks/useProducts'
import { useSession } from 'next-auth/react'
import { Product } from '@/libs/types'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()

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
        {/* maybe no es necesario pero por ahora funciona asi */}
        {products?.data.length === 0 ? (
          <p>Vacio</p>
        ) : (
          <Inventory title="Todos los productos" products={productos} />
        )}
      </section>
      <section>
        <Link href={`${pathname}/create`}>
          <Button variant={'inventory'}>Agregar producto al menu</Button>
        </Link>
        <Link href={`${pathname}/create-cat`}>
          <Button variant={'inventory'}>Agregar categoria nueva</Button>
        </Link>
      </section>
    </main>
  )
}
