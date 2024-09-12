import Title from '@/components/admin/title'
import ProductForm from '@/components/products/product-form'

export default function page() {
  return (
    <div>
      <Title titleProp={'Crear nuevo producto'} />
      <ProductForm />
    </div>
  )
}
