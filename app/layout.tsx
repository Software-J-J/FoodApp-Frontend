import '@/components/shared/global.css'
import type { Metadata } from 'next'
import { inter } from '@/components/shared/fonts'

import { getServerSession, Session } from 'next-auth'
import { authOptions } from '@/libs/auth'

import Navbar from '@/components/shared/navbar'
import Providers from '@/providers/Providers'

export const metadata: Metadata = {
  title: {
    template: '%s | Pedilo',
    default: 'Pedilo',
  },
  description: 'App de gestion de pedidos',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session: Session | null = await getServerSession(authOptions)
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
