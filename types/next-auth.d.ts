import NextAuth from 'next-auth'
import { Session } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    accessToken?: string // Agrega el token aquí
    // Puedes agregar otras propiedades si es necesario
  }

  interface User {
    accessToken?: string // Si necesitas incluir el token en el usuario también
  }
}
