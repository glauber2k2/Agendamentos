import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import React, { FunctionComponent, ReactNode } from 'react'

interface ResponsiveMenuProps {
  children: ReactNode
}

const ResponsiveMenu: FunctionComponent<ResponsiveMenuProps> = ({
  children,
}) => {
  return (
    <Sheet>
      <SheetTrigger className="m-6 w-fit">
        <Menu />
      </SheetTrigger>
      <SheetContent side={'left'}>{children}</SheetContent>
    </Sheet>
  )
}

export default ResponsiveMenu
