import UserSidebar from '@/components/layout/UserSidebar'
import { SidebarProvider } from '@/contexts/SidebarContext'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import SidebarCliente from './components/SidebarCliente'

async function LayoutClienteRoutes({ children }: any) {
  const session = await getServerSession(nextAuthOptions)
  const { user } = session
  return (
    <SidebarProvider>
      <div className="flex">
        <SidebarCliente userData={user} />
        <div className="ml-[100px] p-10 flex flex-1 h-screen overflow-y-auto">
          {children}
        </div>
        <UserSidebar />
      </div>
    </SidebarProvider>
  )
}

export default LayoutClienteRoutes
