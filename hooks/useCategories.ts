'use client'

import { getAllCategories } from '@/libs/actions'
import { useQuery } from '@tanstack/react-query'

export default function useCategories() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getAllCategories(),
  })

  return {
    categories: data,
    isLoading,
    isError: !!error,
  }
}
