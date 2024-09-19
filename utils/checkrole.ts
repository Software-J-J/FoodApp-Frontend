import { UserRoles } from '@/libs/types'

export const isUser = (roles: UserRoles[]) => {
  return roles.includes('USER')
}

export const checkAdmin = (roles: UserRoles[]) => {
  return roles.includes('ADMINISTRADOR')
}

export const checkDev = (roles: UserRoles[]) => {
  return roles.includes('DESARROLLADOR')
}
