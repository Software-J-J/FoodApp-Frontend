// types/next-auth.d.ts

import 'next-auth'
import 'next-auth/jwt'
import { UserRoles } from '@/libs/types'

declare module 'next-auth' {
  interface User {
    id: string
    roles: UserRoles[]
    businessId?: string
    accessToken: string
  }
  interface Session {
    accessToken?: string
    user: {
      id: string
      name: string
      email: string
      roles: UserRoles[]
      businessId?: string
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    role: string
  }
}

// import NextAuth from 'next-auth'
// import { Session } from 'next-auth'

// declare module 'next-auth' {
//   interface Session {
//     accessToken?: string
//     user: {
//       id: string
//       name: string
//       email: string
//       roles: UserRoles[]
//       businessId?: string
//     }
//   }

//   interface User {
//     accessToken?: string
//   }
// }
