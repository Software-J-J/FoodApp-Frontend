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
import { Separator } from '../ui/separator'
import { Session } from 'next-auth'
import { useUserStore } from '@/store/user/user-store'
import AdminNavLinks from './admin-links'
import useShop from '@/hooks/useShop'
import { useSession } from 'next-auth/react'
import { useShopStore } from '@/store/shop/shop-store'
import { useEffect } from 'react'

export default function AdminSideBar() {
  const { data } = useSession()
  const { shopData, isLoading, isError } = useShop(data?.user.businessId!)

  const { setShop } = useShopStore()

  useEffect(() => {
    setShop(shopData)
  }, [shopData])

  const userRol = data?.user.roles
  return (
    <Sheet>
      <SheetTrigger>
        <Bars3Icon className="h-5 w-5 m-2 text-2xl font-bold" />
      </SheetTrigger>
      <SheetContent side={'left'} className="flex flex-col justify-around">
        <SheetHeader>
          <SheetTitle>{shopData?.name}</SheetTitle>
          <SheetDescription>Panel de administracion</SheetDescription>
          <Separator className="my-4" />
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {userRol!! && userRol.includes('USER') ? (
            <p>Usuario</p>
          ) : userRol!! && userRol.includes('ADMINISTRADOR') ? (
            <AdminNavLinks />
          ) : userRol!! && userRol.includes('DESARROLLADOR') ? (
            <p>Desarrollador</p>
          ) : null}
        </div>
        <Separator className="my-4" />
        <SheetFooter>
          {/* Si hay loggeado aparece boton de logout */}
          {/* <Button onClick={() => signOut()}>Cerrar sesion </Button> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
