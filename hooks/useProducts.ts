'use client'

import { getAllProducts } from '@/libs/actions'
import { useQuery } from '@tanstack/react-query'

export default function useProducts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  })

  return {
    products: data,
    isLoading,
    isError: !!error,
  }
}
