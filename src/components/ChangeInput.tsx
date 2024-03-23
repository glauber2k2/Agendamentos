import { cn } from '@/lib/utils'
import { FunctionComponent, InputHTMLAttributes } from 'react'

interface ChangeInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isEditable: boolean
}

const ChangeInput: FunctionComponent<ChangeInputProps> = ({
  isEditable = false,
  ...props
}) => {
  const editable = isEditable ? 'animate-pulse' : ''
  return (
    <input
      className={cn('outline-none bg-transparent ', props.className, editable)}
      {...props}
      disabled={!isEditable}
    />
  )
}

export default ChangeInput
