'use client'

// PENDIENTES PARA HACER EN ESTE FORM
// - Extraer el token del authSession === DONE
// - Migrar la funcion del handleSubmit a actions.ts & api/products/route.ts
// - Componetizar el input de image por algo mas estilizado
// - Que al submitear se limpie el form y muestre un cartel de Done, volver a menu? Agregar otro producto

import { useState } from 'react'
import { Button } from '../ui/button'
import axios from 'axios'
import { useSession } from 'next-auth/react'

interface FormData {
  name: string
  description: string
  category: string
  price: string
  image: File | null
}

export default function ProductForm() {
  const { data: session, status } = useSession()

  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    category: '',
    price: '',
    image: null,
  })

  const [imagePreview, setImagePreview] = useState<string | null>(null)

  if (status === 'loading') {
    return <p>Cargando...</p>
  }

  if (!session) {
    return <p>Debes iniciar sesion</p>
  }

  const token = session?.accessToken

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      price: e.target.value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<any>) => {
    const file = e.target.files?.[0]

    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: file,
      }))
      const objectUrl = URL.createObjectURL(file)
      setImagePreview(objectUrl)

      return () => URL.revokeObjectURL(objectUrl)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // console.log de los valores cargados al form y guardados en el estado local
    console.log('Datos del formulario:', formData)
    console.log(token)

    //validacion data del form
    const formDataTwo = new FormData()
    formDataTwo.append('name', formData.name)
    formDataTwo.append('description', formData.description)
    formDataTwo.append('category', formData.category)
    formDataTwo.append('price', formData.price)
    if (formData.image) {
      formDataTwo.append('image', formData.image)
    }

    try {
      const response = await axios.post(
        'http://localhost:3010/api/products',
        formDataTwo,
        {
          headers: {
            // 'Content-Type': 'application/json', esto rompe el form
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
              value={formData.name}
              onChange={handleChange}
              className="inputForm"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="labelForm">
          Description:
        </label>
        <div className="secondDiv">
          <div className="relative">
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="inputForm"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="labelForm">
          Category:
        </label>
        <div className="secondDiv">
          <div className="relative">
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="inputForm"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="labelForm">
          Price:
        </label>
        <div className="secondDiv">
          <div className="relative">
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handlePriceChange}
              className="inputForm"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="labelForm">
          Image:
        </label>
        <div className="secondDiv">
          <div className="relative">
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
            />
          </div>
        </div>
        {imagePreview && (
          <div className="mt-2">
            <img
              src={imagePreview}
              alt="Vista previa"
              className="w-32 h-32 object-cover border border-gray-300 rounded-md"
            />
          </div>
        )}
      </div>
      <Button type="submit" variant={'inventory'}>
        Submit
      </Button>
    </form>
  )
}
