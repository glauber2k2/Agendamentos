import { HistoryIcon } from 'lucide-react'
import { FunctionComponent, ReactNode } from 'react'

interface TimelineRootProps {
  children: ReactNode
}

const TimelineRoot: FunctionComponent<TimelineRootProps> = ({ children }) => {
  return (
    <div className="relative">
      <ol className="relative text-neutral-500 border-s-2 border-dashed border-neutral-200 dark:border-neutral-600">
        {children}
        <li className="mb-10 ms-6">
          <span className="absolute flex -bottom-1 items-center justify-center w-8 h-8 bg-neutral-800 rounded-full -start-4 ring-4 ring-neutral-200 dark:ring-neutral-700 ">
            <HistoryIcon className="w-3.5 h-3.5 text-neutral-50" />
          </span>
          <div className="font-medium leading-tight h-7" />
        </li>
      </ol>
    </div>
  )
}

export default TimelineRoot
