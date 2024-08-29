import { Bars3Icon, ShoppingCartIcon } from '@heroicons/react/24/outline'

import { Session } from 'next-auth'
import { Button } from '../ui/button'
import Link from 'next/link'

interface Props {
  session: Session | null
}

export default function Navbar({ session }: Props) {
  return (
    <nav className="w-full h-14 border-b-2 flex items-center justify-around">
      <Button className="w-1/4">
        <Bars3Icon className="h-5 w-5" />
      </Button>
      <div className="flex">
        {/* <Image
          src={logoUrl}
          width={32}
          height={32}
          alt={`logo ${name}`}
        ></Image> */}
        <h1>Pedilo App</h1>
      </div>
      {session?.user ? (
        <div className="w-1/4">
          <h2>Loggeado como {session?.user?.name}</h2>
        </div>
      ) : (
        <div className="w-1/4">
          <Link href={'/login'}>Loggeate</Link>
        </div>
      )}

      {/* <Button variant={'ghost'} className="hidden">
        <ShoppingCartIcon className="h-5 w-5" />
      </Button> */}
    </nav>
  )
}
