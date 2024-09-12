import { UserRoles } from '@/libs/types'
import { create } from 'zustand'

interface State {
  role: UserRoles
  setRole: (newRole: UserRoles) => void
}

export const useRoleStore = create<State>()((set) => ({
  role: 'USER',
  setRole: (newRole) => set({ role: newRole }),
}))
