import Search from '@/components/shared/search'
import Container from '@/components/products/container'

import { database } from '@/tempData/fakeDb'
import HeaderMain from '@/components/products/header-main'

export default function Page() {
  return (
    <main className="bg-[#F8F8FC] min-h-[42.75rem]">
      <HeaderMain data={database.simonPostres} />

      <Search />
      <Container products={database.simonPostres.products} />
      <Container products={database.simonPostres.products} />
    </main>
  )
}
