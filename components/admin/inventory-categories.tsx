import useCategories from '@/hooks/useCategories'
import React from 'react'

export default function InventoryCateories() {
  const { categories, isLoading, isError } = useCategories()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>cagada noma</p>
  }
  return (
    <div>
      {categories!.data.map((cat, idx) => (
        <p key={idx}>{cat.name}</p>
      ))}
    </div>
  )
}
