'use client'

import Link from 'next/link'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Button } from '../ui/button'
import Header from '../products/head-container'
import { RegisterData } from '@/libs/types'
import { register } from '@/libs/form-actions'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [registerInProgress, setRegisterInProgress] = useState<boolean>(false)
  const [newUserData, setNewUserData] = useState<RegisterData>({
    email: '',
    password: '',
    name: '',
    phone: '',
    address: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setNewUserData({
      ...newUserData,
      [name]: value,
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    setRegisterInProgress(true)
    await register(formData)
    setRegisterInProgress(false)
  }

  return (
    <form
      className="h-screen flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="bg-slate-200 border-2 border-gray-500 px-5 py-10 rounded-lg">
        <Header title="Crear cuenta" />

        <div className="mb-4">
          <div className="secondDiv">
            <label htmlFor="name" className="labelForm">
              Nombre Completo:
            </label>
            <div className="relative">
              <input
                className="inputForm"
                type="text"
                placeholder="Nombre"
                name="name"
                value={newUserData.name}
                onChange={handleChange}
                disabled={registerInProgress}
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="secondDiv">
            <label htmlFor="email" className="labelForm">
              Correo Electronico:
            </label>
            <div className="relative">
              <input
                className="inputForm"
                type="email"
                placeholder="Correo Electronico"
                name="email"
                value={newUserData.email}
                onChange={handleChange}
                disabled={registerInProgress}
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
                placeholder="Contraseña"
                name="password"
                value={newUserData.password}
                onChange={handleChange}
                disabled={registerInProgress}
              />
            </div>
          </div>

          {/* aca va el repetir Contraseña */}

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

        <div className="mb-4">
          <div className="secondDiv">
            <label htmlFor="phone" className="labelForm">
              Telefono:
            </label>
            <div className="relative">
              <input
                className="inputForm"
                type="text"
                placeholder="Telefono"
                name="phone"
                value={newUserData.phone}
                onChange={handleChange}
                disabled={registerInProgress}
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="secondDiv">
            <label htmlFor="address" className="labelForm">
              Direccion:
            </label>
            <div className="relative">
              <input
                className="inputForm"
                type="text"
                placeholder="Direccion"
                name="address"
                value={newUserData.address}
                onChange={handleChange}
                disabled={registerInProgress}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Button disabled={registerInProgress} type="submit">
            Registrarse
          </Button>
          <Button type="button" variant={'secondary'}>
            <Link href={'/login'}>Iniciar sesion</Link>
          </Button>
        </div>
      </div>
    </form>
  )
}
