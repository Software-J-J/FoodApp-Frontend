'use client'

import Inventory from '@/components/admin/inventory'
import Title from '@/components/admin/title'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import useProducts from '@/hooks/useProducts'
import { useSession } from 'next-auth/react'
import { Category, Product } from '@/libs/types'
import { usePathname } from 'next/navigation'
import Section from '@/components/admin/section'

export default function Page() {
  const pathname = usePathname()

  const { data: session } = useSession()

  const businessId = session?.user.businessId

  const { products, categories, isLoading, isError } = useProducts(businessId!)

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

        <Inventory title="Todos los productos" products={productos} />
      </section>
      <section>
        <Title titleProp="Categorias" />
        {categories.map((cat: Category) => (
          <Section title={cat.name} count={+cat.id} key={cat.id} />
        ))}
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
