'use client'

import OrderPendings from '@/components/admin/order-pendings'
import OrdersNew from '@/components/admin/orders-new'
import MainTitle from '@/components/products/main-title'
import useOrders from '@/hooks/useOrders'
import useShop from '@/hooks/useShop'
import { useSession } from 'next-auth/react'
import { useParams } from 'next/navigation'
import { token } from '@/utils/token'
import LoadingComponent from '../shared/loading-component'
import ErrorComponent from '../shared/error-component'
import CreateOrder from '../developer/create-order'

export default function AdminMain() {
  const params = useParams()
  const { data: session } = useSession()

  const {
    shopData,
    isLoading: isLoadingShop,
    isError: isErrorShop,
  } = useShop(params.businessId as string)
  const {
    orders,
    isLoading: isLoadingOrders,
    isError: isErrorOrders,
  } = useOrders(token)

  if (isLoadingShop || isLoadingOrders) {
    return <LoadingComponent />
  }

  if (isErrorShop || isErrorOrders) {
    return <ErrorComponent />
  }
  return (
    <div>
      <h1 className="w-full text-center font-bold text-gray-500 mt-2">
        Panel de admin
      </h1>

      <CreateOrder />
      <MainTitle title={shopData.name} />

      <OrderPendings orders={orders.data} />

      <OrdersNew orders={orders.data} />
    </div>
  )
}
