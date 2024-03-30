'use server'
import { login } from '@/lib/session'
import { redirect } from 'next/navigation'

export default async function loginAction(values: {
  username: string
  password: string
}) {
  await login(values)
  redirect('/feed')
}
