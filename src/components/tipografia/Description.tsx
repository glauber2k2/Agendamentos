import { cn } from '@/lib/utils'
import { FunctionComponent, HtmlHTMLAttributes, ReactNode } from 'react'

interface DescriptionProps extends HtmlHTMLAttributes<HTMLHtmlElement> {
  children: ReactNode
}

const Description: FunctionComponent<DescriptionProps> = ({
  children,
  ...rest
}) => {
  return <h1 className={cn('text-xs', rest.className)}>{children}</h1>
}

export default Description
