import React from 'react'
import { Button } from '../ui/button'
import { createOrder } from '@/libs/dev-actions'

export default function CreateOrder() {
  return (
    <Button
      onClick={createOrder}
      className="mx-auto bg-slate-200 text-gray-800"
    >
      Crear Test
    </Button>
  )
}
