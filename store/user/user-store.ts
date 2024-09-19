import { UserData } from '@/libs/types'
import { create } from 'zustand'

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
