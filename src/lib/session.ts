import { fetchServer } from '@/services/serverReq'
import console from 'console'
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
  const response = await fetchServer('/auth', {
    method: 'POST',
    body: JSON.stringify(values),
  })

  try {
    const { token, user } = response.responseData

    if (token && user) {
      cookies().set('nextauth.token', token, { maxAge: 60 * 60 * 24 })
      cookies().set('nextauth.user', JSON.stringify(user), {
        maxAge: 60 * 60 * 24,
      })
    }

    return response
  } catch (error) {
    console.log(error)
    return response
  }
}

export async function updateSession() {
  const response = await fetchServer('/users')

  console.log(response.responseData)

  try {
    if (response.responseData) {
      await cookies().delete('nextauth.user')
      cookies().set('nextauth.user', JSON.stringify(response.responseData), {
        maxAge: 60 * 60 * 24,
      })
    }

    return response
  } catch (error) {
    console.log(error)
    return response
  }
}
