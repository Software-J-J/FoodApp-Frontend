import { Order } from '@/libs/types'
import React from 'react'
import { Button } from '../ui/button'

export default function OrdersNew({ orders }: { orders: Order[] }) {
  const news = orders.filter((order) => order.status === 'PAID')
  return (
    <section>
      {news.map((order) => (
        <div key={order.id} className="border-2 border-black">
          <div className="flex">
            <p>{order.id}</p>
            <p>{order.user?.name}</p>
            <p>{order.status}</p>
          </div>
          <div className="flex justify-around">
            <Button>Listo p reparto</Button>
            <Button>Wsp</Button>
            <Button>Print</Button>
          </div>
        </div>
      ))}
    </section>
  )
}
