import { Input } from '@/shared/components/ui/input'
import { cn } from '@/shared/lib/utils/utils'
import { FormField } from '@/shared/ui/FormField/FormField'
import { PasswordField } from '@/shared/ui/form/FormPasswordField'
import { LoginSchema } from '@/widget/LoginForm/schema'
import { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'

//? Возможно стоит вынести как обертку? И убрать декомпозицию инпутов?
export function LoginInputs({ className, ...props }: ComponentProps<'div'>) {
  const {
    formState: { errors }
  } = useFormContext<LoginSchema>()
  return (
    <div
      className={cn('flex flex-col gap-3', className)}
      {...props}
    >
      <FormField
        name='login'
        render={({ field }) => (
          <FormField.Item>
            <FormField.Label className='mb-3'>Login</FormField.Label>
            <FormField.Control>
              <Input
                placeholder='Login'
                {...field}
              />
            </FormField.Control>
            <FormField.Message hint='Введите почту или логин!' />
          </FormField.Item>
        )}
      />
      <FormField
        name='password'
        render={({ field }) => (
          <FormField.Item>
            <FormField.Label className='mb-3'>Password</FormField.Label>
            <FormField.Control>
              <PasswordField
                placeholder='••••••••'
                {...field}
              />
            </FormField.Control>
            <FormField.Message />
          </FormField.Item>
        )}
      />
    </div>
  )
}
// placeholder='••••••••'
