'use client'

import axios from 'axios'
import { FormEvent, useCallback } from 'react'
import Header from '../products/head-container'
import { Button } from '../ui/button'

import { useSession } from 'next-auth/react'

export default function CreateBussines() {
  const { data: session } = useSession()
  const token = session?.accessToken

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const newBussinesResponse = await axios.post(
        'http://localhost:3010/api/business',
        {
          name: formData.get('name'),
          description: formData.get('description'),
          address: formData.get('address'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          openingHours: [
            {
              dayOfWeek: 'MARTES',
              openTime: '09:30',
              closeTime: '18:00',
            },
            {
              dayOfWeek: 'JUEVES',
              openTime: '09:30',
              closeTime: '18:00',
            },
          ],
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      )
      console.log(newBussinesResponse)
    },
    []
  )
  return (
    <form
      className="h-screen flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="bg-slate-200 border-2 border-gray-500 px-5 py-10 rounded-lg">
        <Header title="Crear negocio" />

        <div className="mb-4">
          <div className="secondDiv">
            <label htmlFor="name" className="labelForm">
              Nombre del local:
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
            <label htmlFor="description" className="labelForm">
              Descripcion:
            </label>
            <div className="relative">
              <input
                className="inputForm"
                type="text"
                placeholder="Descripcion"
                name="description"
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
            <label htmlFor="email" className="labelForm">
              Correo electronico:
            </label>
            <div className="relative">
              <input
                className="inputForm"
                type="email"
                placeholder="Correo"
                name="email"
              />
            </div>
          </div>
        </div>

        <Button type="submit">Registrar negocio</Button>
      </div>
    </form>
  )
}
