'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { Button } from '../ui/button'
import { createCategory } from '@/libs/form-actions'
import { token } from '@/utils/token'

interface DataForm {
  name: string
}

export default function CategoryForm() {
  // const { data: session } = useSession()
  const [submiting, setSubmiting] = useState<boolean>(false)
  const [dataForm, setDataForm] = useState<DataForm>({
    name: '',
  })

  // const token = session?.accessToken

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDataForm((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()

    console.log('Datos del formulario:', dataForm)

    //validacion data del form
    const formData = new FormData()
    formData.append('name', dataForm.name)

    setSubmiting(true)
    await createCategory(formData, token!)
    setSubmiting(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="labelForm text-left">
          Nombre:
        </label>
        <div className="secondDiv">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={dataForm.name}
              onChange={handleChange}
              className="inputForm"
            />
          </div>
        </div>
      </div>
      <Button
        disabled={submiting}
        type="submit"
        variant={'inventory'}
        className="w-full"
      >
        Crear Categoria
      </Button>
    </form>
  )
}
