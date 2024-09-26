import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from '@/components/ui/sheet'

import Section from './section'
import { Separator } from '@/components/ui/separator'
import { Product } from '@/libs/types'
import { InventoryItem } from './inventory-item'

type Props = {
  title: string
  products: Product[]
  filter?: string
}

export default function Inventory({ title, products, filter }: Props) {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Section title={title} count={products.length} />
        </SheetTrigger>
        <SheetContent side={'right'} className="flex flex-col justify-around">
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription>Descripcion asd</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            {products.map((p) => (
              <InventoryItem item={p} key={p.id} />
            ))}
          </div>
          <Separator className="my-4" />
          <SheetFooter></SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
