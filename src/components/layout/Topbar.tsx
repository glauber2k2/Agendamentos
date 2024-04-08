import { FunctionComponent } from 'react'
import AuthButton from '../AuthButton'
import Link from 'next/link'
import { BellDotIcon, Building2 } from 'lucide-react'
import { Button } from '../ui/button'
import Notifications from '../Notifications'
import { getSession } from '@/lib/session'

interface TopBarProps {}

const TopBar: FunctionComponent<TopBarProps> = async () => {
  const session = await getSession()
  return (
    <div className="p-6 border-b border-neutral-300 dark:border-neutral-800 flex justify-between items-center">
      <Link href={'/feed'}>
        <span className="flex justify-center items-center text-2xl font-medium gap-2">
          <img
            src="/logo.png"
            alt=""
            className="w-10 h-10 invert dark:invert-0"
          />
          <h1 className="hidden md:block">TimeAlign</h1>
        </span>
      </Link>
      <div className="flex items-center gap-10">
        <span className="space-x-4">
          {session && (
            <Link href={'/minhas-empresas'}>
              <Button size={'icon'} variant={'outline'}>
                <Building2 size={18} />
              </Button>
            </Link>
          )}

          <Notifications>
            <Button size={'icon'} variant={'outline'}>
              <BellDotIcon size={18} />
            </Button>
          </Notifications>
        </span>
        <AuthButton />
      </div>
    </div>
  )
}

export default TopBar
