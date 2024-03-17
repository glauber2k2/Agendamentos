import { Check, Timer, X } from 'lucide-react'
import { FunctionComponent } from 'react'

interface TimelineItemProps {
  title: string
  subtitle: string
  status: 'concluido' | 'aguardando' | 'cancelado'
}

const TimelineItem: FunctionComponent<TimelineItemProps> = ({
  title,
  subtitle,
  status,
}) => {
  return (
    <li className="mb-10 ms-6 group" data-status={status}>
      <span className='absolute flex items-center justify-center w-8 h-8 bg-system-400 group-data-[status="concluido"]:bg-system-800 group-data-[status="cancelado"]:bg-rose-400 rounded-full -start-4 ring-4 ring-system-200 dark:ring-system-700'>
        {status === 'concluido' ? (
          <Check className="w-3.5 h-3.5 text-system-50" />
        ) : status === 'aguardando' ? (
          <Timer className="w-3.5 h-3.5 text-system-50" />
        ) : (
          <X className="w-3.5 h-3.5 text-system-50" />
        )}
      </span>
      <h3 className='font-medium leading-tight group-data-[status="cancelado"]:line-through'>
        {title}
      </h3>
      <p className="text-sm">{subtitle}</p>
    </li>
  )
}

export default TimelineItem
