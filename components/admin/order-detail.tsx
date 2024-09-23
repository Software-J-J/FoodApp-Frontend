import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import reduceUuid from '@/utils/short-id'
import { UserIcon } from '@heroicons/react/24/outline'
import { BikeIcon } from 'lucide-react'
import { Separator } from '../ui/separator'
import { calcTime } from '@/utils/calcTime'
import useDetailOrder from '@/hooks/useDetailOrder'
import LoadingComponent from '../shared/loading-component'
import ErrorComponent from '../shared/error-component'
import { token } from '@/utils/token'
import { ItemOrder, OrderStatus } from '@/libs/types'
import { useShopStore } from '@/store/shop/shop-store'
import OrderDetailStatus from './order-detail-status'

export function DetailOrder({ orderId }: { orderId: string }) {
  const { order, isLoading, isError } = useDetailOrder(orderId, token)
  const { shop } = useShopStore()

  const repartidor = { name: 'Hugo' }

  if (isLoading) {
    return <LoadingComponent />
  }

  if (isError) {
    return <ErrorComponent />
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Ver Detalles</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{shop?.name}</DialogTitle>
          <DialogDescription>Detalle del pedido</DialogDescription>
        </DialogHeader>
        <div>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-3xl font-extrabold title-font mb-2 border-x-8 border-red-500 text-center">
              Pedido {reduceUuid(order.id)}
            </h2>
            <p className="text-gray-500 text-sm text-right mt-0">
              Hace {calcTime(order.createdAt)}
            </p>
            <div>
              <div className="flex items-center">
                <UserIcon className="h-7 w-7 m-2" />
                <p className="text-sm">
                  <b className="text-red-500 text-md">Cliente</b> <br />
                  {order.guestName || order.user?.name}
                </p>
              </div>
              <div className="flex items-center">
                <BikeIcon className="h-7 w-7 m-2" />
                <p className="text-sm">
                  <b className="text-red-500 text-md">Repartidor</b> <br />
                  {repartidor.name}
                </p>
              </div>
            </div>
            <div className="w-full rounded-lg bg-slate-100 gap-1 my-2">
              {order.OrderItem.map((item: ItemOrder) => (
                <div
                  key={item.productId}
                  className="flex items-center justify-around h-16"
                >
                  <p className="font-bold text-red-500">{item.quantity} x</p>
                  <p className="font-bold">{item.name}</p>
                  <p className="font-semibold text-gray-500">${item.price}</p>
                </div>
              ))}
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="font-extrabold text-xl my-1">Total: </p>
              <p className="text-gray-500"> ${order.totalAmount}</p>
            </div>
          </div>
          <OrderDetailStatus order={order} />
        </div>
        {/* <DialogFooter className="sm:justify-start">
          <Button type="button" variant="secondary">
            test status
          </Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}
