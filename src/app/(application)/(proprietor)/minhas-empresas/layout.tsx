'use client'

import React, { useState, useEffect, ReactNode } from 'react'
import Sidebar from './components/Sidebar'
import MobileMenu from './components/MobileMenu'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile
}

export default function MinhasEmpresasLayout({
  children,
}: {
  children: ReactNode
}) {
  const isMobile = useIsMobile()

  return (
    <div
      className={`grid ${isMobile ? 'grid-cols-1' : 'sm:grid-cols-[20rem_1fr]'} h-full`}
    >
      {!isMobile && <Sidebar />}
      {isMobile && <MobileMenu />}
      <div className="w-full md:overflow-y-auto">{children}</div>
    </div>
  )
}
