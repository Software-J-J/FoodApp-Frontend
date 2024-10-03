import useEmployees from '@/hooks/useEmployees'
import { token } from '@/utils/token'
import { useSession } from 'next-auth/react'
import LoadingComponent from '../shared/loading-component'
import ErrorComponent from '../shared/error-component'
import { Button } from '../ui/button'
import { EditIcon } from 'lucide-react'
import { UserRoles } from '@/libs/types'
import clsx from 'clsx'

export default function EmployeeList() {
  const { data, status } = useSession()

  const { employees, isError, isLoading } = useEmployees(
    data?.user.businessId!,
    token
  )

  if (status === 'loading' || isLoading) {
    return <LoadingComponent />
  }

  if (isError) {
    return <ErrorComponent />
  }

  console.log(employees)

  return (
    <div className="border-2 rounded-md min-w-72">
      {employees.map((empl: any) => (
        <EmployeeCard key={empl.id} employe={empl} />
      ))}
    </div>
  )
}

function EmployeeCard({ employe }: { employe: any }) {
  return (
    <div className="flex items-center justify-between m-2 border-2 rounded-md bg-sky-50 p-2">
      <div>
        <p className="text-lg">{employe.name}</p>
        <EmployeeRol role={employe.roles[0]} />
      </div>
      <Button size={'icon'} variant={'outline'}>
        <EditIcon />
      </Button>
    </div>
  )
}

function EmployeeRol({ role }: { role: UserRoles }) {
  return (
    <div
      className={clsx(
        'font-bold py-2 px-4 rounded text-sm',
        { 'bg-red-500 hover:bg-red-700 text-white': role === 'ADMINISTRADOR' },
        { 'bg-blue-500 hover:bg-blue-700 text-white': role === 'CAJA' },
        { 'text-gray-800 bg-gray-100 border-gray-400': role === 'COCINA' },
        { 'text-amber-300 bg-gray-700 amber-yellow-700': role === 'CADETE' }
      )}
    >
      {role}
    </div>
  )
}
