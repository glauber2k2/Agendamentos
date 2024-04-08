'use client'

import { FunctionComponent, ReactNode } from 'react'
import { Button, ButtonProps } from './ui/button'
import { useFormStatus } from 'react-dom'
import { Loader2 } from 'lucide-react'

interface SubmitingButtonProps extends ButtonProps {
  children: ReactNode
}

const SubmitingButton: FunctionComponent<SubmitingButtonProps> = ({
  children,
  ...rest
}) => {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending} {...rest}>
      {pending ? (
        <Loader2 className="animate-spin" size={16} />
      ) : (
        <>{children}</>
      )}
    </Button>
  )
}

export default SubmitingButton
