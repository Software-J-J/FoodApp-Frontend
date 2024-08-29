import '@/components/shared/global.css'
import type { Metadata } from 'next'
import { inter } from '@/components/shared/fonts'
import AuthProvider from '@/providers/AuthProvider'
import { getServerSession, Session } from 'next-auth'
import { authOptions } from '@/libs/auth'
import Navbar from '@/components/shared/navbar'

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
      <AuthProvider>
        <body className={`${inter.className} antialiased`}>
          <Navbar session={session} />
          <main>{children}</main>
        </body>
      </AuthProvider>
    </html>
  )
}
