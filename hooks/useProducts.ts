'use client'

import { getAllCategories, getAllProducts } from '@/libs/actions'
import { useQueries } from '@tanstack/react-query'

export default function useProducts(businessId: string) {
  return useQueries({
    queries: [
      {
        queryKey: ['products', { businessId }],
        queryFn: () => getAllProducts(businessId),
      },
      { queryKey: ['categories'], queryFn: () => getAllCategories() },
    ],
    combine: (queries) => {
      const isLoading = queries.some((query) => query.status === 'pending')
      const isError = queries.some((query) => query.status === 'error')
      const [products, categories] = queries.map((query) => query.data)

      return {
        isLoading,
        isError,
        products,
        categories,
      }
    },
  })
}
