'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Bars3Icon } from '@heroicons/react/24/outline'
import NavLinks from './nav-links'

export function Sidenav() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet defaultOpen>
        <SheetTrigger>
          <Bars3Icon className="h-5 w-5 m-2 text-2xl font-bold" />
        </SheetTrigger>
        <SheetContent side={'left'} className="flex flex-col justify-around">
          <SheetHeader>
            <SheetTitle>Nombre del local</SheetTitle>
            <SheetDescription></SheetDescription>
            <Separator className="my-4" />
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <NavLinks />
          </div>
          <Separator className="my-4" />
          <SheetFooter>
            <Button>Cerrar sesion </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
