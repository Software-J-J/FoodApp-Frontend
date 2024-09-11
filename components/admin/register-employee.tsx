'use client'

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { FormEvent, useCallback, useState } from 'react'
import { Button } from '../ui/button'
import Header from '../products/head-container'
import axios, { AxiosError } from 'axios'

const roles = ['ADMINISTRADOR', 'CAJA', 'COCINA', 'CADETE', 'USER']

export default function RegisterEmployee() {
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      try {
        const formData = new FormData(event.currentTarget)
        const registerResponse = await axios.post(
          'http://localhost:3010/api/auth/register',
          {
            email: formData.get('email'),
            password: formData.get('password'),
            name: formData.get('name'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            roles: ['ADMINISTRADOR'],
          }
        )

        await signIn('credentials', {
          email: registerResponse.data.email,
          password: formData.get('password'),
          redirect: false,
        })
      } catch (error) {
        console.log(error)
        if (error instanceof AxiosError) {
          const errorMessage = error.response?.data.message
          console.error(errorMessage)
        }
      }
    },
    []
  )

  return (
    <form
      className="h-[80vh] flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <Header title="Crear cuenta de empleado" />

      <div className="mb-4">
        <div className="secondDiv">
          <label htmlFor="name" className="labelForm">
            Tu nombre:
          </label>
          <div className="relative">
            <input
              className="inputForm"
              type="text"
              placeholder="Nombre"
              name="name"
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

        {/* aca va el repetir contrasena */}

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
            />
          </div>
        </div>
      </div>

      <select name="rol" id="">
        {roles.map((rol, idx) => (
          <option value={rol} key={idx}>
            {rol}
          </option>
        ))}
      </select>

      <div className="flex flex-col gap-5">
        <Button type="submit">Registrar nuevo empleado</Button>
      </div>
    </form>
  )
}
