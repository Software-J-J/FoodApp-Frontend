import RegisterOwnerForm from '@/components/developer/owner-form'
import { authOptions } from '@/libs/auth'
import { getServerSession, Session } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function Page() {
  const session: Session | null = await getServerSession(authOptions)
  const isDeveloper = session?.user?.roles.find(
    (rol) => rol === 'DESARROLLADOR'
  )

  if (!isDeveloper) {
    redirect('/')
  }
  return <RegisterOwnerForm />
}
