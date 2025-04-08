import { cn } from '@/shared/lib/utils/utils'
import { ComponentProps } from 'react'

export function SubHeader({
  children,
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div className={cn('text-primary/60 text-sm font-light', className)}>
      {children}
    </div>
  )
}
