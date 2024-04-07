import { ReactNode } from 'react'
import SidebarEmpresa from './components/SidebarEmpresa'
import ResponsiveMenu from '../../(proprietor)/minhas-empresas/components/ResponsiveMenu'

function LayoutClienteRoutes({ children }: { children: ReactNode }) {
  return (
    <div className={`md:grid grid-cols-[26rem_1fr] h-full`}>
      <ResponsiveMenu>
        <SidebarEmpresa />
      </ResponsiveMenu>

      {children}
    </div>
  )
}

export default LayoutClienteRoutes
