import Title from '@/components/admin/title'
import ProductForm from '@/components/products/product-form'

export default function page() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center pt-5">
      <Title titleProp={'Crear nuevo producto'} />
      <ProductForm />
    </div>
  )
}
