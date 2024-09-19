import { OrderStatus } from '@/libs/types'
import clsx from 'clsx'

export default function OrderStatusDiv({ status }: { status: OrderStatus }) {
  return (
    <div
      className={clsx(
        'border-2 px-2 py-1 rounded-md',
        {
          'bg-sky-100 text-blue-600 border-cyan-600': status === 'PENDING',
        },
        {
          'bg-sky-100 text-green-600 border-emerald-600': status === 'PAID',
        },
        {
          'bg-sky-100 text-orange-600 border-amber-600': status === 'DELIVERED',
        },
        {
          'bg-sky-100 text-red-600 border-x-red-600': status === 'CANCELLED',
        }
      )}
    >
      {status === 'PENDING'
        ? 'Pendiente'
        : status === 'PAID'
        ? 'Pagado'
        : status === 'DELIVERED'
        ? 'Enviado'
        : status === 'CANCELLED'
        ? 'Cancelado'
        : 'Error'}
    </div>
  )
}
