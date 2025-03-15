import { Label } from '@/shared/components/ui/label'
import { cn } from '@/shared/lib/utils'
import { FormField } from '@/shared/ui/form/FormField'
import { PasswordField } from '@/shared/ui/form/FormPasswordField'
import { RegisterSchema } from '@/widget/RegisterForm/schema'
import { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'

export function RegisterInputs(props: ComponentProps<'div'>) {
  const { register } = useFormContext<RegisterSchema>()
  return (
    <div
      className={cn('flex flex-col gap-3')}
      {...props}
    >
      <div className={cn('flex flex-col gap-2')}>
        <Label htmlFor={'username'}>Username</Label>
        <FormField
          id={'username'}
          {...register('username')}
        />
      </div>
      <div className={cn('flex flex-col gap-2')}>
        <Label htmlFor={'email'}>Email</Label>
        <FormField
          id={'email'}
          {...register('email')}
        />
      </div>
      <div className={cn('flex flex-col gap-2')}>
        <Label htmlFor={'password'}>Password</Label>
        <PasswordField
          id={'password'}
          {...register('password')}
        />
      </div>
      <div className={cn('flex flex-col gap-2')}>
        <Label htmlFor={'confirm-password'}>Confirm password</Label>
        <PasswordField
          id={'confirm-password'}
          {...register('confirmPassword')}
        />
      </div>
    </div>
  )
}
