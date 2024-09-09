import axios from 'axios'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'asdf' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post(
            'http://localhost:3010/api/auth/login',
            {
              email: credentials?.email,
              password: credentials?.password,
            }
          )

          const { user, token } = response.data

          if (user && token) {
            return { ...user, accessToken: token }
          } else {
            return null
          }
        } catch (error) {
          console.error('Error during authentication', error)
          return null
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name
        token.email = user.email
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
      return token
    },
    async session({ session, token }) {
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
}
