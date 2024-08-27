import { Dispatch, SetStateAction, useContext } from 'react'
import { Button } from '../button'
import Image from 'next/image'
import { manrope } from '../fonts'
import { Product, ProductCartContextType } from '@/app/lib/types'
import { CartContext } from '../context/AppContext'

export default function DetailProduct({
  product,
  handleModal,
}: {
  product: Product
  handleModal: Dispatch<SetStateAction<boolean>>
}) {
  const { name, image, description, price } = product
  const { addToCart } = useContext(CartContext) as ProductCartContextType

  const handleAddToCartButtonClick = () => {
    addToCart(product)
  }
  return (
    <div
      onClick={() => handleModal(false)}
      className="fixed inset-0 flex items-center justify-center z-20"
    >
      <div
        onClick={(ev) => ev.stopPropagation()}
        className={`${manrope.className} h-[600px] w-96  relative m-1 rounded-lg contain-strict bg-white border-2 border-black`}
      >
        <Button
          variant={'default'}
          size={'lg'}
          className="absolute right-0 top-0 z-30"
          onClick={() => handleModal(false)}
        >
          X
        </Button>
        <Image src={image} width={396} height={296} alt="coso"></Image>
        <div className="w-11/12 m-6">
          <h1 className="font-bold text-2xl my-5">{name}</h1>
          <p className="font-medium text-sm">{description}</p>
        </div>
        <Button
          className="absolute bottom-10 left-14 w-8/12"
          onClick={handleAddToCartButtonClick}
        >
          Agregar al pedido ${price}
        </Button>
      </div>
    </div>
  )
}
