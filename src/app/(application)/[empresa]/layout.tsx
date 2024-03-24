'use client'

import UserSidebar from '@/components/layout/UserSidebar'
import { SidebarProvider } from '@/contexts/SidebarContext'

import SidebarCliente from '@/components/SidebarCliente'
import { ReactNode } from 'react'

function LayoutClienteRoutes({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex">
        <SidebarCliente />
        <div className="ml-[100px] lg:mr-[400px] md:p-10 p-4 flex flex-1 h-full overflow-y-auto">
          {children}
        </div>
        <UserSidebar />
      </div>
    </SidebarProvider>
  )
}

export default LayoutClienteRoutes
