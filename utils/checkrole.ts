import { UserRoles } from '@/libs/types'

interface Props {
  roles: UserRoles[]
}

export const isUser = ({ roles }: Props) => {
  return roles.includes('USER')
}

export const isAdmin = ({ roles }: Props) => {
  return roles.includes('ADMINISTRADOR')
}

export const isDev = ({ roles }: Props) => {
  return roles.includes('DESARROLLADOR')
}
