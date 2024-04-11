import { ActiveRoute } from '@/components/ActiveRoute'
import Divider from '@/components/Divider'
import {
  BadgeCheck,
  Building2,
  HelpCircle,
  LayoutPanelLeftIcon,
  LineChart,
  MessageSquare,
} from 'lucide-react'
import { FunctionComponent } from 'react'

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <div className="flex flex-col md:border-r dark:border-neutral-800 border-neutral-300">
      <h1 className="truncate text-lg  tracking-wider p-6 flex items-center gap-4">
        <LayoutPanelLeftIcon />
        Painel de empresas
      </h1>

      <Divider />

      <div className="flex flex-col gap-2 py-4 px-2">
        <ActiveRoute href={'/minhas-empresas'}>
          <Building2 size={18} /> Minhas empresas
        </ActiveRoute>

        <ActiveRoute href={'/minhas-empresas/metricas'}>
          <LineChart size={18} /> Métricas
        </ActiveRoute>
        <ActiveRoute href={'/'}>
          <BadgeCheck size={18} /> Meu plano
        </ActiveRoute>
      </div>
      <Divider className="mt-auto" />
      <div className="px-2 py-4">
        <ActiveRoute href={'/'}>
          <HelpCircle size={16} /> Ajuda
        </ActiveRoute>
        <ActiveRoute href={'/'}>
          <MessageSquare size={16} /> Fale conosco
        </ActiveRoute>
      </div>
    </div>
  )
}

export default Sidebar
