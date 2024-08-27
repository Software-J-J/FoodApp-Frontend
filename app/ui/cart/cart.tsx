import { Product } from '@/app/lib/types'
import CartProductCard from './cart-product-card'

export default function Cart({ data }: { data: Product[] }) {
  return (
    <div className="m-4 relative">
      <h1 className="font-semibold text-2xl my-6">Detalles del pedido</h1>
      <div className="flex flex-col gap-2">
        {data.length > 0 &&
          data.map((product) => (
            <CartProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  )
}
