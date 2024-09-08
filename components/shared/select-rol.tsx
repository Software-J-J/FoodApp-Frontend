import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { RolContext } from '@/context/RolContext'
import { UserRolContextType, UserRoles } from '@/libs/types'
import { useRoleStore } from '@/store'
import { useContext } from 'react'

interface Props {
  rol: UserRoles
  handleRol: any
}

const roles = [
  'DESARROLLADOR',
  'ADMINISTRADOR',
  'CAJA',
  'COCINA',
  'CADETE',
  'USER',
]

export default function SelectRol() {
  const { role, setRole } = useRoleStore()

  const handleRoleChange = (value: UserRoles) => {
    setRole(value)
  }

  return (
    <Select onValueChange={handleRoleChange}>
      <SelectTrigger className="">
        <SelectValue placeholder="Rol" />
      </SelectTrigger>
      <SelectContent>
        {roles.map((rol, idx) => (
          <SelectItem key={idx} value={rol}>
            {rol}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
