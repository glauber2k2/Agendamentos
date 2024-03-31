'use server'
import { login } from '@/lib/session'
import { redirect } from 'next/navigation'

export default async function loginAction(values: {
  username: string
  password: string
}) {
  const result = await login(values)

  if (result.success) {
    redirect('/feed')
  } else {
    return result
  }
}
