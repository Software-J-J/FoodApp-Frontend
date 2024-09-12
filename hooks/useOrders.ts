'use client'

import { getAllOrders } from '@/libs/actions'
import { useQuery } from '@tanstack/react-query'

export default function useOrders(token: string) {
  const orders = useQuery({
    queryKey: ['Orders'],
    queryFn: () => getAllOrders(token),
  })

  return orders
}
