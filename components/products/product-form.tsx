'use client'

// PENDIENTES PARA HACER EN ESTE FORM
// - Extraer el token del authSession === DONE
// - Migrar la funcion del handleSubmit a actions.ts & api/products/route.ts
// - Componetizar el input de image por algo mas estilizado
// - Que al submitear se limpie el form y muestre un cartel de Done, volver a menu? Agregar otro producto

import { FormEvent, useState } from 'react'
import { Button } from '../ui/button'
import { useSession } from 'next-auth/react'
import LoadingComponent from '../shared/loading-component'
import { createProduct } from '@/libs/form-actions'
import { token } from '@/utils/token'
import useCategories from '@/hooks/useCategories'
import ErrorComponent from '../shared/error-component'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Category } from '@/libs/types'
import EditImage from '../shared/editable-image'
import CreateCategory from '../admin/create-category'

interface FormData {
  name: string
  description: string
  category: string
  price: string
  image: File | null
}

export default function ProductForm() {
  const { data: session, status } = useSession() // EJEMPLO DE COMO USAR EL TOKEN BIEN
  const { categories, isLoading, isError } = useCategories()

  const [newProduct, setNewProduct] = useState<FormData>({
    name: '',
    description: '',
    category: '',
    price: '',
    image: null,
  })
  const [submitProgress, setSubmitProgress] = useState<boolean>(false)

  const [imagePreview, setImagePreview] = useState<string | null>(null)

  if (status === 'loading' || isLoading) {
    return <LoadingComponent />
  }

  if (isError) {
    return <ErrorComponent />
  }

  if (!session) {
    return <p>Debes iniciar sesion</p>
  }

  // const token = session?.accessToken

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewProduct((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleCategoryChange = (value: string) => {
    setNewProduct((prevData) => ({
      ...prevData,
      category: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<any>) => {
    const file = e.target.files?.[0]

    if (file) {
      setNewProduct((prevData) => ({
        ...prevData,
        image: file,
      }))
      const objectUrl = URL.createObjectURL(file)
      setImagePreview(objectUrl)

      return () => URL.revokeObjectURL(objectUrl)
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('name', newProduct.name)
    formData.append('description', newProduct.description)
    formData.append('category', newProduct.category)
    formData.append('price', newProduct.price)
    if (newProduct.image) {
      formData.append('image', newProduct.image)
    }

    setSubmitProgress(true)
    await createProduct(formData, token!)
    setSubmitProgress(false)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-72 mx-auto mt-5">
      <div className="mb-4">
        <label htmlFor="name" className="labelForm">
          Nombre del producto:
        </label>
        <div className="secondDiv">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={newProduct.name}
              onChange={handleChange}
              className="inputForm"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="labelForm">
          Descripcion:
        </label>
        <div className="secondDiv">
          <div className="relative">
            <input
              type="text"
              id="description"
              name="description"
              value={newProduct.description}
              onChange={handleChange}
              className="inputForm"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="labelForm">
          Categoria:
        </label>
        <Select onValueChange={(value) => handleCategoryChange(value)}>
          <SelectTrigger className="">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat: Category) => (
              <SelectItem key={cat.id} value={cat.name}>
                {cat.name}
              </SelectItem>
            ))}
            <CreateCategory />
          </SelectContent>
        </Select>
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="labelForm">
          Precio por unidad:
        </label>
        <div className="secondDiv">
          <div className="relative">
            <input
              type="number"
              id="price"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              className="inputForm"
            />
          </div>
        </div>
      </div>
      <div className="w-60 min-h-60 mx-auto">
        <EditImage
          labelText="Elegir imagen"
          link={imagePreview}
          handleFile={handleFileChange}
        />
      </div>

      <Button
        disabled={submitProgress}
        type="submit"
        variant={'inventory'}
        className="w-72"
      >
        Crear Nuevo Producto
      </Button>
    </form>
  )
}
