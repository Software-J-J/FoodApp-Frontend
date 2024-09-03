import Image from 'next/image'
import Link from 'next/link'
import { Button } from './button'

type DataBussiness = {
  id: number
  name: string
  urlTag: string
  colors: never[]
  logoUrl: string
  backgroundMenu: string
  filters: any[]
  products: any[]
}

export default function BusinessCard({ data }: { data: DataBussiness }) {
  return (
    <div>
      <div>
        <Image width={250} height={250} alt="logo" src={'/logoLocal.png'} />
        <h1 className="text-[2.25rem] font-bold">{data.name}</h1>
      </div>
      <Button asChild>
        <Link href={`${data.urlTag}/comprar`}>Ver productos</Link>
      </Button>
    </div>
  )
}
