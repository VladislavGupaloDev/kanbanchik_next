import { cn } from '@/shared/lib/utils/utils'
import { FormHeader } from '@/shared/ui/form/FormHeader'
import { ComponentProps } from 'react'

function SettingsForm({ className, ...props }: ComponentProps<'form'>) {
  return (
    <form
      className={cn(
        'border-border flex w-full flex-col rounded-md border-2',
        className
      )}
      {...props}
    />
  )
}

function SettingsFormSection({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex flex-col gap-4 p-6', className)}
      {...props}
    />
  )
}

function SettingsFormHeader({
  className,
  label,
  sub,
  ...props
}: ComponentProps<typeof FormHeader> & { label?: string; sub?: string }) {
  return (
    <FormHeader
      className={cn('text-start', className)}
      {...props}
    >
      {label && <FormHeader.Label>{label}</FormHeader.Label>}
      {sub && <FormHeader.Sub>{sub}</FormHeader.Sub>}
    </FormHeader>
  )
}

function SettingsFormFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'bg-secondary flex h-15 w-full items-center justify-end p-2',
        className
      )}
      {...props}
    />
  )
}

SettingsForm.Header = SettingsFormHeader
SettingsForm.Footer = SettingsFormFooter
SettingsForm.Section = SettingsFormSection

export { SettingsForm }
