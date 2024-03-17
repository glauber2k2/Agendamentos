import axios from 'axios'
import console from 'console'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const nextAuthOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.JWT_SIGIN_PRIVATE_KEY,
    maxAge: 60 * 60 * 24,
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },

      async authorize(credentials, req) {
        try {
          const response = await axios.post('http://localhost:8000/auth', {
            email: credentials?.email,
            password: credentials?.password,
          })

          if (response.status === 200) {
            return {
              user: response.data.user, // Dados do usuário
              token: response.data.token, // Token JWT
            }
          } else {
            return null
          }
        } catch (error) {
          console.error('Erro ao autenticar:', error)
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user && token) {
        token.accessToken = user.token
        token.user = user.user // Salvando os dados do usuário corretamente no token
      }
      return token
    },
    async session({ session, token }) {
      // Se houver um token de acesso, armazene-o na sessão
      if (token?.accessToken) {
        session.accessToken = token.accessToken
        session.user = token.user // Salvando os dados do usuário na sessão
      }
      console.log(session)
      return session
    },
  },

  pages: {
    signIn: '/login',
    signOut: '/login',
  },
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }
