'use client'

import { ReactNode, createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'

import { useRouter } from 'next/navigation'
import { restApi } from '../../services/api'

type User = {
  name: string
  email: string
  username: string
}

type SignInData = {
  username: string
  password: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User | null

  signIn: (
    data: SignInData,
  ) => Promise<{ user: User | null; error: string | null }>

  signOut: () => void
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  const isAuthenticated = !!user

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      restApi
        .get('users')
        .then((response) => setUser(response.data))
        .catch(() => {
          console.log('erro ao buscar dados de usuário')
          //remover o cookie caso não consiga achar um usuario com o jwt.
          destroyCookie(undefined, 'nextauth.token', {
            path: '/',
          })

          router.replace('/login')
        })
    } else {
      setUser(null)
    }
  }, [])

  async function signIn({
    username,
    password,
  }: {
    username: string
    password: string
  }) {
    try {
      const response = await restApi.post('auth', {
        username,
        password,
      })

      const { token, user } = response.data
      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
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

  function signOut() {
    destroyCookie(undefined, 'nextauth.token', {
      path: '/',
    })
    setUser(null)
    router.replace('/login')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
