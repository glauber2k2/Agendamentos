import { FunctionComponent } from 'react'
import AuthButton from '../AuthButton'
import Link from 'next/link'
import { BellDotIcon, Building2 } from 'lucide-react'
import { Button } from '../ui/button'
import Notifications from '../Notifications'

interface TopBarProps {}

const TopBar: FunctionComponent<TopBarProps> = () => {
  return (
    <div className="px-10 py-4 bg-system-200 dark:bg-system-darkness shadow dark:shadow-black shadow-system-500 flex justify-between items-center z-50">
      <Link href={'/feed'}>
        <span className="flex justify-center items-center text-xl font-medium">
          <img
            src="/myLogo.png"
            alt=""
            className="w-16 h-16 invert dark:invert-0"
          />
          <h1 className="hidden md:block">TimeAlign</h1>
        </span>
      </Link>
      <div className="flex items-center gap-10">
        <span className="space-x-4">
          <Link href={'/minhas-empresas'}>
            <Button size={'icon'} variant={'outline'}>
              <Building2 size={18} />
            </Button>
          </Link>
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
