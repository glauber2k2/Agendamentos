import HeaderPage from '@/components/layout/HeaderPage'
import { Timeline } from '@/components/layout/Timeline'
import TitleBox from '@/components/layout/TitleBox'
import { History } from 'lucide-react'

function Historico() {
  return (
    <div className='flex w-full flex-col'>
      <HeaderPage
        icon={History}
        title='Historico agendamento'
        description='Acompanhe por aqui todo seu historico de agendamentos.'
      />
      <TitleBox title='Historico de agendamentos:' icon={History} />
      <div className='flex pl-4 mt-4'>
        <Timeline.Root>
          <Timeline.Item
            title='Corte e Barba'
            subtitle='04/10/23 - 18:30'
            status='aguardando'
          />
          <Timeline.Item
            title='Corte'
            subtitle='04/10/23 - 18:30'
            status='concluido'
          />
          <Timeline.Item
            title='Hidratação'
            subtitle='04/10/23 - 18:30'
            status='cancelado'
          />
          <Timeline.Item
            title='Corte'
            subtitle='04/10/23 - 18:30'
            status='concluido'
          />
        </Timeline.Root>
      </div>
    </div>
  )
}

export default Historico
