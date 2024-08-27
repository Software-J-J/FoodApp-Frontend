import { Metadata } from 'next'
import FooterNav from '@/app/ui/footer-nav'
import Navbar from '@/app/ui/navbar'
import AppProvider from '@/app/ui/context/AppContext'

export const metadata: Metadata = {
  title: 'Simon Postres',
  description: 'de la gula',
}

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="relative">
      <AppProvider>
        <Navbar />
        {children}
        <FooterNav />
      </AppProvider>
    </main>
  )
}
