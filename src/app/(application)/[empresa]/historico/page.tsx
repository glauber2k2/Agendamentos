import { Timeline } from '@/components/Timeline'
import { Card } from '@/components/ui/card'

function Historico() {
  return (
    <div className="p-4 md:p-10">
      <Card className="flex w-full flex-col md:p-10">
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
      </Card>
    </div>
  )
}

export default Historico
