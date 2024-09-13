'use client'

import { getAllOrders } from '@/libs/actions'
import { useQuery } from '@tanstack/react-query'

export default function useOrders(token: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['orders'],
    queryFn: () => getAllOrders(token),
  })

  return {
    orders: data,
    isLoading,
    isError,
  }
}
