'use client'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import Title from '@/components/admin/title'
import CreateCategory from '@/components/admin/create-category'
import EditableImage from '@/components/shared/editable-image'
import axios from 'axios'

const categories = [{ id: 1, title: 'Chocolate' }]

interface Product {
  name: string
  description: string
  price: number
  category: string
  file: File
}

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ2YzE4YTJkLThlN2EtNDA2NS05NzBkLTgwMDFhNzdlMjQ0MCIsImVtYWlsIjoiTWFyaWFAZ21haWwuY29tIiwibmFtZSI6Ik1hcmlhIiwicGhvbmUiOiIxMjM0NTYiLCJhZGRyZXNzIjoiQ2VydmFudGVzIDE2IiwiZGVsaXZlcnlNZXRob2QiOm51bGwsInN0YXR1cyI6dHJ1ZSwicm9sZXMiOlsiVVNFUiJdLCJjcmVhdGVkQXQiOiIyMDI0LTA4LTI4VDE3OjMxOjEyLjcyNloiLCJ1cGRhdGVkQXQiOiIyMDI0LTA4LTI4VDE3OjMxOjEyLjcyNloiLCJpYXQiOjE3MjQ5Njk0NzIsImV4cCI6MTcyNDk4Mzg3Mn0.1HT6ZYsqqzXHVKTasNUNyqWvpozzas8ZP3EEfXvult8'

export default function FormProduct1() {
  const [product, setProduct] = useState<Product>({
    name: '',
    description: '',
    price: 0,
    category: '',
    file: null,
  })

  const handleFormSubmit = async (
    ev: React.FormEvent<HTMLFormElement>,
    data: any
  ) => {
    ev.preventDefault()

    const response = await axios.post(
      'http://localhost:3010/api/products',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }
    )
    // return response
  }

  return (
    <div>
      <form
        onSubmit={(ev) =>
          handleFormSubmit(ev, {
            name,
            description,
            price,
            category,
            image,
          })
        }
      >
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Nombre
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="name-error"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium"
          >
            Descripcion
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="description"
                name="description"
                type="text"
                step="0.01"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="description-error"
                value={description}
                onChange={(ev) => setDescription(ev.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="mb-2 block text-sm font-medium">
            Precio
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="price"
                name="price"
                type="number"
                step="0.01"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="price-error"
                value={price}
                onChange={(ev) => setPrice(ev.target.value)}
              />
            </div>
          </div>
        </div>

        {/* <div className="mb-4">
            <label htmlFor="image" className="mb-2 block text-sm font-medium">
              Imagen
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="image"
                  name="image"
                  type="text"
                  step="0.01"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  aria-describedby="image-error"
                  value={image}
                  onChange={(ev) => setImage(ev.target.value)}
                />
              </div>
            </div>
          </div> */}
        {/* <div>
            <EditableImage link={image} setLink={setImage} />
          </div> */}
        <label>
          <input
            type="file"
            className="hidden"
            onChange={(ev) => setImage(ev.target.files[0])}
          />
          <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">
            Change image
          </span>
        </label>

        <div className="mb-4">
          <label htmlFor="category" className="mb-2 block text-sm font-medium">
            Categoria
          </label>
          <div className="relative">
            <input
              id="category"
              name="category"
              type="text"
              step="0.01"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="category-error"
              value={category}
              onChange={(ev) => setCategory(ev.target.value)}
            />
            {/* <select
                id="category"
                name="category"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                aria-describedby="category-error"
                value={category}
                onChange={(ev) => setCategory(ev.target.value)}
              >
                <option value="" disabled>
                  Selecciona una categoria
                </option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.title}
                  </option>
                ))}
                <option>
                  <CreateCategory />
                </option>
              </select> */}
          </div>
        </div>
        <Button type="submit" variant={'inventory'}>
          Crear producto
        </Button>
      </form>
    </div>
  )
}
