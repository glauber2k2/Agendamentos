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
import { Calendar, LogIn, LogOut, User2, Wallet2Icon } from 'lucide-react'
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
          <DropdownMenuContent>
            <DropdownMenuLabel>Opções</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={'/minha-conta'}>
              <DropdownMenuItem className="cursor-pointer">
                <User2 size={16} />
                Perfil
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
                  redirect('/')
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
