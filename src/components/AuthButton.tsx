'use client'

import { AuthContext } from '@/contexts/AuthContext'
import { FunctionComponent, useContext } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Avatar, AvatarFallback } from './ui/avatar'
import { LogIn } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

interface AuthButtonProps {}

const AuthButton: FunctionComponent<AuthButtonProps> = () => {
  const { user } = useContext(AuthContext)
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
            <Link href={'/glauber/home'}>
              <DropdownMenuItem className="cursor-pointer">
                Home
              </DropdownMenuItem>
            </Link>
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
