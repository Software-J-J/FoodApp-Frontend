import Signin from '@/components/account/Signin'
import { authOptions } from '@/libs/auth'
import { checkAdmin } from '@/utils/checkrole'
import { getServerSession, Session } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function Login() {
  const session: Session | null = await getServerSession(authOptions)

  if (session) {
    if (checkAdmin(session.user.roles)) {
      redirect(`/admin/${session.user.businessId}`)
    } else {
      redirect('/')
    }
  } else {
    return <Signin />
  }
}
