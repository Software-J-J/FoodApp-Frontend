'use client'

import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useCallback, useEffect, useState } from 'react'

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const router = useRouter()
  //   const { data: session } = useSession()

  //   useEffect(() => {
  //     if (session?.user) {
  //       window.location.reload()
  //     }
  //   }, [session])

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
    <section>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <h1>Sign In</h1>

        <label htmlFor="email">Email: </label>
        <input type="email" placeholder="Email" name="email" />

        <label htmlFor="password">Password: </label>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          name="password"
        />

        <button
          onClick={(e) => {
            e.preventDefault()
            setShowPassword(!showPassword)
          }}
          type="button"
        >
          {showPassword ? 'Hide Password' : 'Show Password'}
        </button>
        <button type="submit">Sign Up</button>
        <Link href={'/register'}>Registrarse</Link>
      </form>
    </section>
  )
}
