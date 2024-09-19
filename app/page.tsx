'use client'

import { manrope } from '@/components/shared/fonts'

import Link from 'next/link'
import { Button } from '../components/shared/button'
import { PediloLogo } from '@/components/shared/pedilo-logo'
import useBusiness from '@/hooks/useBusiness'
import { DataBussiness } from '@/libs/types'

export default function Page() {
  const { business, isError, isLoading } = useBusiness()

  if (isLoading) {
    return <p>Cargando...</p>
  }

  if (isError) {
    return <p>Algo salio mal :c</p>
  }
  console.log(business)

  return (
    <main
      className={`${manrope.className} flex flex-col justify-evenly items-center h-screen`}
    >
      <div className="flex flex-col gap-4">
        <PediloLogo />
        {business.data.map((negocio: DataBussiness) => (
          <Button variant={'secondary'} key={negocio.id}>
            <Link href={`/${negocio.id}`}>{negocio.name}</Link>
          </Button>
        ))}
      </div>
    </main>
  )
}
