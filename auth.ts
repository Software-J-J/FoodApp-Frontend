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

          // Saving token on localStorage
          // const localStorageToken = localStorage.setItem('authToken', token)

          // TODO: borrar esto cuando ya funcione
          // console.log(localStorageToken)

          return user
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
      }

      if (trigger === 'update' && session) {
        token = { ...token, ...session }
      }
      return token
    },

    session({ session, token }) {
      session.user.id = token.id
      session.user.roles = token.roles as UserRoles[]

      return session
    },
  },

  pages: {
    signIn: '/auth/signin',
  },
})
