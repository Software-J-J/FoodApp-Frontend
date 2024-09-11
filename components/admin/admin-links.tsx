'use client'

import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'Tablero', href: `/` },
  { name: '- Pedidos -', href: `/orders` },
  { name: '- Menu -', href: `/menu` },
  { name: ' - Agregar empleado - ', href: `/employ` },
  { name: 'Finanzas', href: `/` },
]

export default function AdminNavLinks() {
  const pathname = usePathname()

  return (
    <>
      {links.map((link, idx) => {
        return (
          <Button key={idx} variant={'ghost'} asChild>
            <Link
              key={link.name}
              href={`${[pathname]}${link.href}`}
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-sky-100 text-blue-600': pathname === link.href,
                }
              )}
            >
              {link.name}
            </Link>
          </Button>
        )
      })}
    </>
  )
}
