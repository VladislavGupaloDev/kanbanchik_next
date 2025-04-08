import { cn } from '@/shared/lib/utils/utils'
import { ComponentProps } from 'react'

export function Header({
  children,
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div className={cn('text-primary text-3xl font-semibold', className)}>
      {children}
    </div>
  )
}
