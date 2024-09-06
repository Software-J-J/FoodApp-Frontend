'use client'

import { Session } from 'next-auth'

import { PediloLogoNav } from './pedilo-logo'
import SessionMenu from './session-menu'
import { Sidenav } from '../admin/sidenav'

interface Props {
  session: Session | null
}

export default function Navbar({ session }: Props) {
  return (
    <nav className="w-full h-14 border-b-2 flex items-center justify-between">
      <Sidenav />
      <PediloLogoNav />
      <SessionMenu session={session} />
    </nav>
  )
}
