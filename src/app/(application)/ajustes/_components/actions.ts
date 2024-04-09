'use server'

import { updateSession } from '@/lib/session'

export default async function updateUserSession() {
  await updateSession()
}
