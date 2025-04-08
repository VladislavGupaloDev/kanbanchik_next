import { cn } from '@/shared/lib/utils/utils'
import { Slot } from '@radix-ui/react-slot'
import { ComponentProps } from 'react'

interface ScrollAreaProps extends ComponentProps<'div'> {
  orientation?: 'horizontal' | 'vertical'
  asChild?: boolean
}

export function ScrollArea({
  orientation = 'horizontal',
  className,
  asChild = false,
  ...props
}: ScrollAreaProps) {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      data-slot='scrollable-area'
      className={cn(
        'max-h-full w-full truncate',
        orientation === 'horizontal'
          ? 'overflow-x-auto overflow-y-hidden'
          : 'overflow-x-hidden overflow-y-auto',
        className
      )}
      {...props}
    />
  )
}
