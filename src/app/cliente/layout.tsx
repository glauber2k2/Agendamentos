import Sidebar from '@/components/layout/Sidebar'

function LayoutClienteRoutes({ children }: any) {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='px-40 py-20 flex flex-1 h-screen overflow-y-auto'>
        {children}
      </div>
    </div>
  )
}

export default LayoutClienteRoutes
