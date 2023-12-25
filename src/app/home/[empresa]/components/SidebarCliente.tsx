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
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function SidebarCliente() {
  const { sidebarIsOpen } = useSidebarContext()
  const pathname = usePathname()
  const rota = pathname.split('/')[2]

  return (
    <Sidebar.Root>
      <Link href={`/home/${rota}`} className=''>
        <Button
          className={`${
            sidebarIsOpen ? 'justify-start gap-4' : 'justify-center'
          } w-full`}
        >
          <Avatar>
            <AvatarFallback>BP</AvatarFallback>
          </Avatar>
          <motion.p
            className=' truncate text-lg text-start'
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

      <span className='w-full h-0.5 bg-black/10 dark:bg-white/10 my-4' />

      <Sidebar.Tile icon={Home} to={`/home/${rota}`}>
        Home
      </Sidebar.Tile>
      <Sidebar.Tile icon={Calendar} to={`/home/${rota}/agendar`}>
        Agendar
      </Sidebar.Tile>
      <Sidebar.Tile icon={History} to={`/home/${rota}/historico`}>
        Historico
      </Sidebar.Tile>
      <Sidebar.Tile icon={Wallet2} to={`/home/${rota}/carteira`}>
        Carteira
      </Sidebar.Tile>

      <span className='w-full h-0.5 bg-black/10 dark:bg-white/10  mt-auto' />

      <div
        className={`${
          sidebarIsOpen ? 'justify-between gap-4' : 'justify-center'
        } w-full flex items-center px-2`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarFallback>GM</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem>Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <motion.span
          className='text-start max-w-full flex flex-col'
          animate={{
            width: sidebarIsOpen ? '200px' : '0px',
            opacity: sidebarIsOpen ? '1' : '0',
          }}
        >
          <p className='truncate max-w-2xl'>Glauber Monteiro</p>
          <p className='text-xs opacity-70 font-light'>@glaubersm</p>
        </motion.span>
      </div>
    </Sidebar.Root>
  )
}

export default SidebarCliente
