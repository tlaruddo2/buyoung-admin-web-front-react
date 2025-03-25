import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  name: string
  userName: string
  password: string //TODO: convert to token or store password in a secure way
}

interface LoginCredentials {
  userName: string
  password: string
}

interface AuthResponse {
  success: boolean
  message: string
  user?: Omit<User, 'password'> // Exclude password from response
}

interface AppState {
  currentUser: Omit<User, 'password'> | null
  isLoggedIn: boolean
  error: string | null
  isAdmin: boolean
  
  // Modified login to handle success/failure
  login: (credentials: LoginCredentials) => Promise<AuthResponse>
  logout: () => void
}

// Mock user database (in real app, this would be in your backend)
const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'John Doe',
    userName: 'admin',
    password: 'admin' //TODO: In real app, this would be hashed
  }
]

export const useStore = create<AppState>()(
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
      name: 'auth-storage',
      partialize: (state) => ({
        currentUser: state.currentUser,
        isLoggedIn: state.isLoggedIn
      })
    }
  )
) 

