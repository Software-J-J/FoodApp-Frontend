'use client'

import { useActionState } from 'react'

import { createOrder, State } from '@/app/lib/actions'
import {
  HomeIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { Button } from '../button'

export default function FormClient() {
  const initialState: State = { message: null, errors: {} }
  // const [state, formAction] = useActionState(createOrder, initialState)

  const [state, formAction] = useActionState(crearOrden, initialState)
  return (
    <form className="flex flex-col" action={formAction}>
      <div className="mb-4">
        <label htmlFor="userName" className="mb-2 block text-sm font-medium">
          Tu alias
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="userName"
              name="userName"
              type="text"
              step="0.01"
              // defaultValue={invoice.userName}
              placeholder="Enter USD userName"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="userName-error"
            />
            <HomeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <div id="userName-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.userName &&
              state?.errors.userName.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
      </div>

      {/* <div className="mb-4">
        <label htmlFor="address" className="mb-2 block text-sm font-medium">
          Tu direccion
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="address"
              name="address"
              type="text"
              step="0.01"
              // defaultValue={invoice.address}
              placeholder="Enter USD address"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="address-error"
            />
            <HomeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <div id="address-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.address &&
              state?.errors.address.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
      </div> */}

      {/* <div className="mb-4">
        <label htmlFor="phone" className="mb-2 block text-sm font-medium">
          Tu telefono
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="phone"
              name="phone"
              type="text"
              step="0.01"
              // defaultValue={invoice.address}
              placeholder="Enter USD phone"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="phone-error"
            />
            <HomeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.phone &&
              state?.errors.phone.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
      </div> */}

      {/* <div className="mb-4">
        <label htmlFor="amount" className="mb-2 block text-sm font-medium">
          Monto
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="amount"
              name="amount"
              type="text"
              step="0.01"
              // defaultValue={invoice.amount}
              placeholder="Enter USD amount"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="amount-error"
            />
            <HomeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <div id="amount-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.amount &&
              state?.errors.amount.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
      </div> */}

      <div className="mt-6 flex justify-end gap-4">
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  )
}
