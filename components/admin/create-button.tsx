import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import CreateCategory from './create-category'
import { Button } from '../ui/button'
import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/24/outline'

export default function CreateButton({ pathname }: { pathname: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-red-500 text-white m-4 rounded-lg">
        <PlusIcon className="w-10 h-10" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col">
        <DropdownMenuLabel>Menu Creacion</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <CreateCategory>
            <Button className="text-wrap w-full bg-red-500">
              Nueva Categoria
            </Button>
          </CreateCategory>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`${pathname}/create`}>
            <Button className="text-wrap w-full bg-red-500">
              Nuevo Producto
            </Button>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
