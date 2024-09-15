'use client'

import MainTitle from '@/components/products/main-title'
import useOrders from '@/hooks/useOrders'
import useShop from '@/hooks/useShop'
import { useShopStore } from '@/store/shop/shop-store'
import { useSession } from 'next-auth/react'
import { useParams } from 'next/navigation'

export default function Page() {
  const params = useParams()
  const { data: session } = useSession()

  const token = session?.accessToken

  const {
    shopData,
    isLoading: isLoadingShop,
    isError: isErrorShop,
  } = useShop(params.businessId as string)
  const {
    orders,
    isLoading: isLoadingOrders,
    isError: isErrorOrders,
  } = useOrders(token as string)

  if (isLoadingShop || isLoadingOrders) {
    return <p>Loading...</p>
  }

  if (isErrorShop || isErrorOrders) {
    return <p>Algo salio mal :c</p>
  }

  return (
    <div>
      <MainTitle title={shopData.name} />
      <section>
        <p>ultimas ordenes pendientes</p>
      </section>
      <section>
        <p>ordenes nuevas (nombre de user, estado, aceptar/cancelar)</p>
      </section>
    </div>
  )
}

// - completadas solo aparecen en /orders
// - clickear orden abre el detail
