import { Input } from '@/shared/components/ui/input'
import { cn } from '@/shared/lib/utils'
import { ComponentProps } from 'react'

export function FormField({ className, ...props }: ComponentProps<'input'>) {
  return (
    <Input
      className={cn('w-full', className)}
      {...props}
    />
  )
}
