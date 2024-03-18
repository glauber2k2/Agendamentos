'use client'

import { Sidebar } from '@/components/layout/Sidebar'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useSidebarContext } from '@/contexts/SidebarContext'
import { motion } from 'framer-motion'
import { Calendar, History, Home, Wallet2 } from 'lucide-react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function SidebarCliente({ userData }: { userData: string }) {
  const { sidebarIsOpen } = useSidebarContext()
  const pathname = usePathname()
  const rota = pathname.split('/')[1]

  return (
    <Sidebar.Root>
      <Link href={`/home/${rota}`} className="">
        <Button
          className={`${
            sidebarIsOpen ? 'justify-start gap-4' : 'justify-center'
          } w-full hover:bg-transparent dark:hover:bg-transparent`}
          variant={'ghost'}
        >
          <Avatar>
            <AvatarFallback>BP</AvatarFallback>
          </Avatar>
          <motion.p
            className=" truncate text-lg text-start"
            animate={{
              width: sidebarIsOpen ? '200px' : '0px',
              opacity: sidebarIsOpen ? '1' : '0',
            }}
          >
            {' '}
            Barbearia Python
          </motion.p>
        </Button>
      </Link>

      <span className="w-full h-0.5 bg-black/10 dark:bg-white/10 my-4" />

      <Sidebar.Tile icon={Home} to={`/${rota}/home`}>
        Home
      </Sidebar.Tile>
      <Sidebar.Tile icon={Calendar} to={`/${rota}/agendar`}>
        Agendar
      </Sidebar.Tile>
      <Sidebar.Tile icon={History} to={`/${rota}/historico`}>
        Historico
      </Sidebar.Tile>
      <Sidebar.Tile icon={Wallet2} to={`/${rota}/carteira`}>
        Carteira
      </Sidebar.Tile>

      <span className="w-full h-0.5 bg-black/10 dark:bg-white/10  mt-auto" />

      <div
        className={`${
          sidebarIsOpen ? 'justify-between gap-4' : 'justify-center'
        } w-full flex items-center px-2`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarFallback>
                {userData.name
                  .toUpperCase()
                  .split(' ')
                  .map((word: string) => word.charAt(0))
                  .join('')}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => signOut()}
              className="cursor-pointer"
            >
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <motion.span
          className="text-start max-w-full flex flex-col w-0 opacity-0"
          animate={{
            width: sidebarIsOpen ? '200px' : '0px',
            opacity: sidebarIsOpen ? '1' : '0',
          }}
        >
          <p className="truncate max-w-2xl capitalize">{userData.name}</p>
          <p className="text-xs opacity-70 font-light">@{userData.username}</p>
        </motion.span>
      </div>
    </Sidebar.Root>
  )
}

export default SidebarCliente
