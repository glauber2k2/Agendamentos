'use client'

import { BellDot } from 'lucide-react'
import { FunctionComponent } from 'react'
import { Tipografia } from '../tipografia'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Button } from '../ui/button'

interface UserSidebarProps {}

const UserSidebar: FunctionComponent<UserSidebarProps> = () => {
  return (
    <div className='p-12 bg-system-950 shadow-lg shadow-system-darkness rounded-s-3xl flex flex-col items-center relative'>
      <span className='mb-10'>
        <Tipografia.Title>Status</Tipografia.Title>
        <Tipografia.Description>
          confira nessa tela de status rapida
        </Tipografia.Description>
      </span>
      <Avatar className='h-40 w-40 text-6xl mb-8'>
        <AvatarFallback>GB</AvatarFallback>
      </Avatar>
      <Button className='absolute top-8 right-8 rounded-full'>
        <BellDot />
      </Button>
    </div>
  )
}

export default UserSidebar
