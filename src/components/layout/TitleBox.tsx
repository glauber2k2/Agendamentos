import { cn } from '@/lib/utils'
import { ElementType, HTMLAttributes } from 'react'

interface TitleBoxProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  icon?: ElementType
}

function TitleBox({ title, icon: Icon, ...rest }: TitleBoxProps) {
  return (
    <div
      {...rest}
      className={cn('flex items-center gap-2 font-medium mb-2', rest.className)}
    >
      {Icon && <Icon className="w-6 h-6" />}
      {title}
    </div>
  )
}

export default TitleBox
