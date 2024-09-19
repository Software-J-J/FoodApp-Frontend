'use client'

import { getOrderById } from '@/libs/actions'
import { useQuery } from '@tanstack/react-query'

export default function useDetailOrder(orderId: string, token: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['order', { orderId }],
    queryFn: () => getOrderById(orderId, token),
  })

  return {
    order: data,
    isLoading,
    isError,
  }
}
