'use client'

import { getProductsByCategory } from '@/libs/actions'
import { useQuery } from '@tanstack/react-query'

export default function useCategoriesProducts(categoryId: string) {
  const { data, error, isLoading } = useQuery({
    queryKey: ['categoryProducts', { categoryId }],
    queryFn: () => getProductsByCategory(categoryId),
  })

  return {
    categoryProducts: data,
    isLoading,
    isError: !!error,
  }
}
