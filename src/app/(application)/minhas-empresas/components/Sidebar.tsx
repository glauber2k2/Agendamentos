import { Button } from '@/components/ui/button'
import {
  BadgeCheck,
  Building2,
  HelpCircle,
  LineChart,
  MessageSquare,
  Plus,
} from 'lucide-react'
import Link from 'next/link'
import { FunctionComponent } from 'react'

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <div className="bg-system-950 flex flex-col p-4">
      <h1 className="truncate text-2xl font-bold tracking-wider p-6">
        Painel de empresas
      </h1>

      <span className="h-0.5 bg-system-900 flex w-full mb-6" />

      <div className="flex flex-col gap-2 mb-4">
        <Link href={'/'}>
          <Button className="w-full justify-start" variant={'ghost'}>
            <Building2 /> Minhas empresas
          </Button>
        </Link>
        <Link href={'/'}>
          <Button className="w-full justify-start" variant={'ghost'}>
            <Plus /> Cadastrar empresa
          </Button>
        </Link>
        <Link href={'/'}>
          <Button className="w-full justify-start" variant={'ghost'}>
            <LineChart /> Métricas
          </Button>
        </Link>
        <Link href={'/'}>
          <Button className="w-full justify-start" variant={'ghost'}>
            <BadgeCheck /> Meu plano
          </Button>
        </Link>
      </div>
      <span className="h-0.5 bg-system-900 flex w-full mt-auto mb-4" />
      <Link href={'/'}>
        <Button className="w-full justify-start" variant={'ghost'}>
          <HelpCircle /> Ajuda
        </Button>
      </Link>
      <Link href={'/'}>
        <Button className="w-full justify-start" variant={'ghost'}>
          <MessageSquare /> Fale conosco
        </Button>
      </Link>
    </div>
  )
}

export default Sidebar
