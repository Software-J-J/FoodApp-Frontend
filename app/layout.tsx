import '@/components/shared/global.css'
import type { Metadata } from 'next'
import { inter } from '@/components/shared/fonts'

import { auth } from '@/auth'

import Navbar from '@/components/shared/navbar'
import Providers from '@/providers/Providers'
require('dotenv').config()

export const metadata: Metadata = {
  title: {
    template: '%s | Pedilo',
    default: 'Pedilo App',
  },
  description: 'App de gestion de pedidos',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  return (
    <html lang="en">
      <Providers>
        <body className={`${inter.className} antialiased`}>
          <Navbar />
          <main>{children}</main>
        </body>
      </Providers>
    </html>
  )
}
