import { UserRoles } from '@/libs/types'
import NextAuth from 'next-auth'
import { Session } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    accessToken?: string
    user: {
      id: string
      name: string
      email: string
      roles: UserRoles[]
    }
  }

  interface User {
    accessToken?: string
  }
}
