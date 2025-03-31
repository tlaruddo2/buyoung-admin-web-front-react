export type User = {
  id: string
  name: string
  userName: string
  password: string
}

export type LoginCredentials = {
  userName: string
  password: string
}

export type AuthResponse = {
  success: boolean
  message: string
  user?: Omit<User, 'password'>
}

export type AuthStoreState = {
  currentUser: Omit<User, 'password'> | null
  isLoggedIn: boolean
  error: string | null
  isAdmin: boolean
  login: (credentials: LoginCredentials) => Promise<AuthResponse>
  logout: () => void
} 