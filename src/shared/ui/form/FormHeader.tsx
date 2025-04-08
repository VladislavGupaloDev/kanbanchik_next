import { cn } from '@/shared/lib/utils/utils'

export function FormHeader({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('mb-2 flex flex-col gap-2 text-center', className)}
      {...props}
    >
      {children}
    </div>
  )
}

function FormHeaderLabel({
  children,
  className,
  ...props
}: React.ComponentProps<'h1'>) {
  return (
    <h1
      className={cn(
        'text-primary text-3xl font-semibold text-wrap md:text-2xl',
        className
      )}
    >
      {children}
    </h1>
  )
}

function FormHeaderSub({
  children,
  className,
  ...props
}: React.ComponentProps<'h2'>) {
  return (
    <h2
      className={cn(
        'text-primary/60 text-base font-light text-wrap md:text-sm',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

FormHeader.Label = FormHeaderLabel
FormHeader.Sub = FormHeaderSub
