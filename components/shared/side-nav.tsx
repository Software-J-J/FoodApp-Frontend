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
import { isAdmin } from '@/utils/checkrole'
import { useUserStore } from '@/store/user/user-store'
import UserNavLinks from './user-nav-links'
import AdminNavLinks from '../admin/admin-links'

interface Props {
  session: Session
}

export default function SideNav() {
  const { user } = useUserStore()
  const userRol = user?.roles
  return (
    <Sheet>
      <SheetTrigger>
        <Bars3Icon className="h-5 w-5 m-2 text-2xl font-bold" />
      </SheetTrigger>
      <SheetContent side={'left'} className="flex flex-col justify-around">
        <SheetHeader>
          <SheetTitle>Titulo del local</SheetTitle>
          <SheetDescription></SheetDescription>
          <Separator className="my-4" />
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {userRol!! && userRol.includes('USER') ? (
            <UserNavLinks />
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
