import { Order } from '@/libs/types'
import { OrderDialog } from './order-dialog'

export default function OrderPendings({ orders }: { orders: Order[] }) {
  const pendings = orders.filter((order) => order.status === 'PENDING')
  return (
    <section className="border-2 rounded-xl mx-2 h-[50vh]">
      <h1 className="text-xl font-extrabold text-center my-1">
        Ultimas ordenes pendientes
      </h1>
      <div className="border-2 mx-1 rounded-sm h-[90%]">
        {pendings.map((order) => (
          <OrderDialog key={order.id} order={order} />
        ))}
      </div>
    </section>
  )
}
