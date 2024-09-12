'use client'

import { Button } from '@/components/ui/button'
import { useRoleStore } from '@/store'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'fake', href: `/admin` },
  // { name: 'Resumen de pedidos', href: `/admin` },
  // {
  //   name: 'Pedidos recientes',
  //   href: `/admin/recientes`,
  // },
  // { name: 'Desempeño', href: `/admin/desempeno` },
  // { name: 'Menues', href: `/admin/menues` },
  // { name: 'Ajustes', href: `/admin/ajustes` },
  // {
  //   name: 'Bandeja de entrada',
  //   href: `/admin/inbox`,
  // },
]

export default function NavLinks() {
  const pathname = usePathname()

  const { role } = useRoleStore()

  return (
    <>
      {links.map((link, idx) => {
        return (
          <Button key={idx} variant={'ghost'} asChild>
            <Link
              key={link.name}
              href={`${[pathname]}/${link.href}`}
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
      <Link
        key={1}
        href={'developer/create-business'}
        className={clsx(
          'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
        )}
      >
        Crear negocio
      </Link>
      <Link
        key={2}
        href={'developer/owner-business'}
        className={clsx(
          'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
        )}
      >
        Agregar admin de negocio
      </Link>
      <Link
        key={3}
        href={'/developer/owner-business'}
        className={clsx(
          'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
        )}
      >
        Agregar dueno
      </Link>
    </>
  )
}
