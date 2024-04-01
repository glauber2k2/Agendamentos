import { cn } from '@/lib/utils'
import { FunctionComponent, HTMLAttributes } from 'react'

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
}

const Divider: FunctionComponent<DividerProps> = ({ title, ...rest }) => {
  return (
    <div
      className={cn(
        `text-white flex items-center  w-full truncate`,
        title ? 'gap-4' : '',
        rest.className,
      )}
    >
      <span className={`dark:bg-system-900 bg-system-300 w-full h-0.5`} />
      {title}
      <span className={`dark:bg-system-900 bg-system-300 w-full h-0.5`} />
    </div>
  )
}

export default Divider
