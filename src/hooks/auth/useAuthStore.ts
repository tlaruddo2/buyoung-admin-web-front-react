import { authStore } from '@/stores/auth'

export const useAuthStore = () => {
  const currentUser = authStore(state => state.currentUser)
  const isLoggedIn = authStore(state => state.isLoggedIn)
  const error = authStore(state => state.error)
  const isAdmin = authStore(state => state.isAdmin)
  const login = authStore(state => state.login)
  const logout = authStore(state => state.logout)

  return {
    currentUser,
    isLoggedIn,
    error,
    isAdmin,
    login,
    logout,
    // Add additional auth-related computed values
    userName: currentUser?.userName ?? 'Guest'
  }
} 