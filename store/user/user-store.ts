import { UserRoles } from '@/libs/types'
import { create } from 'zustand'

type UserData = {
  id: string
  name: string
  email: string
  roles: UserRoles[]

  businessId?: string
}

interface State {
  user: UserData | null | undefined
  setUser: (userData: UserData) => void
  clearUser: () => void
}

export const useUserStore = create<State>()((set) => ({
  user: undefined,
  setUser: (userData) => set({ user: userData }),
  clearUser: () => set({ user: null }),
}))
