import { DataBussiness } from '@/libs/types'
import { create } from 'zustand'

interface State {
  shop: DataBussiness | undefined
  setShop: (shopData: DataBussiness) => void
}

export const useShopStore = create<State>()((set) => ({
  shop: undefined,
  setShop: (shopData) => set({ shop: shopData }),
}))
