'use client'

function LayoutAuthRoutes({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen grid lg:grid-cols-[2fr_3fr]">
      <div className="hidden lg:flex flex-col items-center justify-center gap-10 dark:bg-neutral-900/30 bg-neutral-200">
        <div className="flex items-center text-4xl font-medium dark:text-neutral-50 text-neutral-800">
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
