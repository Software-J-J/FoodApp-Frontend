'use client'

import { getProductById } from '@/libs/actions'
import { useQuery } from '@tanstack/react-query'

export default function useDetailProduct(productId: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['detailProduct', { productId }],
    queryFn: () => getProductById(productId),
  })

  return {
    product: data,
    isLoading,
    isError,
  }
}
