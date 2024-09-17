'use client'

import OrderPendings from '@/components/admin/order-pendings'
import OrdersNew from '@/components/admin/orders-new'
import MainTitle from '@/components/products/main-title'
import useOrders from '@/hooks/useOrders'
import useShop from '@/hooks/useShop'
import { useShopStore } from '@/store/shop/shop-store'
import { useSession } from 'next-auth/react'
import { useParams } from 'next/navigation'
import { token } from '@/utils/token'

require('dotenv').config()

export default function Page() {
  const params = useParams()
  const { data: session } = useSession()

  // const token = session?.accessToken

  console.log('tokem:', token)

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
    return <p>Loading...</p>
  }

  if (isErrorShop || isErrorOrders) {
    return <p>Algo salio mal :c</p>
  }

  return (
    <div>
      <MainTitle title={shopData.name} />

      <OrderPendings orders={orders.data} />

      <OrdersNew orders={orders.data} />
    </div>
  )
}

// - completadas solo aparecen en /orders
// - clickear orden abre el detail
