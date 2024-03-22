'use client'

import UserSidebar from '@/components/layout/UserSidebar'
import { SidebarProvider } from '@/contexts/SidebarContext'

import SidebarCliente from './components/SidebarCliente'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContext'

function LayoutClienteRoutes({ children }: { children: ReactNode }) {
  const { user } = useContext(AuthContext)
  return (
    <SidebarProvider>
      <div className="flex h-dvh">
        <SidebarCliente />
        <div className="ml-[100px] p-10 flex flex-1 h-full overflow-y-auto">
          {children}
        </div>
        {user && <UserSidebar />}
      </div>
    </SidebarProvider>
  )
}

export default LayoutClienteRoutes
