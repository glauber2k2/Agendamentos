import { cn } from '@/lib/utils'
import { FunctionComponent, HtmlHTMLAttributes, ReactNode } from 'react'

interface TitleProps extends HtmlHTMLAttributes<HTMLHtmlElement> {
  children: ReactNode
}

const Title: FunctionComponent<TitleProps> = ({ children, ...rest }) => {
  return (
    <h1 className={cn('text-3xl font-medium', rest.className)}>{children}</h1>
  )
}

export default Title
