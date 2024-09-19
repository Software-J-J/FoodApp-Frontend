import { Order } from '@/libs/types'
import OrderCard from './order-card'

export default function OrdersNew({ orders }: { orders: Order[] }) {
  const news = orders.filter((order) => order.status === 'PAID')
  return (
    <section className="border-2 rounded-xl mx-2 h-[50vh]">
      <h1 className="text-xl font-extrabold text-center my-1">
        Listos para salir
      </h1>
      <div className="border-2 mx-1 rounded-sm h-[90%]">
        {news.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </section>
  )
}
