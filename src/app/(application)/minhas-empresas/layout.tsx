import SidebarEmpresa from '@/components/SidebarEmpresa'
import { SidebarProvider } from '@/contexts/SidebarContext'

export default function MinhasEmpresasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex">
        <SidebarEmpresa />
        <div className="w-full ml-[100px]">{children}</div>
      </div>
    </SidebarProvider>
  )
}
