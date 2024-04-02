import { ReactNode } from 'react'

function LayoutClienteRoutes({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full">
      <div className="flex flex-col flex-1 h-full">{children}</div>
    </div>
  )
}

export default LayoutClienteRoutes
