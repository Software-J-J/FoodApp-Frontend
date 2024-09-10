import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { Session } from 'next-auth'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface Props {
  session: Session | null
}

export default function SessionMenu({ session }: Props) {
  const { data } = useSession()
  const isOwner = data?.user.businessId

  return (
    <>
      {session?.user ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <p>Hola {session?.user?.name}</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {isOwner && (
                <DropdownMenuItem>
                  <Link href={`/admin/${isOwner}`}>Panel de admin</Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuItem>
                <Button variant={'link'} onClick={() => signOut()}>
                  Cerrar Sesion
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <Button variant={'secondary'} className="mx-1">
          <Link href={'/login'}>Iniciar Sesion</Link>
        </Button>
      )}
    </>
  )
}
