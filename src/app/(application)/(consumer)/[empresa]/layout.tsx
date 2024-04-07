import { ReactNode } from 'react'
import SidebarEmpresa from './components/SidebarEmpresa'
import ResponsiveMenu from '../../(proprietor)/minhas-empresas/components/ResponsiveMenu'
import { headers } from 'next/headers'
import { userAgent } from 'next/server'

function LayoutClienteRoutes({ children }: { children: ReactNode }) {
  const ua = userAgent({ headers: headers() })
  const viewport = ua.device.type === 'mobile' ? 'mobile' : 'desktop'

  if (viewport == 'mobile') {
    return (
      <div className={`h-full`}>
        <ResponsiveMenu>
          <SidebarEmpresa />
        </ResponsiveMenu>

        {children}
      </div>
    )
  } else {
    return (
      <div className={`grid grid-cols-[26rem_1fr] h-full`}>
        <SidebarEmpresa />

        {children}
      </div>
    )
  }
}

export default LayoutClienteRoutes
