import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import useCategoriesProducts from '@/hooks/useCategoriesProducts'
import { Category } from '@/libs/types'
import LoadingComponent from '../shared/loading-component'
import ErrorComponent from '../shared/error-component'
import { Switch } from '../ui/switch'

type ProductInventory = {
  id: string
  name: string
  price: number
  asset: boolean //desactivarlo / stock / inventario
  status: boolean // borrado logico
}

export default function InventoryAccordion({
  category,
}: {
  category: Category
}) {
  const { id, name, status } = category

  const { categoryProducts, isLoading, isError } = useCategoriesProducts(id)

  if (isLoading) {
    return <LoadingComponent />
  }

  if (isError) {
    return <ErrorComponent />
  }

  return (
    <Accordion type="multiple">
      <AccordionItem value={`category-${id}`}>
        <AccordionTrigger>
          <div className="text-start ml-4">
            <h1>{name}</h1>
            <p className="text-xs text-gray-500">
              {categoryProducts.products.length} productos
            </p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          {categoryProducts.products.map(
            (product: ProductInventory, idx: string) => (
              <InventoryCardProduct key={idx} product={product} />
            )
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

function InventoryCardProduct({ product }: { product: ProductInventory }) {
  return (
    <div className="border-2 rounded-md m-2 p-2 flex justify-between items-center mx-2">
      <div>
        <h1 className="font-bold">{product.name}</h1>
        <p className="text-xs text-gray-500">${product.price}</p>
      </div>
      <Switch className="bg-red-600" checked={product.asset} />
    </div>
  )
}
