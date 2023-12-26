import UserSidebar from '@/components/layout/UserSidebar'
import { SidebarProvider } from '@/contexts/SidebarContext'
import SidebarCliente from './[empresa]/components/SidebarCliente'

function LayoutClienteRoutes({ children }: any) {
  return (
    <SidebarProvider>
      <div className='flex'>
        <SidebarCliente />
        <div className='ml-[100px] p-10 flex flex-1 h-screen overflow-y-auto'>
          {children}
        </div>
        <UserSidebar />
      </div>
    </SidebarProvider>
  )
}

export default LayoutClienteRoutes
