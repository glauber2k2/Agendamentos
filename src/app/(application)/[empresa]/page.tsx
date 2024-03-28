'use client'

import { FunctionComponent, useContext, useEffect, useState } from 'react'

import { AlertCircle, AtSign, Calendar, Coins, History } from 'lucide-react'
import PlayerVideo from './components/PlayerVideo'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AuthContext } from '@/contexts/AuthContext'
import { restApi } from '../../../../services/api'

interface CompanyHomeProps {
  params: { empresa: string }
}

const CompanyHome: FunctionComponent<CompanyHomeProps> = ({ params }) => {
  const { user } = useContext(AuthContext)
  const [empresa, setEmpresa] = useState({ nome: '', descricao: '' })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    restApi.get(`/company/${params.empresa}`).then((res) => {
      setEmpresa(res.data)
      setLoading(false)
    })
  }, [])
  return (
    <>
      {!loading && (
        <div className="flex flex-col md:flex-row h-full">
          <div className="dark:bg-system-950 bg-system-200 p-8 md:w-96">
            <span className="flex  flex-col mb-10">
              <h1 className="font-semibold text-2xl tracking-widest">
                {empresa.nome}
              </h1>

              <p className="flex items-center gap-1 text-sm opacity-80">
                <AtSign size={14} />
                {params.empresa}
              </p>

              <p className="text-xs mt-4 border-l-2 border-violet-600 pl-2">
                {empresa.descricao}
              </p>
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
      )}
    </>
  )
}

export default CompanyHome
