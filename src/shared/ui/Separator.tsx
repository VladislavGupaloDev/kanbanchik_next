import { cn } from '../lib/utils/utils'
import { ComponentProps } from 'react'

interface SeparatorProps extends ComponentProps<'div'> {
  orientation?: 'vertical' | 'horizontal'
}
export function Separator({
  className,
  orientation = 'horizontal',
  ...props
}: SeparatorProps) {
  return (
    <div
      data-orientation={orientation}
      className={cn(
        'bg-border shrink-0',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className
      )}
      {...props}
    />
  )
}
