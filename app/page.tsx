import { manrope } from '@/components/shared/fonts'

import Link from 'next/link'
import { Button } from '../components/shared/button'
import { database } from '@/tempData/fakeDb'
import { PediloLogo } from '@/components/shared/pedilo-logo'

export default function Home() {
  const { business } = database
  return (
    <main
      className={`${manrope.className} flex flex-col justify-evenly items-center h-screen`}
    >
      <div className="flex flex-col gap-4">
        <PediloLogo />
        {business.map((buss) => {
          return (
            <Button key={buss.id} variant={'secondary'}>
              <Link href={`/${buss.link}`}>{buss.name}</Link>
            </Button>
          )
        })}
      </div>
    </main>
  )
}
