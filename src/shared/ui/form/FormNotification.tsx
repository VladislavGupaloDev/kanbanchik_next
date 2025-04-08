import { cn } from '@/shared/lib/utils/utils'
import { CheckCircle2Icon, ShieldAlertIcon, XCircleIcon } from 'lucide-react'
import { ComponentProps, ReactNode } from 'react'

export type NotificationContent = Partial<
  Record<string | 'DEFAULT', FormNotificationProps>
>
const FORM_NOTIFICATION_ICONS = {
  WARNING: (
    <ShieldAlertIcon
      size={35}
      className='shrink-0 stroke-amber-300'
    />
  ),
  ERROR: (
    <XCircleIcon
      size={35}
      className='stroke-destructive shrink-0'
    />
  ),
  PASS: (
    <CheckCircle2Icon
      size={35}
      className='shrink-0 stroke-green-500'
    />
  )
} as const
type TypeFormNotificationIcons = keyof typeof FORM_NOTIFICATION_ICONS

export interface FormNotificationProps extends ComponentProps<'div'> {
  icon?: TypeFormNotificationIcons
  header?: string
  description?: string
  children?: ReactNode
}

export function FormNotification({
  icon,
  className,
  header,
  description,
  children
}: FormNotificationProps) {
  const IconComponent = !!icon && FORM_NOTIFICATION_ICONS[icon]
  return (
    <div
      className={cn(
        'bg-secondary border-border-secondary flex w-full gap-2 rounded-sm border-1 border-l-3 p-2',
        className
      )}
    >
      {IconComponent}
      <div className='flex flex-col gap-1'>
        {!!header && <h2 className='text-xm font-bold'>{header}</h2>}
        {!!description && (
          <p className='text-muted-foreground text-sm'>{description}</p>
        )}
        {children}
      </div>
    </div>
  )
}
