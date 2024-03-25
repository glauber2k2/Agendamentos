import { Timeline } from '@/components/Timeline'

function Historico() {
  return (
    <div className="flex w-full flex-col p-8">
      <div className="flex pl-4 mt-4">
        <Timeline.Root>
          <Timeline.Item
            title="Corte e Barba"
            subtitle="04/10/23 - 18:30"
            status="aguardando"
          />
          <Timeline.Item
            title="Corte"
            subtitle="04/10/23 - 18:30"
            status="concluido"
          />
          <Timeline.Item
            title="Hidratação"
            subtitle="04/10/23 - 18:30"
            status="cancelado"
          />
          <Timeline.Item
            title="Corte"
            subtitle="04/10/23 - 18:30"
            status="concluido"
          />
        </Timeline.Root>
      </div>
    </div>
  )
}

export default Historico
