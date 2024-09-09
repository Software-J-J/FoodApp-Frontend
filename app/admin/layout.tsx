import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `admin`,
  description: 'de la gula',
}

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main>{children}</main>
}
