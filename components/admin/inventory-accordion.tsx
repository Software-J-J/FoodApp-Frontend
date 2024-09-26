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
import { token } from '@/utils/token'
import ConfirmModal from './confirm-modal'

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

  const { categoryProducts, updateAssetProduct, isLoading, isError } =
    useCategoriesProducts(id)

  if (isLoading) {
    return <LoadingComponent />
  }

  if (isError) {
    return <ErrorComponent />
  }

  const productsOrdered = categoryProducts.products.sort((a: any, b: any) => {
    if (a.asset && b.asset) {
      return a.name.localeCompare(b.name)
    }
    return b.asset - a.asset
  })

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
          {productsOrdered.map((product: ProductInventory, idx: string) => (
            <InventoryCardProduct key={idx} product={product} categoryId={id} />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

function InventoryCardProduct({
  product,
  categoryId,
}: {
  product: ProductInventory
  categoryId: string
}) {
  const { updateAssetProduct } = useCategoriesProducts(categoryId)

  const handleAsset = () => {
    updateAssetProduct.mutate({
      productId: +product.id,
      newData: { id: product.id, asset: !product.asset },
      token,
    })
  }
  return (
    <div className="border-2 rounded-md m-2 p-2 flex justify-between items-center mx-2">
      <div>
        <h1 className="font-bold">{product.name}</h1>
        <p className="text-xs text-gray-500">${product.price}</p>
      </div>
      <ConfirmModal
        onConfirm={handleAsset}
        message={`Quieres ${
          product.asset ? 'desactivar' : 'activar'
        } este producto?`}
        subTitle={product.name}
      >
        <Switch className="bg-red-600" checked={product.asset} />
      </ConfirmModal>
    </div>
  )
}
