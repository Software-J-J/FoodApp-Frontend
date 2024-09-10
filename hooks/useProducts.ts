'use client'

import { getAllProducts } from '@/libs/actions'
import { useQuery } from '@tanstack/react-query'

export default function useProducts(businessId: string) {
  const { data, error, isLoading } = useQuery({
    queryKey: ['products', businessId],
    queryFn: () => getAllProducts(businessId),
  })

  return {
    products: data,
    isLoading,
    isError: !!error,
  }
}
