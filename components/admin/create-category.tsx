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

export default function CreateCategory({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Dialog>
      <DialogTrigger className="w-full">{children}</DialogTrigger>
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
