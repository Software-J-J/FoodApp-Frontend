import Link from 'next/link'
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
import { handleSignOut } from '@/actions/authActions'

export default function SessionMenu({ user }: { user: any }) {
  const userRol = user?.roles[0]

  if (user === null || user === undefined) {
    return <p>Error getting user</p>
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <p>Hola {user.name}</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {userRol === 'ADMINISTRADOR' && (
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
          <form action={handleSignOut}>
            <Button variant={'link'} type="submit">
              Cerrar Sesion
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
