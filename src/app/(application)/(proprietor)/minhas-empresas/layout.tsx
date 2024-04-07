import ResponsiveMenu from './components/ResponsiveMenu'
import Sidebar from './components/Sidebar'
import { ReactNode } from 'react'

export default function MinhasEmpresasLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className={`grid md:grid-cols-[20rem_1fr] h-full`}>
      <ResponsiveMenu>
        <Sidebar />
      </ResponsiveMenu>

      <div className="w-full md:overflow-y-auto">{children}</div>
    </div>
  )
}
