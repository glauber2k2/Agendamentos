import HeaderPage from '@/components/layout/HeaderPage'
import TitleBox from '@/components/layout/TitleBox'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Coins, CoinsIcon, History } from 'lucide-react'
import { FunctionComponent } from 'react'

interface PontosProps {}

const Pontos: FunctionComponent<PontosProps> = () => {
  const saldo = 123

  return (
    <div className='flex flex-col w-full'>
      <HeaderPage
        title='Minha carteira'
        description='Acompanhe por aqui seus pontos de fidelidades obtidos.'
        icon={Coins}
      >
        <div className='flex items-center gap-2'>
          <Coins size={16} />
          {saldo}
        </div>
      </HeaderPage>
      <TitleBox title='Extrato de pontos:' icon={History} />

      <div className='flex flex-col gap-2'>
        <Alert className='flex items-center justify-between'>
          <div className='flex gap-2'>
            <History className='h-4 w-4' />
            <span>
              <AlertTitle>Corte Cabelo</AlertTitle>
              <AlertDescription>Realizado 12/12/2023</AlertDescription>
            </span>
          </div>
          <div className='flex items-center gap-2 text-emerald-500'>
            <CoinsIcon size={14} />
            100
          </div>
        </Alert>

        <Alert className='flex items-center justify-between'>
          <div className='flex gap-2'>
            <History className='h-4 w-4' />
            <span>
              <AlertTitle>Corte Grátis</AlertTitle>
              <AlertDescription>Realizado 12/12/2023</AlertDescription>
            </span>
          </div>
          <div className='flex items-center gap-2 text-rose-500'>
            <CoinsIcon size={14} />
            450
          </div>
        </Alert>

        <Alert className='flex items-center justify-between'>
          <div className='flex gap-2'>
            <History className='h-4 w-4' />
            <span>
              <AlertTitle className='line-through'>Cabelo e Barba</AlertTitle>
              <AlertDescription>Cancelado</AlertDescription>
            </span>
          </div>
          <div className='flex items-center gap-2 text-zinc-400'>
            <CoinsIcon size={14} />0
          </div>
        </Alert>
      </div>
    </div>
  )
}

export default Pontos
