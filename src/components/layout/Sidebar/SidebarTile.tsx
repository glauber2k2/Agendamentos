'use client'

import { Button } from '@/components/ui/button'
import { useSidebarContext } from '@/contexts/SidebarContext'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ElementType, HtmlHTMLAttributes, ReactNode } from 'react'

interface SidebarTileProps extends HtmlHTMLAttributes<HTMLHtmlElement> {
  children: ReactNode
  icon: ElementType
  to: string
}

function SidebarTile({ children, icon: Icon, to, ...rest }: SidebarTileProps) {
  const { sidebarIsOpen } = useSidebarContext()
  const pathname = usePathname()

  return (
    <Link href={to} className=''>
      <Button
        className={cn(
          `${sidebarIsOpen ? 'justify-start gap-4' : 'justify-center'} 
          ${
            to == pathname
              ? 'bg-violet-600 hover:bg-violet-700 dark:hover:bg-violet-500 text-system-50'
              : ''
          } w-full `,
          rest.className
        )}
        variant={'ghost'}
      >
        {Icon && <Icon size={24} className='shrink-0' />}
        <motion.p
          className='flex overflow-hidden items-center opacity-0'
          animate={{
            width: sidebarIsOpen ? '100%' : '0px',
            opacity: sidebarIsOpen ? '1' : '0',
          }}
        >
          {children}
        </motion.p>
      </Button>
    </Link>
  )
}

export default SidebarTile
