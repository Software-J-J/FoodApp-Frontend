import reduceUuid from '@/utils/short-id'
import React from 'react'
import OrderStatusDiv from './order-status'
import { Button } from '../ui/button'
import { PhoneIcon, PrinterIcon } from '@heroicons/react/24/outline'
import HandleOrderStatus from './handle-status'
import { Order } from '@/libs/types'
import { reportOrder } from '@/libs/actions'
import { token } from '@/utils/token'
import { DetailOrder } from './order-dialog'

export default function OrderCard({ order }: { order: Order }) {
  const handlePrint = (ev: any) => {
    ev.stopPropagation()

    return reportOrder(order.id, token)
  }
  return (
    <div
      key={order.id}
      className="w-full bg-slate-100 border-b-2 border-slate-100 py-2"
    >
      <div className="flex justify-around pb-2">
        <p>Orden: {reduceUuid(order.id)}</p>
        <p>{order.user?.name}</p>
        <OrderStatusDiv status={order.status} />
      </div>
      <div className="flex justify-around">
        <Button variant={'outline'} size={'icon'}>
          <PhoneIcon />
        </Button>
        <Button
          onClick={(ev) => handlePrint(ev)}
          variant={'outline'}
          size={'icon'}
        >
          <PrinterIcon />
        </Button>
        <DetailOrder orderId={order.id} />
        <HandleOrderStatus orderId={order.id} orderStatus={order.status} />
      </div>
    </div>
  )
}
