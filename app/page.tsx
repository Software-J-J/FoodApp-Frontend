import { manrope } from '@/components/shared/fonts'

import Link from 'next/link'
import { Button } from '../components/shared/button'

export default function Home() {
  return (
    <main
      className={`${manrope.className} flex flex-col justify-evenly items-center h-full`}
    >
      <h1 className="text-3xl font-bold">Pedilo App</h1>
      <Button variant={'link'}>
        <Link href={'/simon-postres'}>Tienda</Link>
      </Button>
    </main>
  )
}
