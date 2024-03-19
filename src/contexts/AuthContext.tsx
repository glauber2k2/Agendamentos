'use client'

import { ReactNode, createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'

import axios from 'axios'
import { useRouter } from 'next/navigation'

type User = {
  name: string
  email: string
  username: string
}

type SignInData = {
  email: string
  password: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User

  signIn: (
    data: SignInData,
  ) => Promise<{ user: User | null; error: string | null }>

  signOut: () => void
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    username: '',
  })
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      axios
        .get('http://localhost:8000/users', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setUser(response.data))
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  async function signIn({
    email,
    password,
  }: {
    email: string
    password: string
  }) {
    try {
      const response = await axios.post('http://localhost:8000/auth', {
        email,
        password,
      })

      const { token, user } = response.data
      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 1, // 1 hour
      })
      console.log('log de user', user)
      setUser(user)

      router.replace('/GlauberCorp/home')

      return { user, error: null }
    } catch (error) {
      return {
        user: null,
        error: error.response?.data || 'Erro ao fazer login.',
      }
    }
  }

  const signOut = () => {
    destroyCookie(null, 'nextauth.token', {
      path: '/',
    })

    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
