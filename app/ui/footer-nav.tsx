'use client'

import {
  ShoppingCartIcon,
  ShoppingBagIcon,
  EllipsisVerticalIcon,
} from '@heroicons/react/24/outline'
import { Button } from './button'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'

import { simonPostres } from '../tempData/simon-postres'

export default function FooterNav() {
  const path = usePathname()

  const { urlTag } = simonPostres
  return (
    <nav className="bg-white sticky h-16 w-full bottom-0 grid grid-cols-3 border-t-2">
      <Button
        variant={'fNav'}
        size={'full'}
        className={clsx(
          path === `/${urlTag}/pedir/comprar` && 'bg-gray-400 hover:bg-gray-300'
        )}
        asChild
      >
        <Link href={`/${urlTag}/pedir/comprar`}>
          <ShoppingBagIcon className="h-5 w-5" />
        </Link>
      </Button>
      <Button
        variant={'fNav'}
        size={'full'}
        className={clsx(
          path === `/${urlTag}/pedir/cart` && 'bg-gray-400 hover:bg-gray-300'
        )}
        asChild
      >
        <Link href={`/${urlTag}/pedir/cart`}>
          <ShoppingCartIcon className="h-5 w-5" />
        </Link>
      </Button>
      <Button
        variant={'fNav'}
        size={'full'}
        className={clsx(
          path === `/${urlTag}/pedir/order` && 'bg-gray-400 hover:bg-gray-300'
        )}
        asChild
      >
        <Link href={`/${urlTag}/pedir/order`}>
          <EllipsisVerticalIcon className="h-5 w-5" />
        </Link>
      </Button>
    </nav>
  )
}
