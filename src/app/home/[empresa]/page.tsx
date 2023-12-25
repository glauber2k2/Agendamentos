'use client'

import HeaderPage from '@/components/layout/HeaderPage'
import { Home } from 'lucide-react'
import { FunctionComponent, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

interface ClientHomeProps {
  params: { empresa: string }
}

const ClientHome: FunctionComponent<ClientHomeProps> = ({ params }) => {
  const [hasWindow, setHasWindow] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])

  return (
    <div className='flex flex-col w-full'>
      <HeaderPage
        title={params.empresa}
        description='Conheça mais um pouco sobre nós'
        icon={Home}
      />

      <div className='overflow-hidden flex w-full rounded-2xl'>
        {hasWindow && (
          <ReactPlayer
            url='https://www.youtube.com/watch?v=kqVjVfAjU4E'
            controls={false}
            playing={true}
            loop
            height={720}
            width={'100%'}
          />
        )}
      </div>
    </div>
  )
}

export default ClientHome
