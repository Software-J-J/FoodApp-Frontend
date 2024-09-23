'use client'

import {
  changeOrderPaid,
  changeOrderStatus,
  getOrderById,
} from '@/libs/actions'
import { OrderStatus } from '@/libs/types'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

type Props = {
  orderId: string
  newStatus: OrderStatus
  token: string
}

export default function useDetailOrder(orderId: string, token: string) {
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['order', { orderId }],
    queryFn: () => getOrderById(orderId, token),
  })

  const updateOrderStatusMutation = useMutation({
    mutationFn: ({ orderId, newStatus, token }: Props) =>
      changeOrderStatus(orderId, newStatus, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['order', { orderId }] })
      // queryClient.invalidateQueries({ queryKey: ['orders'] }) // actualiza la lista de ordenes
    },
    onError: () => {
      console.error('algo salio mal cristiano')
    },
  })

  const updateOrderPaid = useMutation({
    mutationFn: ({ orderId, token }: { orderId: string; token: string }) =>
      changeOrderPaid(orderId, token),
    onSuccess: () => {
      console.log('todo piola')

      // queryClient.invalidateQueries({ queryKey: ['order', { orderId }] })
    },
    onError: () => {
      console.error('algo salio mal en mutation')
    },
  })

  // status es mas visual
  // paid es relevante pq guarda el valor en las ganancias

  // const updateListAfterClose = useMutation({})

  return {
    order: data,
    isLoading,
    isError,
    updateOrderStatusMutation,
    updateOrderPaid,
  }
}
