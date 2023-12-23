'use client'

import { motion } from 'framer-motion'
import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Coins,
  Home,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible'
import ProfileMenu from './ProfileMenu'

function Sidebar() {
  const companyName = 'Barbearia Python'
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true)

  return (
    <div className={`fixed z-50 items-start flex`}>
      <motion.nav
        animate={{
          width: sidebarIsOpen ? '100%' : '30%',
        }}
        data-sidebar={sidebarIsOpen}
        className={`data-[sidebar=false]: dark:bg-system-darkness  dark:text-system-50 xl:static xl:col-span-2 h-screen sm:flex flex-col py-8 gap-4 hidden shadow-sm px-4 bg-system-100 text-system-600`}
      >
        <div className='flex items-center gap-4 '>
          <Avatar>
            <AvatarImage src='https://i.pinimg.com/originals/3a/17/e3/3a17e34d0f2019f8f1d45c5158f3a33a.jpg' />
            <AvatarFallback>
              {companyName
                .split('')
                .filter(
                  (letters: string) =>
                    letters === letters.toUpperCase() && letters.trim() !== ''
                )
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div className='flex flex-col'>
            <h1
              className={`${
                sidebarIsOpen ? 'block' : 'hidden'
              } font-extrabold text-xl overflow-hidden truncate text-ellipsis capitalize`}
            >
              {companyName}
            </h1>
            <p
              className={`${
                sidebarIsOpen ? 'block' : 'hidden'
              } font-light text-xs`}
            >
              #1318EJDWA
            </p>
          </div>
        </div>
        <span className='h-[1px] w-full flex dark:bg-system-800 bg-system-200/80' />

        <div className='flex flex-col gap-2'>
          <Link href={'/cliente'} className='w-full'>
            <Button variant={'ghost'} className=' w-full justify-start gap-4'>
              <Home size={24} className='shrink-0' />
              <p className={sidebarIsOpen ? 'block' : 'hidden'}>Home</p>
            </Button>
          </Link>
          <Collapsible className='data-[state=open]:bg-system-500/10 dark:data-[state=open]:bg-system-400/10 rounded-md '>
            <CollapsibleTrigger asChild>
              <Button
                variant={'ghost'}
                className=' group w-full justify-between'
              >
                <div className='flex gap-4 items-center'>
                  <Calendar size={24} className='shrink-0' />
                  <p className={sidebarIsOpen ? 'block' : 'hidden'}>
                    Agendamentos
                  </p>
                </div>
                <ChevronDown className='hidden group-hover:flex' />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className='px-2 pb-2 pt-2 '>
              <Button
                className='justify-start w-full gap-4'
                variant={'ghost'}
                asChild
              >
                <Link href={'/cliente/agendar'}>Agendar</Link>
              </Button>
              <Button
                className='justify-start w-full gap-4'
                variant={'ghost'}
                asChild
              >
                <Link href={'/cliente/historico'}>Histórico</Link>
              </Button>
            </CollapsibleContent>
          </Collapsible>
          <Link href={'/cliente/carteira'} className='w-full'>
            <Button variant={'ghost'} className=' w-full justify-start gap-4'>
              <Coins size={24} className='shrink-0' />
              <p className={sidebarIsOpen ? 'block' : 'hidden'}>Meus pontos</p>
            </Button>
          </Link>
        </div>

        <span className='h-[1px] w-full flex bg-system-200/80 dark:bg-system-800 mt-auto' />
        <ProfileMenu userName='Glauber Monteiro' />
      </motion.nav>
      <button
        className='cursor-pointer mt-4 ml-2'
        onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
      >
        {sidebarIsOpen ? <ChevronLeft /> : <ChevronRight />}
      </button>
    </div>
  )
}

export default Sidebar
