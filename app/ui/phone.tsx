import React from 'react'

export default function Phone({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center bg-yellow-100">
      <main className="w-[23.5rem] h-[50.75rem] border-4 rounded-xl bg-white border-black contain-content overflow-x-auto">
        {children}
      </main>
    </div>
  )
}
