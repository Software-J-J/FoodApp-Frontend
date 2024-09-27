'use client'

import EmployeeList from '@/components/admin/employee-list'
import Header from '@/components/products/head-container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-around">
      <Header title="Lista de empleados" />
      <EmployeeList />
      <Button asChild variant={'inventory'}>
        <Link href={`${pathname}/add`}>Agregar nuevo empleado</Link>
      </Button>
    </div>
  )
}
