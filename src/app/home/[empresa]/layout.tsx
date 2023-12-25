import { SidebarProvider } from '@/contexts/SidebarContext'
import SidebarCliente from './components/SidebarCliente'

function LayoutClienteRoutes({ children }: any) {
  return (
    <SidebarProvider>
      <div className='flex'>
        <SidebarCliente />
        <div className='ml-[100px] p-10 flex flex-1 h-screen overflow-y-auto'>
          {children}
        </div>
      </div>
    </SidebarProvider>
  )
}

export default LayoutClienteRoutes
