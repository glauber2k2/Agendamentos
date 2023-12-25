'use client'

import { Sidebar } from '@/components/layout/Sidebar'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useSidebarContext } from '@/contexts/SidebarContext'
import { motion } from 'framer-motion'
import { Calendar, History, Home, Wallet2 } from 'lucide-react'
import Link from 'next/link'

function SidebarCliente() {
  const { sidebarIsOpen } = useSidebarContext()

  return (
    <Sidebar.Root>
      <Link href={'/'} className=''>
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
            }}
          >
            {' '}
            Barbearia Python
          </motion.p>
        </Button>
      </Link>

      <span className='w-full h-0.5 bg-black/10 dark:bg-white/10 my-4' />

      <Sidebar.Tile icon={Home} to='/cliente'>
        Home
      </Sidebar.Tile>
      <Sidebar.Tile icon={Calendar} to='/cliente/agendar'>
        Agendar
      </Sidebar.Tile>
      <Sidebar.Tile icon={History} to='/cliente/historico'>
        Historico
      </Sidebar.Tile>
      <Sidebar.Tile icon={Wallet2} to='/cliente/carteira'>
        Carteira
      </Sidebar.Tile>
    </Sidebar.Root>
  )
}

export default SidebarCliente
