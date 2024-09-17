'use client'

import Link from 'next/link'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Button } from '../ui/button'
import Header from '../products/head-container'
import { logIn } from '@/libs/form-actions'
import { LoginData } from '@/libs/types'

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false)
  const [loginInProgress, setLoginInProgress] = useState<boolean>(false)
  const [userData, setUserData] = useState<LoginData>({
    email: '',
    password: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUserData({
      ...userData,
      [name]: value,
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    setLoginInProgress(true)
    await logIn(formData)
    setLoginInProgress(false)
  }

  return (
    <form
      className="h-screen flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="bg-slate-200 border-2 border-gray-500 px-5 py-10 rounded-lg">
        <Header title="Iniciar Sesion" />
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
                value={userData.email}
                onChange={handleChange}
                disabled={loginInProgress}
              />
            </div>
          </div>
        </div>

        <div className="mb-4 flex flex-col items-center">
          <div className="secondDiv">
            <label htmlFor="password" className="labelForm">
              Contraseña:
            </label>
            <div className="relative">
              <input
                className="inputForm"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                disabled={loginInProgress}
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
            {showPassword ? 'Esconder Contraseña' : 'Ver Contraseña'}
          </Button>
        </div>
        <div className="flex flex-col gap-5">
          <Button disabled={loginInProgress} type="submit">
            Entrar
          </Button>
          <Button variant={'secondary'}>
            <Link href={'/register'}>Registrarse</Link>
          </Button>
        </div>
      </div>
    </form>
  )
}
