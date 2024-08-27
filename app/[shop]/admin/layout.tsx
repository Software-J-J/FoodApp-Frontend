import NavBar from '@/app/ui/admin/nav-bar'
import { Sidenav } from '@/app/ui/admin/sidenav'
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
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden relative">
      <NavBar />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  )
}
