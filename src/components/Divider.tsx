import { cn } from '@/lib/utils'
import { FunctionComponent, HTMLAttributes } from 'react'

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
}

const Divider: FunctionComponent<DividerProps> = ({ title, ...rest }) => {
  return (
    <div
      className={cn(
        `dark:text-neutral-100 text-neutral-900 flex items-center text-xs w-full truncate`,
        title ? 'gap-4' : '',
        rest.className,
      )}
    >
      <span
        className={`dark:border-neutral-800 border-neutral-300 w-10 border-b`}
      />
      {title}
      <span
        className={`dark:border-neutral-800 border-neutral-300 border-b w-full `}
      />
    </div>
  )
}

export default Divider
