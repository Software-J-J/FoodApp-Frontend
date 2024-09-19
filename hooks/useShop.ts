'use client'

import { getBusinessById } from '@/libs/actions'
import { useQueries, useQuery } from '@tanstack/react-query'

export default function useShop(businessId: string) {
  const { data, error, isLoading } = useQuery({
    queryKey: ['shop', { businessId }],
    queryFn: () => getBusinessById(businessId),
  })

  return {
    shopData: data,
    isLoading,
    isError: !!error,
  }
}
