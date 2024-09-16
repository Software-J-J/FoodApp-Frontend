'use client'

import OrderPendings from '@/components/admin/order-pendings'
import OrdersNew from '@/components/admin/orders-new'
import MainTitle from '@/components/products/main-title'
import useOrders from '@/hooks/useOrders'
import useShop from '@/hooks/useShop'
import { useShopStore } from '@/store/shop/shop-store'
import { useSession } from 'next-auth/react'
import { useParams } from 'next/navigation'

export default function Page() {
  const params = useParams()
  const { data: session } = useSession()

  // const token = session?.accessToken
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTkwZjgyLTdkZGQtNDE0Mi1iMzMxLWRiYzE1NGVmNGEzYyIsImVtYWlsIjoib3duZXJwYXBhQGdtYWlsLmNvbSIsIm5hbWUiOiJQYXBhcyBvd25lciIsInBob25lIjoiMzQzNzQ0NTQwMyIsImFkZHJlc3MiOiJTYW4gQmVuaXRvIHkgUm9jYSBNb3JhIiwiZGVsaXZlcnlNZXRob2QiOiJERUxJVkVSWSIsInN0YXR1cyI6dHJ1ZSwicm9sZXMiOlsiQURNSU5JU1RSQURPUiJdLCJjcmVhdGVkQXQiOiIyMDI0LTA5LTEwVDEzOjUyOjU3LjE0NloiLCJ1cGRhdGVkQXQiOiIyMDI0LTA5LTEwVDEzOjU1OjQ4LjA1OFoiLCJidXNpbmVzc0lkIjoiNjZiZTQyYTAtNjNmZi00ZjdmLWJmOGQtMjcxMzYyNTVhYzA3IiwiaWF0IjoxNzI2MDIwNzEwLCJleHAiOjE3MjYwMzUxMTB9.P1kYIYzulkDaILapa2AI-JxZDY36oI56WlOGnCuwEOk'

  const {
    shopData,
    isLoading: isLoadingShop,
    isError: isErrorShop,
  } = useShop(params.businessId as string)
  const {
    orders,
    isLoading: isLoadingOrders,
    isError: isErrorOrders,
  } = useOrders(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTkwZjgyLTdkZGQtNDE0Mi1iMzMxLWRiYzE1NGVmNGEzYyIsImVtYWlsIjoib3duZXJwYXBhQGdtYWlsLmNvbSIsIm5hbWUiOiJQYXBhcyBvd25lciIsInBob25lIjoiMzQzNzQ0NTQwMyIsImFkZHJlc3MiOiJTYW4gQmVuaXRvIHkgUm9jYSBNb3JhIiwiZGVsaXZlcnlNZXRob2QiOiJERUxJVkVSWSIsInN0YXR1cyI6dHJ1ZSwicm9sZXMiOlsiQURNSU5JU1RSQURPUiJdLCJjcmVhdGVkQXQiOiIyMDI0LTA5LTEwVDEzOjUyOjU3LjE0NloiLCJ1cGRhdGVkQXQiOiIyMDI0LTA5LTEwVDEzOjU1OjQ4LjA1OFoiLCJidXNpbmVzc0lkIjoiNjZiZTQyYTAtNjNmZi00ZjdmLWJmOGQtMjcxMzYyNTVhYzA3IiwiaWF0IjoxNzI2NDkxMTkyLCJleHAiOjE3MjY1MDU1OTJ9.YNXtld5weDUyuUH_ZPR06Efp8p4gjn9Azn-C4fZ1TsA'
  )

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
        <OrderPendings orders={orders.data} />
      </section>
      <section>
        <p>ordenes nuevas (nombre de user, estado, aceptar/cancelar)</p>
        <OrdersNew orders={orders.data} />
      </section>
    </div>
  )
}

// - completadas solo aparecen en /orders
// - clickear orden abre el detail
