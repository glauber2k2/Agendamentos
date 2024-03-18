'use client'

import { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { parseCookies } from 'nookies'

function LayoutAuth({ children }: { children: ReactNode }) {
  const { ['nextauth.token']: token } = parseCookies()

  if (!token) {
    redirect('/login')
  }

  return <>{children}</>
}

export default LayoutAuth
