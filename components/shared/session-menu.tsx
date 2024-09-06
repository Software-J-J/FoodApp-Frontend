import Link from 'next/link'
import { signOut } from 'next-auth/react'
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
  return (
    <>
      {session?.user ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant={'outline'}>Hola {session?.user?.name}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <Button variant={'link'} onClick={() => signOut()}>
                  Log out
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <div className="w-1/4">
          <Link href={'/login'}>Loggeate</Link>
        </div>
      )}
    </>
  )
}
