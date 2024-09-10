'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Page() {
  const pathname = usePathname()
  return (
    <div>
      <h1>Hola {pathname}</h1>
      <div>
        <h3>Links temporales</h3>
        <Button>
          <Link href={`${pathname}/menu`}>Menu</Link>
        </Button>
      </div>
    </div>
  )
}
