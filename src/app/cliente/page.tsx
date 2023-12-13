'use client'

import HeaderPage from '@/components/layout/HeaderPage'
import { Home } from 'lucide-react'
import { FunctionComponent, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

interface ClientHomeProps {}

const ClientHome: FunctionComponent<ClientHomeProps> = () => {
  const [hasWindow, setHasWindow] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])
  return (
    <div className='flex flex-col w-full'>
      <HeaderPage
        title='Barbearia Python'
        description='Conheça mais um pouco sobre nós'
        icon={Home}
      />

      <div className='overflow-hidden flex w-full '>
        {hasWindow && (
          <ReactPlayer
            url='https://www.youtube.com/watch?v=kqVjVfAjU4E'
            controls={false}
            playing={true}
            loop
            height={720}
            width={'100%'}
            style={{
              borderRadius: '15px',
              overflow: 'hidden',
            }}
          />
        )}
      </div>
    </div>
  )
}

export default ClientHome
