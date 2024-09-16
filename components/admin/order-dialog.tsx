import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Order } from '@/libs/types'

export function OrderDialog({ order }: { order: Order }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
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
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>id: {order.id}</DialogTitle>
          <DialogDescription>Detalle de orden</DialogDescription>
        </DialogHeader>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-lg font-medium title-font mb-2">
            Detalles del Pedido
          </h2>
          <ul className="list-disc">
            <li className="text-gray-500">ID: {order.id}</li>
            <li className="text-gray-500">Monto Total: ${order.totalAmount}</li>
            <li className="text-gray-500">Items Totales: {order.totalItems}</li>
            <li className="text-gray-500">Estado: {order.status}</li>
            <li className="text-gray-500">
              Pagado: {order.paid ? 'Sí' : 'No'}
            </li>
            {order.paidAt && (
              <li className="text-gray-500">
                Pagado el: {new Date(order.paidAt).toLocaleString()}
              </li>
            )}
            {order.stripeChargeId && (
              <li className="text-gray-500">
                ID de Cargo de Stripe: {order.stripeChargeId}
              </li>
            )}
            <li className="text-gray-500">
              Creado el: {new Date(order.createdAt).toLocaleString()}
            </li>
            <li className="text-gray-500">
              Actualizado el: {new Date(order.updateAt).toLocaleString()}
            </li>
            {order.userId && (
              <li className="text-gray-500">ID de Usuario: {order.userId}</li>
            )}
            <li className="text-gray-500">
              Nombre del Invitado: {order.guestName}
            </li>
            <li className="text-gray-500">
              Teléfono del Invitado: {order.guestPhone}
            </li>
            <li className="text-gray-500">
              Dirección del Invitado: {order.guestAddress}
            </li>
            <li className="text-gray-500">
              Método de Entrega: {order.deliveryMethod}
            </li>
          </ul>
          <Button>Listo para entregar</Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
