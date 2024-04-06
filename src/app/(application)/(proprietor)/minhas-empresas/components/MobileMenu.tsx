import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { FunctionComponent } from 'react'
import Sidebar from './Sidebar'

interface MobileMenuProps {}

const MobileMenu: FunctionComponent<MobileMenuProps> = () => {
  return (
    <Sheet>
      <SheetTrigger className="m-6 w-fit">
        <Menu />
      </SheetTrigger>
      <SheetContent side={'left'}>
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
