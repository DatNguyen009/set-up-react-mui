import { AuthService } from '@/apis/auth.api'
import { IAuthResponse } from '@/types/auth.type'
import { toast } from 'react-toastify'
import { createJSONStorage, persist } from 'zustand/middleware'
import { createStore } from '.'

interface IAuthStore {
  auth: IAuthResponse | null
  authenticated: boolean
  logIn: () => void
  logOut: () => void
}

const initialState = {
  auth: null,
  authenticated: false
}

export const useAuthStore = createStore<IAuthStore>(
  'AuthStore',
  persist(
    (set) => ({
      ...initialState,
      logIn: async () => {
        try {
          const res = await AuthService.login()
          const auth = res.data

          if (!auth) {
            toast.error('Login failed')
            return
          }
          set((state) => {
            state.auth = auth
            state.authenticated = true
          })
          toast.success('Login success')
        } catch (err) {
          toast.error('Login failed')
        }
      },
      logOut: () => {
        set((state) => {
          state.auth = null
          state.authenticated = false
        })
        toast.success('Logout sucess')
      }
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)
