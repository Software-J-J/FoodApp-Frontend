import CreateBussines from '@/components/admin/create-bussines'
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
  } else {
    return (
      <div>
        <CreateBussines />
      </div>
    )
  }
}
