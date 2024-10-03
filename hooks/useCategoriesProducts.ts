'use client'

import { getProductsByCategory, updateProduct } from '@/libs/actions'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export default function useCategoriesProducts(categoryId: string) {
  const queryClient = useQueryClient()

  const { data, error, isLoading } = useQuery({
    queryKey: ['categoryProducts', { categoryId }],
    queryFn: () => getProductsByCategory(categoryId),
  })

  const updateAssetProduct = useMutation({
    mutationFn: ({
      productId,
      newData,
      token,
    }: {
      productId: number
      newData: any
      token: string
    }) => updateProduct(productId, newData, token),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['categoryProducts', { categoryId }],
      })
    },
    onError: () => {
      console.error('return error')
    },
  })

  return {
    categoryProducts: data,
    isLoading,
    isError: !!error,
    updateAssetProduct,
  }
}

// const updateOrderPaid = useMutation({
//   mutationFn: ({ orderId, token }: { orderId: string; token: string }) =>
//     changeOrderPaid(orderId, token),
//   onSuccess: () => {
//     console.log('todo piola')

//     // queryClient.invalidateQueries({ queryKey: ['order', { orderId }] })
//   },
//   onError: () => {
//     console.error('algo salio mal en mutation')
//   },
// })
