import { cn } from '@/lib/utils'
import { MoreHorizontal } from 'lucide-react'
import Link from 'next/link'
import { FunctionComponent, HtmlHTMLAttributes } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

interface ProfileMenuProps extends HtmlHTMLAttributes<HTMLHtmlElement> {
  userName: string
}

const ProfileMenu: FunctionComponent<ProfileMenuProps> = ({
  userName,
  ...rest
}) => {
  return (
    <div
      className={cn('w-full flex justify-between items-start', rest.className)}
    >
      <div className='w-full flex gap-4 items-center'>
        <Avatar>
          <AvatarImage src='https://github.com/glauber2k2.png' />
          <AvatarFallback>
            {userName
              .split('')
              .filter(
                (letters: string) =>
                  letters === letters.toUpperCase() && letters.trim() !== ''
              )
              .join('')}
          </AvatarFallback>
        </Avatar>
        <div className='text-ellipsis w-3/5 overflow-hidden truncate font-bold flex-col text-sm'>
          Glauber Monteiro
          <p className='text-xs font-light'>@glauber.sm</p>
        </div>
      </div>
      <div className='' />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreHorizontal />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={'/cliente/perfil'}>Perfil</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='text-red-600 hover:text-red-800'>
            <Link href={''}>Sair</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default ProfileMenu
