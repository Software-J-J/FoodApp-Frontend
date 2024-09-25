'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '../ui/button'
import CategoryForm from '../products/category-form'

export default function CreateCategory() {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Button className="mt-1 w-full bg-sky-100 text-gray-500">
          Crear nueva categoria
        </Button>
      </DialogTrigger>
      <DialogContent className="w-60 rounded-xl">
        <DialogHeader>
          <DialogTitle>Nueva categoria</DialogTitle>
          <DialogDescription></DialogDescription>
          {/* Formulario de creacion de categoria */}
          <CategoryForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
