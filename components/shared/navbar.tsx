'use client'

import { PediloLogoNav } from '@/components/shared/pedilo-logo'
import SessionMenu from '@/components/shared/session-menu'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Session } from 'next-auth'
import { usePathname } from 'next/navigation'
import { checkAdminPath } from '@/utils/checkPaths'
import AdminSideBar from '@/components/admin/admin-sidebar'

export default function Navbar({ session }: { session: Session | null }) {
  const pathname = usePathname()
  console.log(session)

  return (
    <nav className="w-full h-14 border-b-2 flex items-center justify-between">
      <div className="w-1/3">
        {checkAdminPath(pathname) && <AdminSideBar />}
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
