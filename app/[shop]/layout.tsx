import { Metadata } from 'next'

import { database } from '../../tempData/fakeDb'

const { business } = database

export const metadata: Metadata = {
  title: `${business[0].name}`,
  description: 'de la gula',
}

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main>{children}</main>
}
