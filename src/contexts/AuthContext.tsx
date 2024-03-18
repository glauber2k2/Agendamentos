'use client'

import { ReactNode, createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies } from 'nookies'

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
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>()
  const router = useRouter()

  const isAuthenticated = !!user

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      setUser({ email: 'teste', username: 'teste', name: 'teste' })
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

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
