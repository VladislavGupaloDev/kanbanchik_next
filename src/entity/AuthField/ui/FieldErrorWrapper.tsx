import { cn } from '@/shared/lib/utils/utils'
import { ComponentProps } from 'react'

export interface FieldErrorWrapperProps {
  errorMsg?: string
  hint?: string
}

export function FieldErrorWrapper({
  errorMsg,
  hint,
  children
}: FieldErrorWrapperProps & ComponentProps<'div'>) {
  return (
    <div
      className={cn(errorMsg ? 'text-red-400' : 'text-muted-foreground w-full')}
    >
      {children}
      {(errorMsg || hint) && (
        <p className={cn('mt-2 h-fit overflow-hidden text-xs')}>
          {errorMsg ?? hint}
        </p>
      )}
    </div>
  )
}
