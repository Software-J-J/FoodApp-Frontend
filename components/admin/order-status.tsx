import { OrderStatus } from '@/libs/types'
import clsx from 'clsx'

//   | 'PENDING'
//   | 'PAID'
//   | 'PREPARED' -
//   | 'DELIVERED'
//   | 'CANCELLED'
//   | 'ACCEPTED' -
//   | 'COMPLETED' -

export default function OrderStatusDiv({ status }: { status: OrderStatus }) {
  return (
    <div
      className={clsx(
        'border-2 px-2 py-1 rounded-md w-full text-center my-auto',
        {
          'bg-yellow-200 text-gray-800 border-yellow-400': status === 'PENDING',
        },
        {
          'bg-green-200 text-gray-800 border-green-400': status === 'PAID',
        },
        {
          'bg-blue-200 text-gray-800 border-blue-400': status === 'PREPARED',
        },
        {
          'bg-purple-200 text-gray-800 border-purple-400':
            status === 'DELIVERED',
        },
        {
          'bg-red-200 text-gray-800 border-red-400': status === 'CANCELLED',
        },
        {
          'bg-teal-200 text-gray-800 border-teal-400': status === 'ACCEPTED',
        },
        {
          'bg-gray-200 text-gray-800 border-gray-400': status === 'COMPLETED',
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
        : status === 'PREPARED'
        ? 'Preparado'
        : status === 'ACCEPTED'
        ? 'Aceptado'
        : status === 'COMPLETED'
        ? 'Completo'
        : 'Error'}
    </div>
  )
}
