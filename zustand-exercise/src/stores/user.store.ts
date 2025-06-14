import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type UserStoreState = {
  firstname: string
  setFirstname: (newName: string) => void
  lastname: string
  age: number
}

export const useUserStore = create<UserStoreState>()(
  persist(
    (set) => ({
      firstname: 'Jane',
      setFirstname: (newName) => set(() => ({ firstname: newName })),
      lastname: 'Doe',
      age: 24,
    }),
    {
      name: 'user-storage', 
    }
  )
)
