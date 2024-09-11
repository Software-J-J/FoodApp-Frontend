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
import { useUserStore } from '@/store/user/user-store'

interface Props {
  session: Session | null
}

export default function SessionMenu() {
  const { user } = useUserStore()
  const userRol = user?.roles

  if (user === null || user === undefined) {
    return <p>null</p>
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <p>Hola {user.name}</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {userRol!.includes('ADMINISTRADOR') && (
          <DropdownMenuItem>
            <Button>
              <Link href={`/admin/${user.businessId}`}>Panel de admin</Link>
            </Button>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem>
          <Button>
            <Link href={`#`}>Panel de cuenta</Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button variant={'link'} onClick={() => signOut()}>
            Cerrar Sesion
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
