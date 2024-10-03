'use client'

import { PediloLogoNav } from './pedilo-logo'
import SessionMenu from './session-menu'
import { Button } from './button'
import Link from 'next/link'

export default function Navbar({ session }: { session: any }) {
  return (
    <nav className="w-full h-14 border-b-2 flex items-center justify-between">
      <div className="w-1/3">
        {/* {checkAdminPath(pathname) && <AdminSideBar />} */}
      </div>
      <div>
        <PediloLogoNav />
      </div>
      <div className="w-1/3">
        {session === null ? (
          <>
            <Button variant={'secondary'} className="mx-1">
              <Link href={'/auth/signin'}>Inicia Sesion</Link>
            </Button>
            <span>o</span>
            <Button variant={'secondary'} className="mx-1">
              <Link href={'/auth/signup'}>Registrate</Link>
            </Button>
          </>
        ) : (
          <SessionMenu user={session.user} />
        )}
      </div>
    </nav>
  )
}
