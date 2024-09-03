import { Product, ProductCartContextType } from '@/libs/types'
import CartProductCard from './cart-product-card'

export default function CartList({
  cartProducts,
}: {
  cartProducts: Product[]
}) {
  return (
    <div className="flex flex-col gap-2">
      {cartProducts.length > 0 &&
        cartProducts.map((product) => (
          <CartProductCard product={product} key={product.id} />
        ))}
    </div>
  )
}
