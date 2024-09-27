'use client'

import { FormEvent, useState } from 'react'
import { Button } from '../ui/button'

import { registerEmployee } from '@/libs/form-actions'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { useShopStore } from '@/store/shop/shop-store'
import { UserRoles } from '@/libs/types'
import { useSession } from 'next-auth/react'
import LoadingComponent from '../shared/loading-component'

const roles = [
  { id: 1, rol: 'Cajero', value: 'CAJA' },
  { id: 2, rol: 'Cocinero', value: 'COCINA' },
  { id: 3, rol: 'Repartidor', value: 'CADETE' },
  { id: 4, rol: 'Quitar Rol', value: 'USER' },
]

type EmployeeForm = {
  email: string
  password: string
  name: string
  phone: string
  address: string
  roles: UserRoles[]
  businessId: string
}

export default function EmployeeForm() {
  const { data: session, status } = useSession()
  const { shop } = useShopStore()

  const [showPassword, setShowPassword] = useState(false)
  const [registerInProgress, setRegisterInProgress] = useState<boolean>(false)
  const [newEmployee, setNewEmployee] = useState<EmployeeForm>({
    email: '',
    password: '',
    name: '',
    phone: '',
    address: '',
    roles: [],
    businessId: '',
  })

  if (status === 'loading') {
    return <LoadingComponent />
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewEmployee((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleRoleChange = (value: UserRoles) => {
    setNewEmployee((prevData) => ({
      ...prevData,
      roles: [value],
    }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    formData.append('email', newEmployee.email)
    formData.append('password', newEmployee.password)
    formData.append('name', newEmployee.name)
    formData.append('phone', newEmployee.phone)
    formData.append('address', newEmployee.address)
    formData.append('businessId', session!.user.businessId!)

    setRegisterInProgress(true)
    await registerEmployee(formData, newEmployee.roles)
    setRegisterInProgress(false)
  }

  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <div className="secondDiv">
          <label htmlFor="name" className="labelForm">
            Nombre:
          </label>
          <div className="relative">
            <input
              className="inputForm"
              type="text"
              placeholder="Nombre"
              name="name"
              onChange={handleChange}
              value={newEmployee.name}
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
              onChange={handleChange}
              value={newEmployee.email}
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
              onChange={handleChange}
              value={newEmployee.password}
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
              onChange={handleChange}
              value={newEmployee.phone}
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
              onChange={handleChange}
              value={newEmployee.address}
            />
          </div>
        </div>
      </div>

      <Select onValueChange={(value) => handleRoleChange(value as UserRoles)}>
        <SelectTrigger className="w-60" type="button">
          <SelectValue placeholder="Elegir Rol" />
        </SelectTrigger>
        <SelectContent>
          {roles.map((rol) => (
            <SelectItem key={rol.id} value={rol.value}>
              {rol.rol}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button variant={'inventory'} disabled={registerInProgress} type="submit">
        Registrar nuevo empleado
      </Button>
    </form>
  )
}
