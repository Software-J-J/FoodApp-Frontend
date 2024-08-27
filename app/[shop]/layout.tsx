import { Metadata } from 'next'

import { database } from '../tempData/fakeDb'

const { name } = database.simonPostres

export const metadata: Metadata = {
  title: `${name}`,
  description: 'de la gula',
}

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main>{children}</main>
}
