import * as React from 'react'

import { cn } from '@/lib/utils'
import { CaseSensitive } from 'lucide-react'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="border border-neutral-300 dark:border-neutral-800 rounded-lg py-2 px-4 w-full flex items-start gap-2">
        <CaseSensitive className="text-neutral-500" />
        <textarea
          className={cn(
            'flex min-h-[80px] font-medium w-full rounded-lg border border-input bg-transparent border-none outline-none placeholder:text-neutral-300  resize-none',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
