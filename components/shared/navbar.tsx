'use client'

import { Session } from 'next-auth'

import { PediloLogoNav } from './pedilo-logo'
import SessionMenu from './session-menu'
import SideNav from './side-nav'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

interface Props {
  session: Session | null
}

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="w-full h-14 border-b-2 flex items-center justify-between">
      <div className="w-1/3">{session!! && <SideNav />}</div>
      <div>
        <PediloLogoNav />
      </div>
      <div className="w-1/3">
        <SessionMenu session={session} />
      </div>
    </nav>
  )
}
