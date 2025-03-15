import { cn } from '@/shared/lib/utils'
import { ComponentProps } from 'react'

interface AuthFieldProps extends ComponentProps<'div'> {
  errorMsg?: string
  defaultMessage?: string
}

export function FieldErrorProvider({
  errorMsg,
  defaultMessage,
  className,
  children
}: AuthFieldProps) {
  return (
    <div className={cn('', className)}>
      {children}
      {(errorMsg || defaultMessage) && (
        <p
          className={cn(
            'animate-in fade-in-0 text-primary mt-2 h-fit overflow-hidden text-xs',
            errorMsg && 'text-red-400'
          )}
        >
          {errorMsg ?? defaultMessage}
        </p>
      )}
    </div>
  )
}
