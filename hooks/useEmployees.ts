'use client'

import { getAllEmployees } from '@/libs/actions'
import { useQuery } from '@tanstack/react-query'

export default function useEmployees(businessId: string, token: string) {
  const { data, error, isLoading } = useQuery({
    queryKey: ['employees', { businessId }],
    queryFn: () => getAllEmployees(businessId, token),
  })

  return {
    employees: data,
    isLoading,
    isError: !!error,
  }
}
