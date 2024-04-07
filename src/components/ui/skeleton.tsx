import { cn } from '@/lib/utils'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md dark:bg-neutral-900 bg-neutral-200',
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }
