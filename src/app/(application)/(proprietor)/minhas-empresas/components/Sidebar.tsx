import Divider from '@/components/Divider'
import { Button } from '@/components/ui/button'
import {
  BadgeCheck,
  Building2,
  HelpCircle,
  LayoutPanelLeftIcon,
  LineChart,
  MessageSquare,
} from 'lucide-react'
import Link from 'next/link'
import { FunctionComponent } from 'react'

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <div className="dark:bg-system-950 bg-system-200 flex flex-col">
      <h1 className="truncate text-lg tracking-wider p-6 flex items-center gap-4">
        <LayoutPanelLeftIcon />
        Painel de empresas
      </h1>

      <Divider />

      <div className="flex flex-col  py-4 px-2">
        <Link href={'/'}>
          <Button className="w-full justify-start" variant={'ghost'}>
            <Building2 size={18} /> Minhas empresas
          </Button>
        </Link>

        <Link href={'/'}>
          <Button className="w-full justify-start" variant={'ghost'}>
            <LineChart size={18} /> Métricas
          </Button>
        </Link>
        <Link href={'/'}>
          <Button className="w-full justify-start" variant={'ghost'}>
            <BadgeCheck size={18} /> Meu plano
          </Button>
        </Link>
      </div>
      <Divider className="mt-auto" />
      <div className="px-2 py-4">
        <Link href={'/'}>
          <Button className="w-full justify-start" variant={'ghost'}>
            <HelpCircle size={16} /> Ajuda
          </Button>
        </Link>
        <Link href={'/'}>
          <Button className="w-full justify-start" variant={'ghost'}>
            <MessageSquare size={16} /> Fale conosco
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
