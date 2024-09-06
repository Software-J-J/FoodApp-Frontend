'use client'

import { Bars3Icon, ShoppingCartIcon } from '@heroicons/react/24/outline'

import { Session } from 'next-auth'
import { Button } from '../ui/button'

import { PediloLogoNav } from './pedilo-logo'
import SessionMenu from './session-menu'

interface Props {
  session: Session | null
}

export default function Navbar({ session }: Props) {
  return (
    <nav className="w-full h-14 border-b-2 flex items-center justify-between">
      <Button variant={'link'}>
        <Bars3Icon className="h-5 w-5" />
      </Button>
      <PediloLogoNav />
      <SessionMenu session={session} />
    </nav>
  )
}
