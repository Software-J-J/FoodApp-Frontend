import React from 'react'

export default function Title({ titleProp }: { titleProp: string }) {
  return (
    <>
      <h1 className="font-bold text-2xl">{titleProp}</h1>
    </>
  )
}
