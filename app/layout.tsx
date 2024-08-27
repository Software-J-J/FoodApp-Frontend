import '@/app/ui/global.css'
import type { Metadata } from 'next'
import { inter } from '@/app/ui/fonts'

export const metadata: Metadata = {
  title: {
    template: '%s | Pedilo',
    default: 'Pedilo',
  },
  description: 'App de gestion de pedidos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
