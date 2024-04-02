import Sidebar from './components/Sidebar'

export default function MinhasEmpresasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full ">
      <Sidebar />
      <div className="w-full overflow-y-auto">{children}</div>
    </div>
  )
}
