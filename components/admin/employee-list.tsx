import useEmployees from '@/hooks/useEmployees'
import { token } from '@/utils/token'
import { useSession } from 'next-auth/react'
import React from 'react'
import LoadingComponent from '../shared/loading-component'
import ErrorComponent from '../shared/error-component'

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
  return <div className="border-2 rounded-md min-w-72">EmployeeList</div>
}
