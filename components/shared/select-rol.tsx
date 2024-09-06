import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { UserRoles } from '@/libs/types'

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

export default function SelectRol({ handleRol }: Props) {
  return (
    <Select>
      <SelectTrigger className="">
        <SelectValue placeholder="Rol" />
      </SelectTrigger>
      <SelectContent>
        {roles.map((rol, idx) => (
          <SelectItem onChange={handleRol(rol)} key={idx} value={rol}>
            {rol}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
