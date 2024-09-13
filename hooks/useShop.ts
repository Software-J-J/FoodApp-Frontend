'use client'

import { getBusinessById } from '@/libs/actions'
import { useQueries } from '@tanstack/react-query'

export default function useShop(businessId: string) {
  return useQueries({
    queries: [
      {
        queryKey: ['shop', { businessId }],
        queryFn: () => getBusinessById(businessId),
      },
    ],
  })
}
