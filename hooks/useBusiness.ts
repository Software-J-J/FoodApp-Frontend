'use client'

import { getAllBusiness } from '@/libs/actions'
import { useQuery } from '@tanstack/react-query'

export default function useBusiness() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['business'],
    queryFn: () => getAllBusiness(),
  })

  return {
    business: data,
    isLoading,
    isError: !!error,
  }
}
