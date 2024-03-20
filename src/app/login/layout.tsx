'use client'

function LayoutAuthRoutes({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="bg-system-darkness flex flex-col items-center justify-center w-1/3">
        <div className="flex  items-center text-4xl font-medium text-system-50">
          <img src="/myLogo.png" alt="" className="w-16 h-16" />
          TimeAlign
        </div>
        <img src="/sentadoRelogio.png" className="w-1/2 object-scale-down" />
      </div>
      <div className="flex-1 flex overflow-y-auto">{children}</div>
    </div>
  )
}

export default LayoutAuthRoutes
