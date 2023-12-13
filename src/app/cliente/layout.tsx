import Sidebar from '@/components/layout/Sidebar'

function LayoutClienteRoutes({ children }: any) {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='p-8 flex flex-1 h-screen overflow-y-auto'>{children}</div>
    </div>
  )
}

export default LayoutClienteRoutes
