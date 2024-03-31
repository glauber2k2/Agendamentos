import Sidebar from './components/Sidebar'

export default function MinhasEmpresasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full flex-col md:flex-row">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  )
}
