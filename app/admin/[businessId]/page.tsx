'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

export default function Page() {
  const pathname = usePathname()
  return <div>Hola {pathname}</div>
}
