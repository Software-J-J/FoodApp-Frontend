import { DataBussiness } from '@/app/lib/types'
import Image from 'next/image'

export default function HeaderMain({ data }: { data: DataBussiness }) {
  return (
    <>
      <Image
        className="h-52 object-cover"
        src={data.backgroundMenu}
        alt="alfajores"
        height={788}
        width={940}
      />
    </>
  )
}
