'use client'

import Inventory from '@/components/admin/inventory'
import Title from '@/components/admin/title'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import useProducts from '@/hooks/useProducts'
import { useSession } from 'next-auth/react'
import { Product } from '@/libs/types'
import { usePathname } from 'next/navigation'
import InventoryCateories from '@/components/admin/inventory-categories'

export default function Page() {
  const pathname = usePathname()

  const { data: session } = useSession()

  const businessId = session?.user.businessId

  const { products, isLoading, isError } = useProducts(businessId!)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Algo salio mal</p>
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
        <Title titleProp="Categorias" />
        <InventoryCateories />
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
