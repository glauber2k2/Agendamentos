'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react'

interface ResponsiveMenuProps {
  children: ReactNode
}

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

const ResponsiveMenu: FunctionComponent<ResponsiveMenuProps> = ({
  children,
}) => {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger className="m-6 w-fit">
          <Menu />
        </SheetTrigger>
        <SheetContent side={'left'}>{children}</SheetContent>
      </Sheet>
    )
  } else {
    return children
  }
}

export default ResponsiveMenu
