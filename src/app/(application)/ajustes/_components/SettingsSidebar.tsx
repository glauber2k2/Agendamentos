import { ActiveRoute } from '@/components/ActiveRoute'
import Divider from '@/components/Divider'
import { BadgeCheck, Settings, Settings2Icon, Wallpaper } from 'lucide-react'
import { FunctionComponent } from 'react'

interface SettingsSidebarProps {}

const SettingsSidebar: FunctionComponent<SettingsSidebarProps> = () => {
  return (
    <div className="flex flex-col md:border-r dark:border-neutral-800 border-neutral-300">
      <h1 className="truncate text-lg tracking-wider p-6 flex items-center gap-4 font-semibold">
        <Settings />
        Ajustes
      </h1>
      <Divider />
      <div className="flex flex-col gap-2 py-4 px-2">
        <ActiveRoute href={'/ajustes'}>
          <Settings2Icon size={18} /> Gerais
        </ActiveRoute>

        <ActiveRoute href={'/ajustes/visual'}>
          <Wallpaper size={18} /> Visuais
        </ActiveRoute>
        <ActiveRoute href={'/ajustes/plano'}>
          <BadgeCheck size={18} /> Plano
        </ActiveRoute>
      </div>{' '}
    </div>
  )
}

export default SettingsSidebar
