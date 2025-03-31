import { AuthStoreState } from '@/types/auth'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { LoginCredentials, User } from '@/types/auth'

export const authStore = create<AuthStoreState>()(
  persist(
    (set) => ({
      currentUser: null,
      isLoggedIn: false,
      error: null,
      isAdmin: false,
      login: async (credentials: LoginCredentials) => {
        //NOTE: Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500))

        // TODO: Replace with actual API call to backend
        const user = MOCK_USERS.find(u => u.userName === credentials.userName)

        if (!user || user.password !== credentials.password) {
          set({ error: 'Invalid userName or password' })
          return {
            success: false,
            message: 'Invalid userName or password'
          }
        }

        // Remove password from user object before storing
        const { password, ...safeUser } = user

        if (user.userName === 'admin') {
          set({ isAdmin: true })
        }
        
        set({ 
          currentUser: safeUser,
          isLoggedIn: true,
          error: null
        })

        return {
          success: true,
          message: 'Login successful',
          user: safeUser
        }
      },

      logout: () => set({ 
        currentUser: null, 
        isLoggedIn: false,
        error: null,
        isAdmin: false
      })
    }),
    {
      name: 'app-storage'
    }
  )
) 

// Mock user database (in real app, this would be in your backend)
const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'John Doe',
    userName: 'admin',
    password: 'admin' //TODO: In real app, this would be hashed
  }
]