import { SidebarProvider } from '@/contexts/SidebarContext'
import { ReactNode } from 'react'

function LayoutClienteRoutes({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-full">
        <div className="flex flex-col flex-1 h-full">{children}</div>
      </div>
    </SidebarProvider>
  )
}

export default LayoutClienteRoutes
