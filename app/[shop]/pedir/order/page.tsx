import { manrope } from '@/app/ui/fonts'
import FormClient from '@/app/ui/order/form-client'
import TempForm from '@/app/ui/order/temp-form'

export default function page() {
  return (
    <div
      className={`${manrope.className} min-h-[42.75em] flex flex-col items-center justify-center`}
    >
      <h1>Ingresar datos para pedido</h1>
      <TempForm />

      {/* <FormClient /> */}
    </div>
  )
}
