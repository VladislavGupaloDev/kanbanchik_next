import { FormField } from '@/shared/ui/FormField/FormField'
import { PropsWithChildren } from 'react'

export function SettingsField({
  name,
  hint,
  label,
  children
}: { name: string; hint?: string; label?: string } & PropsWithChildren) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormField.Item className='flex w-full max-xl:flex-col max-xl:gap-2'>
          <div className='w-full max-w-50'>
            {label && (
              <FormField.Label className='text-wrap'>{label}</FormField.Label>
            )}
          </div>
          <div className='w-full shrink-1'>
            <FormField.Control
              {...field}
              className='border-accent-foreground'
            >
              {children}
            </FormField.Control>
            <FormField.Message
              hint={hint}
              className='text-wrap'
            />
          </div>
        </FormField.Item>
      )}
    />
  )
}
