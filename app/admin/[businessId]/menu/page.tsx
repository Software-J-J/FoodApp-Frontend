'use client'

import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'

import useProducts from '@/hooks/useProducts'
import { Category } from '@/libs/types'

import Title from '@/components/admin/title'
import CreateButton from '@/components/admin/create-button'
import InventoryAccordion from '@/components/admin/inventory-accordion'
import LoadingComponent from '@/components/shared/loading-component'
import ErrorComponent from '@/components/shared/error-component'

export default function Page() {
  const pathname = usePathname()

  const { data: session } = useSession()

  const businessId = session?.user.businessId

  const { products, categories, isLoading, isError } = useProducts(businessId!)

  if (isLoading) {
    return <LoadingComponent />
  }

  if (isError) {
    return <ErrorComponent />
  }

  return (
    <main className="flex flex-col justify-between items-center w-full min-h-[80vh] pt-5">
      <section className="w-full p-4">
        <div className="border-l-4 border-b-4 border-black my-2 pl-2">
          <Title titleProp={'Menu'} />
        </div>
        <div className="border-2 rounded-md p-4 min-h-[50vh]">
          {categories.map((cat: Category) => (
            <InventoryAccordion key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      <div className="w-full flex justify-end">
        <CreateButton pathname={pathname} />
      </div>
    </main>
  )
}
