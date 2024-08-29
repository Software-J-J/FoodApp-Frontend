'use client'

import Search from '@/components/shared/search'
import Image from 'next/image'
import Container from '@/components/products/container'

import { database } from '@/tempData/fakeDb'
import { Suspense, useEffect, useState } from 'react'
import { DataBussiness } from '@/libs/types'
import HeaderMain from '@/components/products/header-main'

export default function Page() {
  // const [data, setData] = useState<DataBussiness>()

  // useEffect(() => {
  //   setData(database.simonPostres)
  // }, [])

  return (
    <main className="bg-[#F8F8FC] min-h-[42.75rem]">
      <HeaderMain data={database.simonPostres} />

      <Search />
      <Container products={database.simonPostres.products} />
      <Container products={database.simonPostres.products} />
    </main>
  )
}
