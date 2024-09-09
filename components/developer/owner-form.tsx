'use client'

import axios from 'axios'
import { FormEvent, useCallback, useState } from 'react'
import { Button } from '../ui/button'

export default function RegisterOwnerForm() {
  const [showPassword, setShowPassword] = useState(false)
  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const putOwnerResponse = await axios.post(
        'http://localhost:3010/api/auth/register',
        {
          email: formData.get('email'),
          password: formData.get('password'),
          name: formData.get('name'),
          phone: formData.get('phone'),
          address: formData.get('address'),
          businessId: formData.get('idBusiness'),
          roles: ['ADMINISTRADOR'],
        }
      )
      console.log(putOwnerResponse)
    },
    []
  )

  return (
    <form
      className="h-screen flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <div className="secondDiv">
          <label htmlFor="name" className="labelForm">
            Nombre del admin:
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

      <div className="mb-4">
        <div className="secondDiv">
          <label htmlFor="idBusiness" className="labelForm">
            id del negocio:
          </label>
          <div className="relative">
            <input
              className="inputForm"
              type="text"
              placeholder="id del negocio"
              name="idBusiness"
            />
          </div>
        </div>
      </div>

      <Button type="submit">Crear Admin</Button>
    </form>
  )
}
