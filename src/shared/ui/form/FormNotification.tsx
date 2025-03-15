import { CheckCircle2Icon, ShieldAlertIcon, XCircleIcon } from 'lucide-react'
import { ComponentProps, ReactNode } from 'react'

const FORM_NOTIFICATION_ICONS = {
  WARNING: (
    <ShieldAlertIcon
      size={35}
      className='stroke-red-500'
    />
  ),
  ERROR: (
    <XCircleIcon
      size={35}
      className='stroke-destructive'
    />
  ),
  PASS: (
    <CheckCircle2Icon
      size={35}
      className='stroke-green-500'
    />
  )
} as const
type TypeFormNotificationIcons = keyof typeof FORM_NOTIFICATION_ICONS

interface FormNotificationProps extends ComponentProps<'div'> {
  icon?: TypeFormNotificationIcons
  header?: string
  description?: string
  extend?: ReactNode
}

export function FormNotification({
  icon,
  header,
  description,
  extend
}: FormNotificationProps) {
  const IconComponent = !!icon && FORM_NOTIFICATION_ICONS[icon]
  return (
    <div className='bg-secondary border-border-secondary flex w-full gap-2 rounded-sm border-1 border-l-3 p-2'>
      {IconComponent}
      <div className='flex flex-col gap-1'>
        {!!header && <h2 className='text-[1rem] font-bold'>{header}!</h2>}
        {!!description && <p>{description}</p>}
        {extend}
      </div>
    </div>
  )
}
