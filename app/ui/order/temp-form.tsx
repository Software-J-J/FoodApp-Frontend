'use client'

import { HomeIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Button } from '../button'
import { crearOrden } from '@/app/lib/actions'
import ResumeTotal from './resumen-total'

export default function TempForm() {
  return (
    <form action={crearOrden}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          {/* <label htmlFor="userName" className="mb-2 block text-sm font-medium">
            Tu alias
          </label> */}
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="userName"
                name="userName"
                type="text"
                step="0.01"
                placeholder="Ingresa un alias"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="userName-error"
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {/* <div id="userName-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.userName &&
              state?.errors.userName.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div> */}
          </div>
        </div>

        <div className="mb-4">
          {/* <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Numero de telefono
          </label> */}
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="phone"
                name="phone"
                type="text"
                step="0.01"
                placeholder="Numero de telefono"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="phone-error"
              />
              <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {/* <div id="phone-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.phone &&
              state?.errors.phone.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div> */}
          </div>
        </div>

        <div className="mb-4">
          {/* <label htmlFor="address" className="mb-2 block text-sm font-medium">
            Tu direccion
          </label> */}
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="address"
                name="address"
                type="text"
                step="0.01"
                placeholder="Direccion para el envio"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="address-error"
              />
              <HomeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {/* <div id="address-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.address &&
              state?.errors.address.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div> */}
          </div>
        </div>

        <ResumeTotal />

        <div className="mt-6 flex justify-end gap-4">
          <Button className="bg-deepOak-500 hover:bg-deepOak-300" type="submit">
            Hacer pedido
          </Button>
        </div>
      </div>
    </form>
  )
}
