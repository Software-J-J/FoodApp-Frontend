'use client'

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useCallback, useState } from 'react'
import { Button } from '../ui/button'
import Header from '../products/head-container'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const router = useRouter()

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const res = await signIn('credentials', {
        email: formData.get('email'),
        password: formData.get('password'),
        redirect: false,
      })

      if (res?.error) {
        setError(res.error as string)
      }

      if (!res?.error) {
        return router.push('/')
      }
    },
    []
  )

  return (
    <form
      className="h-screen flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="bg-slate-200 border-2 border-gray-500 px-5 py-10 rounded-lg">
        <Header title="Crear cuenta" />
        <div className="mb-4">
          <div className="secondDiv">
            <label htmlFor="email" className="labelForm">
              Correo Electronico:
            </label>
            <div className="relative">
              <input
                className="inputForm"
                type="email"
                placeholder="Email"
                name="email"
              />
            </div>
          </div>
        </div>

        <div className="mb-4 flex flex-col items-center">
          <div className="secondDiv">
            <label htmlFor="password" className="labelForm">
              Contrasena:
            </label>
            <div className="relative">
              <input
                className="inputForm"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                name="password"
              />
            </div>
          </div>
          <Button
            variant={'link'}
            onClick={(e) => {
              e.preventDefault()
              setShowPassword(!showPassword)
            }}
            type="button"
          >
            {showPassword ? 'Esconder Contrasena' : 'Ver Contrasena'}
          </Button>
        </div>
        <div className="flex flex-col gap-5">
          <Button type="submit">Registrarse</Button>
          <Button variant={'secondary'}>
            <Link href={'/login'}>Iniciar sesion</Link>
          </Button>
        </div>
      </div>
    </form>
  )
}
