import { useStore } from '../store/useStore'

export const useAuth = () => {
  const currentUser = useStore(state => state.currentUser)
  const isLoggedIn = useStore(state => state.isLoggedIn)
  const error = useStore(state => state.error)
  const isAdmin = useStore(state => state.isAdmin)
  const login = useStore(state => state.login)
  const logout = useStore(state => state.logout)

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