import { Order } from '@/libs/types'
import React from 'react'
import { Button } from '../ui/button'
import { OrderDialog } from './order-dialog'

export default function OrderPendings({ orders }: { orders: Order[] }) {
  const pendings = orders.filter((order) => order.status === 'PENDING')
  return (
    <section>
      {pendings.map((order) => (
        <OrderDialog key={order.id} order={order} />
      ))}
    </section>
  )
}
