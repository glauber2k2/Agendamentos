'use client'

import { FunctionComponent, useContext } from 'react'

import { AlertCircle, AtSign, Calendar, Coins, History } from 'lucide-react'
import PlayerVideo from './components/PlayerVideo'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AuthContext } from '@/contexts/AuthContext'

interface CompanyHomeProps {
  params: { empresa: string }
}

const CompanyHome: FunctionComponent<CompanyHomeProps> = ({ params }) => {
  const { user } = useContext(AuthContext)
  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="dark:bg-system-950 bg-system-200 p-8 md:w-96">
        <span className="flex items-center font-semibold text-2xl tracking-widest gap-2  mb-10">
          <AtSign />
          {params.empresa}
        </span>

        {user ? (
          <div className="flex flex-col gap-2">
            <Link href={`/${params.empresa}/agendar`}>
              <Button variant={'ghost'} className="w-full justify-start">
                <Calendar size={20} />
                Agendar
              </Button>
            </Link>

            <Link href={`/${params.empresa}/historico`}>
              <Button variant={'ghost'} className="w-full justify-start">
                <History size={20} />
                Historico
              </Button>
            </Link>

            <Link href={`/${params.empresa}/carteira`}>
              <Button variant={'ghost'} className="w-full justify-start">
                <Coins size={20} />
                Carteira
              </Button>
            </Link>
          </div>
        ) : (
          <span className="flex items-center gap-2 opacity-70 text-sm select-none">
            <AlertCircle /> Logue para interagir.
          </span>
        )}
      </div>
      <div className="p-8 w-full">
        <PlayerVideo />
      </div>
    </div>
  )
}

export default CompanyHome
