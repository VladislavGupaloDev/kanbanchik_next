import { cn } from '@/shared/lib/utils'
import { ComponentProps } from 'react'

interface AuthFieldProps extends ComponentProps<'div'> {
  errors?: boolean
  errorMsg?: string
}

export function AuthField({
  errors,
  errorMsg,
  className,
  children
}: AuthFieldProps) {
  return (
    <div className={cn('flex flex-col gap-2')}>
      {children}
      {errors.login?.message && (
        <div className={'animate-in fade-in-0 overflow-hidden'}>
          <p className={'text-xs text-red-400'}>{errors.login.message}</p>
        </div>
      )}
    </div>
  )
}
