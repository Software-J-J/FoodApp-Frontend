'use client'

import { UserRolContextType, UserRoles } from '@/libs/types'
import { createContext, useState } from 'react'

export const RolContext = createContext<UserRolContextType | null>(null)

export default function RolProvider({ children }: { children: any }) {
  const [choosedRol, setChoosedRol] = useState<UserRoles>('USER')
  console.log(choosedRol)

  return (
    <RolContext.Provider
      value={{
        choosedRol,
        setChoosedRol,
      }}
    >
      {children}
    </RolContext.Provider>
  )
}
