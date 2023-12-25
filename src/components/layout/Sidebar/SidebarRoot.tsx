'use client'

import { Button } from '@/components/ui/button'
import { useSidebarContext } from '@/contexts/SidebarContext'
import { motion } from 'framer-motion'
import { SidebarClose, SidebarOpen } from 'lucide-react'
import { ReactNode } from 'react'

interface ThemeContextProps {
  children: ReactNode
}

function Sidebar({ children }: ThemeContextProps) {
  const { sidebarIsOpen, setSidebarIsOpen } = useSidebarContext()

  return (
    <motion.nav
      animate={{
        width: sidebarIsOpen ? '300px' : '100px',
      }}
      data-sidebar={sidebarIsOpen}
      className={`fixed z-50 dark:bg-system-darkness dark:text-system-50 h-screen flex flex-col p-4 gap-4 shadow-xl shadow-black px-4 bg-system-100 text-system-600 `}
    >
      <Button
        className={` ${sidebarIsOpen ? 'ml-auto' : 'mx-auto'} mb-4`}
        onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
      >
        {sidebarIsOpen ? <SidebarClose /> : <SidebarOpen />}
      </Button>
      {children}
    </motion.nav>
  )
}

export default Sidebar
