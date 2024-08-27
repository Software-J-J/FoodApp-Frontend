import Filters from './filters'
import Header from './head-container'
import Card from './card'
import { manrope } from '../fonts'

import { Product } from '@/app/lib/types'

export default function Container({ products }: { products: Product[] }) {
  return (
    <section className={`${manrope.className}`}>
      <Header title="Nuestros Productos" />
      {/* <Filters /> */}
      <div className="flex overflow-x-auto overflow-y-hidden min-h-80 mt-2">
        {products.map((p) => (
          <Card product={p} key={p.id} />
        ))}
      </div>
    </section>
  )
}
