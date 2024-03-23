import * as React from 'react'

import { cn } from '@/lib/utils'
import { Asterisk, AtSign, Binary, CaseSensitive, File } from 'lucide-react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hasIcon?: boolean
  icon?: React.ElementType
  beforeElement?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      icon: Icon = type === 'number'
        ? Binary
        : type === 'email'
          ? AtSign
          : type === 'password'
            ? Asterisk
            : type === 'file'
              ? File
              : CaseSensitive,
      hasIcon = true,
      beforeElement,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(
          'bg-system-50 dark:bg-system-950  rounded-lg py-2 px-4 w-full flex items-center gap-2',
          className,
        )}
      >
        {hasIcon && <Icon className="text-system-500" />}
        <input
          style={{
            WebkitBoxShadow: '0 0 0px 1000px #00000000 inset',
            WebkitTextFillColor: '#828282',
            transition: 'background-color 5000s ease-in-out 0s',
          }}
          type={type}
          className="bg-transparent w-full outline-none placeholder:text-system-300 text-system-800 dark:text-system-50 font-medium"
          ref={ref}
          {...props}
        />
        {beforeElement}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
