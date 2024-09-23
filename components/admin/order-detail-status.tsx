// Que mira esto:
// "status": "PENDING",
// "paid": false,
// "paidAt": null,
// "stripeChargeId": null,
// "updateAt": "2024-09-18T14:30:02.025Z",
// "deliveryMethod": "PICKUP",

// Si paid false === button ACEPTAR PAGO
// si paid true === button PAGADO, hover: CANCELAR PAGO?

// si paidAt && Pagado hace paitAt

// Ultima actualizacion hace

// Metodo de entrega

import { Order, OrderStatus } from '@/libs/types'
import { Button } from '../ui/button'
import clsx from 'clsx'
import { calcTime } from '@/utils/calcTime'
import OrderStatusDiv from './order-status'
import { token } from '@/utils/token'

import useDetailOrder from '@/hooks/useDetailOrder'

type Props = {
  order: Order
}

// 'PENDING'
// | 'PAID'
// | 'PREPARED'
// | 'DELIVERED'
// | 'CANCELLED'
// | 'ACCEPTED'
// | 'COMPLETED'

export default function OrderDetailStatus({ order }: Props) {
  const { status, paid, paidAt, stripeChargeId, updateAt, deliveryMethod } =
    order

  const { updateOrderStatusMutation, updateOrderPaid } = useDetailOrder(
    order.id,
    token
  )

  const handleStatusButtons = (newStatus: OrderStatus) => {
    if (newStatus === 'PAID') {
      updateOrderPaid.mutate({
        orderId: order.id,
        token,
      })
    }

    updateOrderStatusMutation.mutate({
      orderId: order.id,
      newStatus,
      token,
    })
  }

  if (status === 'PENDING') {
    return (
      <div className="w-full text-center">
        <p className="font-bold mb-1">Aceptar pedido?</p>
        <div className="flex gap-1 justify-around">
          <Button
            variant={'accept'}
            size={'full'}
            onClick={() => handleStatusButtons('ACCEPTED')}
          >
            Aceptar
          </Button>
          <Button
            variant={'deny'}
            size={'full'}
            onClick={() => handleStatusButtons('CANCELLED')}
          >
            Cancelar
          </Button>
        </div>
      </div>
    )
  }

  if (status === 'COMPLETED') {
    return (
      <div className="border-2 p-2 rounded-sm">
        <p>Estado</p>
        <OrderStatusDiv status={status} />
      </div>
    )
  }

  return (
    <section className="flex flex-col gap-2">
      <div className="border-2 p-2 rounded-sm">
        <p>Estado</p>
        <OrderStatusDiv status={status} />
      </div>

      {status !== 'CANCELLED' && (
        <>
          <Button
            onClick={() => handleStatusButtons('PAID')}
            variant={'accept'}
            disabled={paid}
          >
            {paid ? 'Pagado' : 'Aceptar pago'}
          </Button>

          {paidAt && (
            <p className="text-gray-500 text-xs text-center mt-0">
              Pagado hace {/* {new Date(paidAt).toLocaleString()} */}
              {calcTime(paidAt)}
            </p>
          )}
          {stripeChargeId && <p>Boleta de stripe: {stripeChargeId}</p>}

          <Button
            onClick={() => handleStatusButtons('DELIVERED')}
            className={clsx(
              'w-full border-2 font-bold bg-amber-200 border-black text-black-400',
              {
                'bg-orange-200 border-orange-500 text-orange-500':
                  status === 'DELIVERED',
              }
            )}
          >
            {deliveryMethod === 'DELIVERY' ? (
              <p>Enviar con cadete</p>
            ) : (
              <p>Retirado</p>
            )}
          </Button>
        </>
      )}
      {paid && (status === 'DELIVERED' || status === 'PAID') && (
        <Button
          onClick={() => handleStatusButtons('COMPLETED')}
          className="bg-red-500 border-black"
        >
          Completado
        </Button>
      )}
      <p className="text-sm text-gray-400 text-right mt-1">
        Ultima actualizacion hace: {calcTime(updateAt)}
      </p>
    </section>
  )
}
