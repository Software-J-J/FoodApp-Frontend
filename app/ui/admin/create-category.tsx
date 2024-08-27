'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function CreateCategory() {
  return (
    <Dialog>
      <DialogTrigger onClick={() => console.log('asd')}>
        Crear categoria
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nombre de categoria</DialogTitle>
          <DialogDescription>
            <input type="text" />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
