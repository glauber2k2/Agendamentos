import { FunctionComponent } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from './ui/dropdown-menu'
import { Avatar, AvatarFallback } from './ui/avatar'
import {
  Calendar,
  LogIn,
  LogOut,
  Menu,
  Settings,
  Wallet2Icon,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import { getSession, logout } from '@/lib/session'
import { redirect } from 'next/navigation'

interface AuthButtonProps {}

const AuthButton: FunctionComponent<AuthButtonProps> = async () => {
  const session = await getSession()
  return (
    <>
      {session ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
            <Avatar className="cursor-pointer">
              <AvatarFallback>
                {session.name
                  .toUpperCase()
                  .split(' ')
                  .map((word: string) => word.charAt(0))
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <span className="hidden sm:block">{session.name}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mx-2 min-w-[200px] flex flex-col gap-1">
            <DropdownMenuLabel className="flex items-center gap-2 font-bold">
              <Menu size={18} />
              Menu
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={'/ajustes'}>
              <DropdownMenuItem className="cursor-pointer">
                <Settings size={16} />
                Ajustes
              </DropdownMenuItem>
            </Link>
            <Link href={'/'}>
              <DropdownMenuItem className="cursor-pointer">
                <Wallet2Icon size={16} />
                Carteira
              </DropdownMenuItem>
            </Link>
            <Link href={'/'}>
              <DropdownMenuItem className="cursor-pointer">
                <Calendar size={16} />
                Agenda
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500">
              <form
                action={async () => {
                  'use server'
                  await logout()
                  redirect('/login')
                }}
              >
                <button className="flex items-center gap-2">
                  <LogOut size={16} />
                  Sair
                </button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href={'/login'}>
          <Button variant={'ghost'}>
            <LogIn />
            Entrar
          </Button>
        </Link>
      )}
    </>
  )
}

export default AuthButton
