'use client'

import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { Button } from '../ui/button'

interface DataForm {
  name: string
}

export default function CategoryForm() {
  const { data: session } = useSession()
  const [dataForm, setDataForm] = useState<DataForm>({
    name: '',
  })

  const token = session?.accessToken

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDataForm((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log('Datos del formulario:', dataForm)

    //validacion data del form
    const formData = new FormData()
    formData.append('name', dataForm.name)

    try {
      const response = await axios.post(
        'http://localhost:3010/api/category',
        { name: dataForm.name },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      )
      console.log('Respuesta del servidor:', response)
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="labelForm">
          Name:
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
      <Button type="submit" variant={'inventory'}>
        Submit
      </Button>
    </form>
  )
}
