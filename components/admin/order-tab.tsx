'use client'

import useOrders from '@/hooks/useOrders'
import { Order } from '@/libs/types'
import { useSession } from 'next-auth/react'

export default function OrderTab() {
  const { data: session } = useSession()
  const token = session?.accessToken

  //este hijuesumadre no pasa bien el token
  const { orders, isLoading, isError } = useOrders(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYTkwZjgyLTdkZGQtNDE0Mi1iMzMxLWRiYzE1NGVmNGEzYyIsImVtYWlsIjoib3duZXJwYXBhQGdtYWlsLmNvbSIsIm5hbWUiOiJQYXBhcyBvd25lciIsInBob25lIjoiMzQzNzQ0NTQwMyIsImFkZHJlc3MiOiJTYW4gQmVuaXRvIHkgUm9jYSBNb3JhIiwiZGVsaXZlcnlNZXRob2QiOiJERUxJVkVSWSIsInN0YXR1cyI6dHJ1ZSwicm9sZXMiOlsiQURNSU5JU1RSQURPUiJdLCJjcmVhdGVkQXQiOiIyMDI0LTA5LTEwVDEzOjUyOjU3LjE0NloiLCJ1cGRhdGVkQXQiOiIyMDI0LTA5LTEwVDEzOjU1OjQ4LjA1OFoiLCJidXNpbmVzc0lkIjoiNjZiZTQyYTAtNjNmZi00ZjdmLWJmOGQtMjcxMzYyNTVhYzA3IiwiaWF0IjoxNzI2MjU1ODkwLCJleHAiOjE3MjYyNzAyOTB9.Zw86JsExY8Du_kEvz4E75rVxYRjRBzeI0sDVHQlnEH4'
  )
  console.log(orders)

  if (isLoading) {
    return <p>Cargando...</p>
  }

  if (isError) {
    return <p>Error :c</p>
  }

  return (
    <div>
      {orders.data.map((order: Order) => (
        <div
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          key={order.id}
        >
          <h2 className="text-lg font-medium title-font mb-2">
            Detalles del Pedido
          </h2>
          <ul className="list-disc">
            <li className="text-gray-500">ID: {order.id}</li>
            <li className="text-gray-500">Monto Total: ${order.totalAmount}</li>
            <li className="text-gray-500">Items Totales: {order.totalItems}</li>
            <li className="text-gray-500">Estado: {order.status}</li>
            <li className="text-gray-500">
              Pagado: {order.paid ? 'Sí' : 'No'}
            </li>
            {order.paidAt && (
              <li className="text-gray-500">
                Pagado el: {new Date(order.paidAt).toLocaleString()}
              </li>
            )}
            {order.stripeChargeId && (
              <li className="text-gray-500">
                ID de Cargo de Stripe: {order.stripeChargeId}
              </li>
            )}
            <li className="text-gray-500">
              Creado el: {new Date(order.createdAt).toLocaleString()}
            </li>
            <li className="text-gray-500">
              Actualizado el: {new Date(order.updateAt).toLocaleString()}
            </li>
            {order.userId && (
              <li className="text-gray-500">ID de Usuario: {order.userId}</li>
            )}
            <li className="text-gray-500">
              Nombre del Invitado: {order.guestName}
            </li>
            <li className="text-gray-500">
              Teléfono del Invitado: {order.guestPhone}
            </li>
            <li className="text-gray-500">
              Dirección del Invitado: {order.guestAddress}
            </li>
            <li className="text-gray-500">
              Método de Entrega: {order.deliveryMethod}
            </li>
          </ul>
        </div>
      ))}
    </div>
  )
}
