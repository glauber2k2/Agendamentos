import { HistoryIcon } from 'lucide-react'
import { FunctionComponent, ReactNode } from 'react'

interface TimelineRootProps {
  children: ReactNode
}

const TimelineRoot: FunctionComponent<TimelineRootProps> = ({ children }) => {
  return (
    <div className="relative">
      <ol className="relative text-system-500 border-s-2 border-dashed border-system-200 dark:border-system-600">
        {children}
        <li className="mb-10 ms-6">
          <span className="absolute flex -bottom-1 items-center justify-center w-8 h-8 bg-system-800 rounded-full -start-4 ring-4 ring-system-200 dark:ring-system-700 ">
            <HistoryIcon className="w-3.5 h-3.5 text-system-50" />
          </span>
          <div className="font-medium leading-tight h-7" />
        </li>
      </ol>
    </div>
  )
}

export default TimelineRoot
