'use client'

import { Button } from '@/components/ui/button'
import { AuthContext } from '@/contexts/AuthContext'
import { useSidebarContext } from '@/contexts/SidebarContext'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ElementType, HtmlHTMLAttributes, ReactNode, useContext } from 'react'

interface SidebarTileProps extends HtmlHTMLAttributes<HTMLHtmlElement> {
  children: ReactNode
  icon: ElementType
  to: string
  needAuth?: boolean
}

function SidebarTile({
  children,
  icon: Icon,
  to,
  needAuth = false,
  ...rest
}: SidebarTileProps) {
  const { sidebarIsOpen } = useSidebarContext()
  const pathname = usePathname()
  const { user } = useContext(AuthContext)

  const print = !needAuth ? true : user ? true : false

  return (
    <>
      {print && (
        <Link href={to} className="">
          <Button
            className={cn(
              `${sidebarIsOpen ? 'gap-4' : ''} 
          ${
            to == pathname
              ? 'bg-violet-600 hover:bg-violet-700 dark:hover:bg-violet-500 text-system-50'
              : ''
          } w-full `,
              rest.className,
            )}
            variant={'ghost'}
          >
            {Icon && <Icon size={24} className="shrink-0" />}
            <motion.p
              className="flex overflow-hidden items-center opacity-0 w-0"
              animate={{
                width: sidebarIsOpen ? '100%' : '0px',
                opacity: sidebarIsOpen ? '1' : '0',
                display: sidebarIsOpen ? 'flex' : 'none',
              }}
            >
              {children}
            </motion.p>
          </Button>
        </Link>
      )}
    </>
  )
}

export default SidebarTile
