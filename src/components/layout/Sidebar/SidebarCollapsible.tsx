'use client'

import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { useSidebarContext } from '@/contexts/SidebarContext'
import { motion } from 'framer-motion'
import { ElementType, FunctionComponent, ReactNode } from 'react'

interface SidebarCollapsibleProps {
  children: ReactNode
  name: string
  icon: ElementType
}

const SidebarCollapsible: FunctionComponent<SidebarCollapsibleProps> = ({
  children,
  name,
  icon: Icon,
}) => {
  const { sidebarIsOpen } = useSidebarContext()

  return (
    <Collapsible
      className={`data-[state=open]:bg-system-500/10 dark:data-[state=open]:bg-system-400/10 rounded-md`}
    >
      <CollapsibleTrigger asChild>
        <Button
          variant={'ghost'}
          className={` ${
            sidebarIsOpen ? 'justify-start gap-4' : 'justify-center'
          } w-full`}
        >
          <Icon size={24} className='shrink-0' />
          <motion.p
            className='flex overflow-hidden'
            animate={{
              width: sidebarIsOpen ? '100%' : '0px',
            }}
          >
            {name}
          </motion.p>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className='px-2 pb-2 pt-2 '>
        {children}
      </CollapsibleContent>
    </Collapsible>
  )
}

export default SidebarCollapsible
