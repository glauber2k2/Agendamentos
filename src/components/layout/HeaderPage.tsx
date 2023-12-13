import { ElementType, FunctionComponent, ReactNode } from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

interface HeaderPageProps {
  icon?: ElementType
  title: string
  description: string
  children?: ReactNode
}

const HeaderPage: FunctionComponent<HeaderPageProps> = ({
  icon: Icon,
  title,
  description,
  children,
}) => {
  return (
    <div className='flex w-full flex-col gap-8 mb-8'>
      <Card className='p-4 flex justify-between'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            {Icon && <Icon />}
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <div className='flex items-center p-4'>{children}</div>
      </Card>
    </div>
  )
}

export default HeaderPage
