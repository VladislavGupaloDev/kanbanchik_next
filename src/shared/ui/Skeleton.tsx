import { cn } from '../lib/utils/utils'
import { ComponentProps } from 'react'

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'bg-muted-foreground/20 animate-pulse rounded-lg',
        className
      )}
      {...props}
    ></div>
  )
}
