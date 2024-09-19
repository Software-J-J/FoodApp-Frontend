import React from 'react'

export default function MainTitle({ title }: { title: string }) {
  return (
    <div className="w-full flex items-center justify-center h-14">
      <h1 className="text-4xl font-extrabold">{title}</h1>
    </div>
  )
}
