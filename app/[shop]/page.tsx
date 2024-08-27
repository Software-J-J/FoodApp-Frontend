import { manrope } from '@/app/ui/fonts'

import { database } from '../tempData/fakeDb'
import Image from 'next/image'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function page() {
  const { name, urlTag } = database.simonPostres
  return (
    <main
      className={`${manrope.className} flex flex-col justify-evenly items-center h-full`}
    >
      <div>
        <div>
          <Image width={250} height={250} alt="logo" src={'/logoLocal.png'} />
          <h1 className="text-[2.25rem] font-bold">{name}</h1>
        </div>
        <Button asChild>
          <Link href={`${urlTag}/pedir/comprar`}>Ver productos</Link>
        </Button>
        <Button asChild>
          <Link href={`${urlTag}/admin`}>Admin</Link>
        </Button>
      </div>
    </main>
  )
}
