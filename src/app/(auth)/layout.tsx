import { getServerSession } from 'next-auth'
import { ReactNode } from 'react'
import { nextAuthOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

async function LayoutAuth({ children }: { children: ReactNode }) {
  const session = await getServerSession(nextAuthOptions)

  if (!session) {
    redirect('/login')
  }
  return <>{children}</>
}

export default LayoutAuth