import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { FunctionComponent, ReactNode } from 'react'
import { Bell } from 'lucide-react'
import ListInvitations from './ListInvitations'
import { getSession } from '@/lib/session'

interface NotificationsProps {
  children: ReactNode
}

const Notifications: FunctionComponent<NotificationsProps> = async ({
  children,
}) => {
  const session = await getSession()
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-[350px] sm:w-[400px] mx-4">
        <div>
          <header className="py-4 px-6 flex items-center gap-2 font-semibold">
            <Bell size={18} />
            Suas notificações
          </header>

          <ListInvitations user_id={session.id} />
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default Notifications
