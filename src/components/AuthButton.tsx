'use client'

import { AuthContext } from '@/contexts/AuthContext'
import { FunctionComponent, useContext } from 'react'
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

interface AuthButtonProps {}

const AuthButton: FunctionComponent<AuthButtonProps> = () => {
  const { user, signOut } = useContext(AuthContext)
  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
            <Avatar className="cursor-pointer">
              <AvatarFallback>GB</AvatarFallback>
            </Avatar>
            <span className="hidden sm:block">{user.name}</span>
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
            <DropdownMenuItem className="text-red-500" onClick={signOut}>
              <LogOut size={16} />
              Sair
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
