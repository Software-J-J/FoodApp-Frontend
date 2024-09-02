import Title from '@/components/admin/title'
import FormProduct1 from '@/components/products/form-product'
import ProductForm from '@/components/products/product-form'

export default function page() {
  return (
    <div>
      {/* <FormProduct1/> */}
      <Title titleProp={'Crear nuevo producto'} />
      <ProductForm />
    </div>
  )
}
