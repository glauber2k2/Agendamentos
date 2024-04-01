import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { FunctionComponent, ReactNode } from 'react'
import Divider from './Divider'
import { Button } from './ui/button'
import { AlertCircle, Bell, Check, X } from 'lucide-react'

interface NotificationsProps {
  children: ReactNode
}

const Notifications: FunctionComponent<NotificationsProps> = ({ children }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-[350px]">
        <div>
          <header className="py-4 px-6 flex items-center gap-2 font-semibold">
            <Bell size={18} />
            Suas notificações
          </header>
          <Divider />
          <main className=" flex flex-col gap-2">
            <div className="p-2 flex flex-col gap-2">
              <div className="p-2 dark:bg-system-950 bg-system-300 flex items-center gap-4 justify-between rounded-sm text-sm font-medium">
                Juntar-se a Select?
                <span className="flex items-center gap-2">
                  <Button size={'icon'}>
                    <Check size={18} />
                  </Button>
                  <Button variant={'outline'} size={'icon'}>
                    <X size={18} />
                  </Button>
                </span>
              </div>
              <div className="p-2 dark:bg-system-950 bg-system-300 flex items-center gap-4 justify-between rounded-sm text-sm font-medium">
                Juntar-se a Select?
                <span className="flex items-center gap-2">
                  <Button size={'icon'}>
                    <Check size={18} />
                  </Button>
                  <Button variant={'outline'} size={'icon'}>
                    <X size={18} />
                  </Button>
                </span>
              </div>
            </div>
            <Divider />

            <div className="p-4 flex flex-col gap-4">
              <div className="flex items-start gap-2 text-xs">
                <AlertCircle size={16} className="shrink-0" />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam, atque et expedita modi dolorum deleniti possimus
                doloremque vel, quas, iusto labore consequatur!
              </div>
              <div className="flex items-start gap-2 text-xs">
                <AlertCircle size={16} className="shrink-0" />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam, atque et expedita modi dolorum deleniti possimus
                doloremque vel, quas, iusto labore consequatur!
              </div>
            </div>
          </main>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default Notifications
