import ResponsiveMenu from './components/ResponsiveMenu'
import Sidebar from './components/Sidebar'
import { ReactNode } from 'react'
import { headers } from 'next/headers'
import { userAgent } from 'next/server'

export default function MinhasEmpresasLayout({
  children,
}: {
  children: ReactNode
}) {
  const ua = userAgent({ headers: headers() })
  const viewport = ua.device.type === 'mobile' ? 'mobile' : 'desktop'

  if (viewport === 'mobile') {
    return (
      <div className={`h-full`}>
        <ResponsiveMenu>
          <Sidebar />
        </ResponsiveMenu>

        <div className="w-full md:overflow-y-auto">{children}</div>
      </div>
    )
  } else {
    return (
      <div className={`grid grid-cols-[20rem_1fr] h-full`}>
        <Sidebar />

        <div className="w-full md:overflow-y-auto">{children}</div>
      </div>
    )
  }
}
