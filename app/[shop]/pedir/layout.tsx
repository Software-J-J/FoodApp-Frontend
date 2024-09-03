import { Metadata } from 'next'
import FooterNav from '@/components/shared/footer-nav'
import Navbar from '@/components/shared/navbar'
import AppProvider from '@/context/AppContext'

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
        {children}
        <FooterNav />
      </AppProvider>
    </main>
  )
}
