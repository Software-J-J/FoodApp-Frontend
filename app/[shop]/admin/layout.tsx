import NavBar from '@/components/admin/nav-bar'
import { Sidenav } from '@/components/admin/sidenav'
import { Metadata } from 'next'
import React from 'react'

export const experimental_ppr = true

export const metadata: Metadata = {
  title: {
    template: '%s | Dashboard',
    default: 'Dashboard',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen flex-col md:flex-row md:overflow-hidden relative">
      <section className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </section>
    </main>
  )
}
