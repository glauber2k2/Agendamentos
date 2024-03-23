'use client'

function LayoutAuthRoutes({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex bg-system-200 dark:bg-system-darkness flex-col items-center justify-center w-1/3 gap-10">
        <div className="flex items-center text-4xl font-medium dark:text-system-50 text-system-800">
          <img
            src="/myLogo.png"
            alt=""
            className="w-16 h-16 invert dark:invert-0"
          />
          TimeAlign
        </div>
        <img
          src="/sentadoRelogio.png"
          className="w-[200px] object-scale-down"
        />
      </div>
      <div className="flex-1 flex overflow-y-auto">{children}</div>
    </div>
  )
}

export default LayoutAuthRoutes
