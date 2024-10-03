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
import { useEffect, useState } from 'react'
import ConfirmModal from './confirm-modal'

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

// FALTA AGREGAR QUE SOLO SE REVALIDEN LAS QUERYS SI HUBO ALGUNA MODIFICACION EN LA ORDER

export default function OrderDetailStatus({ order }: Props) {
  const { status, paid, paidAt, stripeChargeId, updateAt, deliveryMethod } =
    order

  const { updateOrderStatusMutation, updateOrderPaid, invalidateOrdersQuerys } =
    useDetailOrder(order.id, token)

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

  useEffect(() => {
    return () => {
      invalidateOrdersQuerys()
      // Al cerrar el componente detail, se revalida la lista de ordenes
    }
  }, [])

  if (status === 'PENDING') {
    return (
      <div className="w-full text-center">
        <p className="font-bold mb-1">Aceptar pedido?</p>
        <div className="flex gap-1 justify-around">
          <Button
            variant={'accept'}
            size={'full'}
            className="w-40"
            onClick={() => handleStatusButtons('ACCEPTED')}
          >
            Aceptar
          </Button>
          <ConfirmModal
            message="Quieres cancelar la orden?"
            onConfirm={() => handleStatusButtons('CANCELLED')}
          >
            <Button variant={'deny'} size={'full'} className="w-40">
              Cancelar
            </Button>
          </ConfirmModal>
        </div>
      </div>
    )
  }

  if (status === 'COMPLETED') {
    return (
      <div className="border-2 p-2 rounded-lg">
        <p>Estado</p>
        <OrderStatusDiv status={status} />
        <p className="text-xs text-gray-400 text-right mt-1">
          Ultima actualizacion hace {calcTime(updateAt)}
        </p>
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
          <ConfirmModal
            message="Confirmar pago?"
            onConfirm={() => handleStatusButtons('PAID')}
          >
            <Button variant={'accept'} className="w-full" disabled={paid}>
              {paid ? 'Pagado' : 'Aceptar pago'}
            </Button>
          </ConfirmModal>

          {paidAt && (
            <p className="text-gray-500 text-xs text-center mt-0">
              Pagado {/* {new Date(paidAt).toLocaleString()} */}
              {calcTime(paidAt)}
            </p>
          )}
          {stripeChargeId && <p>Boleta de stripe: {stripeChargeId}</p>}

          <ConfirmModal
            message="Confirmar entrega?"
            onConfirm={() => handleStatusButtons('DELIVERED')}
          >
            <Button
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
          </ConfirmModal>
        </>
      )}
      {paid && (status === 'DELIVERED' || status === 'PAID') && (
        <ConfirmModal
          message="Todo listo?"
          onConfirm={() => handleStatusButtons('COMPLETED')}
        >
          <Button className="bg-red-500 border-black w-full">Completado</Button>
        </ConfirmModal>
      )}
      <p className="text-sm text-gray-400 text-right mt-1">
        Ultima actualizacion hace: {calcTime(updateAt)}
      </p>
    </section>
  )
}
