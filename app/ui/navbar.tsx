import { Bars3Icon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Button } from './button'
import Image from 'next/image'
import { simonPostres } from '../tempData/simon-postres'

export default function Navbar() {
  const { logoUrl, name } = simonPostres

  return (
    <nav className="w-full h-14 border-b-2 flex items-center justify-around">
      <Button variant={'fNav'} size={'full'} className="w-1/4">
        <Bars3Icon className="h-5 w-5" />
      </Button>
      <div className="flex">
        <Image
          src={logoUrl}
          width={32}
          height={32}
          alt={`logo ${name}`}
        ></Image>
        <h1>{name}</h1>
      </div>
      <div className="w-1/4"></div>
      {/* <Button variant={'ghost'} className="hidden">
        <ShoppingCartIcon className="h-5 w-5" />
      </Button> */}
    </nav>
  )
}
