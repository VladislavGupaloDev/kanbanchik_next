import { cn } from '@/shared/lib/utils/utils'
import { ComponentProps } from 'react'

export function AuthForm({
  children,
  className,
  ...props
}: ComponentProps<'form'>) {
  return (
    <form
      className={cn(
        `flex w-[500px] flex-col justify-center gap-2 px-5`,
        className
      )}
      {...props}
    >
      {children}
    </form>
  )
}
