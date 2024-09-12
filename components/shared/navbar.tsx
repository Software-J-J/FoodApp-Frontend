'use client'

import { PediloLogoNav } from './pedilo-logo'
import SessionMenu from './session-menu'
import SideNav from './side-nav'
import { signOut, useSession } from 'next-auth/react'
import { Button } from './button'
import Link from 'next/link'
import { useEffect } from 'react'
import { useUserStore } from '@/store/user/user-store'

export default function Navbar() {
  const { data: session } = useSession()
  const { user, setUser } = useUserStore((state) => state)

  useEffect(() => {
    if (session) {
      setUser(session.user)
    }
  }, [session, setUser])

  return (
    <nav className="w-full h-14 border-b-2 flex items-center justify-between">
      <div className="w-1/3">{session !== null && <SideNav />}</div>
      <div>
        <PediloLogoNav />
      </div>
      <div className="w-1/3">
        {user === null ? (
          <Button variant={'secondary'} className="mx-1">
            <Link href={'/login'}>Iniciar Sesion</Link>
          </Button>
        ) : (
          // Descomentar en caso de user not found
          // <Button onClick={() => signOut()}>log out</Button>
          <SessionMenu />
        )}
      </div>
    </nav>
  )
}
