import axios from 'axios'
import { cookies } from 'next/headers'

export async function getSession() {
  const session = cookies().get('nextauth.user')?.value
  if (!session) return null
  return await JSON.parse(session)
}

export async function logout() {
  cookies().set('nextauth.user', '', { expires: new Date(0) })
  cookies().set('nextauth.token', '', { expires: new Date(0) })
}

export async function login(values: { username: string; password: string }) {
  try {
    const response = await axios.post(
      'https://api-agendamentos.onrender.com/auth',
      values,
    )
    const { token, user } = response.data

    if (token && user) {
      cookies().set('nextauth.token', token, { maxAge: 60 * 60 * 24 })
      cookies().set('nextauth.user', JSON.stringify(user), {
        maxAge: 60 * 60 * 24,
      })
    }

    return { success: true }
  } catch (error) {
    console.log(error)
    return { success: false }
  }
}
