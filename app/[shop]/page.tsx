'use client'

import { manrope } from '@/components/shared/fonts'

import { database } from '../../tempData/fakeDb'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import TempLogo from '@/components/shared/temp-logo'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()

  const { business } = database
  return (
    <main
      className={`${manrope.className} flex flex-col justify-evenly items-center h-screen`}
    >
      <div>
        <div className="flex flex-col items-center justify-center">
          <TempLogo name={business[0].name} />
          <h1 className="text-[2.25rem] font-bold">{business[0].name}</h1>
        </div>
        <div>
          <Button variant={'inventory'} asChild>
            <Link href={`${pathname}/pedir/comprar`}>Comprar Rapido</Link>
          </Button>
          <Button variant={'secondary'} className="w-full" asChild>
            <Link href={'/login'}>Iniciar Sesion</Link>
          </Button>
        </div>
        {/* 
        <Button asChild>
          <Link href={`${business[0].link}/admin`}>Admin</Link>
        </Button> */}
      </div>
    </main>
  )
}
