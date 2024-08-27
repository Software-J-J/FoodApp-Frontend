import { Product } from '@/app/lib/types'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SwitchAvailable } from './switch-item'

export function InventoryItem({ item }: { item: Product }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full bg-gray-200 rounded px-1"
    >
      <AccordionItem value={`${item.id}`}>
        <AccordionTrigger>
          <SwitchAvailable item={item} />
        </AccordionTrigger>
        <AccordionContent className="px-1">
          <p>{item.description}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
