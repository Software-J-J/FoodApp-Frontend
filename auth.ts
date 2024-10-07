import axios from 'axios'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { signInSchema } from '@/lib/zod'
import { UserRoles } from './libs/types'

const deployLink = 'http://localhost:3010/api'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },

      async authorize(credentials) {
        // Credentials validation with zodSchema
        const parsedCredentials = signInSchema.safeParse(credentials)
        if (!parsedCredentials.success) {
          console.error('Invalid credentials:', parsedCredentials.error.errors)
          return null
        }

        // Getting the user from db
        try {
          const checkCredentials = await axios.post(
            `${deployLink}/auth/login`,
            {
              email: credentials?.email,
              password: credentials?.password,
            }
          )

          const { user, token } = checkCredentials.data

          if (user && token) {
            return { ...user, accessToken: token }
          } else {
            return null
          }
        } catch (error) {
          // TODO: retornar error al formulario
          console.error('Error during authentication', error)
          return null
        }
      },
    }),
  ],

  callbacks: {
    // authorized({ request: { nextUrl }, auth }) {
    //   const isLoggedIn = !!auth?.user

    //   const { pathname } = nextUrl

    // if (pathname.startsWith('/auth/signin')) {
    //   if (isLoggedIn) {
    //     return Response.redirect(new URL('/', nextUrl))
    //   }

    //   return true
    // }

    //   return isLoggedIn
    // },

    jwt({ token, user, trigger, session }) {
      if (user) {
        token.name = user.name
        token.email = user.email
        token.roles = user.roles
        token.accessToken = user.accessToken
      }

      if (user) {
        const u = user as unknown as any
        return {
          ...token,
          id: u.id,
          roles: u.roles,
          businessId: u.businessId,
        }
      }

      if (trigger === 'update' && session) {
        token = { ...token, ...session }
      }
      return token
    },

    session({ session, token }) {
      // session.user.id = token.id
      // session.user.roles = token.roles as UserRoles[]

      // return session
      if (token) {
        session.accessToken = token.accessToken as string
      }
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
          roles: token.roles,
          businessId: token.businessId,
        },
      }
    },
  },

  pages: {
    signIn: '/auth/signin',
  },
})
