'use client'

import { Button } from '@/components/ui/button'
import RolProvider, { RolContext } from '@/context/RolContext'
import { UserRolContextType, UserRoles } from '@/libs/types'
import { useRoleStore } from '@/store'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'

const currentLink = 'simon-postres'

const links = [
  { name: 'Resumen de pedidos', href: `/${currentLink}/admin` },
  {
    name: 'Pedidos recientes',
    href: `/${currentLink}/admin/recientes`,
  },
  { name: 'Desempeño', href: `/${currentLink}/admin/desempeno` },
  { name: 'Menues', href: `/${currentLink}/admin/menues` },
  { name: 'Ajustes', href: `/${currentLink}/admin/ajustes` },
  {
    name: 'Bandeja de entrada',
    href: `/${currentLink}/admin/inbox`,
  },
  {
    name: 'Local',
    href: '#',
  },
]

type Props = {
  rol: UserRoles
}

export default function NavLinks() {
  const pathname = usePathname()

  const { role } = useRoleStore()

  return (
    <>
      <p className="text-black">{role}</p>
      {links.map((link, idx) => {
        return (
          <Button key={idx} variant={'ghost'} asChild>
            <Link
              key={link.name}
              href={link.href}
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
