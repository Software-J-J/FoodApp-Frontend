import { OrderStatus } from '@/libs/types'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { changeOrderStatus } from '@/libs/actions'
import { token } from '@/utils/token'

type Props = {
  orderId: string
  orderStatus: OrderStatus
}

export default function HandleOrderStatus({ orderId, orderStatus }: Props) {
  const [status, setStatus] = useState<OrderStatus>('PENDING')

  const handleStatus = (currentStatus: OrderStatus) => {
    if (currentStatus === 'PENDING') {
      setStatus('PAID')
    } else if (currentStatus === 'PAID') {
      setStatus('DELIVERED')
    } else if (currentStatus === 'DELIVERED') {
      return 'al gordo le falto complete'
    }

    return changeOrderStatus(orderId, status, token)
  }

  return (
    <Button
      onClick={(e) => {
        e.stopPropagation()
        handleStatus(orderStatus)
      }}
    >
      {status === 'PENDING'
        ? 'Pago recibido'
        : status === 'PAID'
        ? 'Enviar pedido'
        : 'Cancelar'}
    </Button>
  )
}
