import Title from '@/components/admin/title'
import CategoryForm from '@/components/products/category-form'
import React from 'react'

export default function page() {
  return (
    <div>
      <Title titleProp={'Crear nueva categoria'} />
      <CategoryForm />
    </div>
  )
}
