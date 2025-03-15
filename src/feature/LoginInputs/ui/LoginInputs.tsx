import { FieldErrorProvider } from '@/entity/AuthField'
import { Label } from '@/shared/components/ui/label'
import { cn } from '@/shared/lib/utils'
import { FormField } from '@/shared/ui/form/FormField'
import { PasswordField } from '@/shared/ui/form/FormPasswordField'
import { LoginSchema } from '@/widget/LoginForm/schema'
import { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'

export function LoginInputs(props: ComponentProps<'div'>) {
  const {
    register,
    formState: { errors }
  } = useFormContext<LoginSchema>()
  return (
    <div
      className={cn('flex flex-col gap-3')}
      {...props}
    >
      <Label htmlFor={'login'}>Login</Label>
      <FieldErrorProvider
        errorMsg={errors.login?.message}
        defaultMessage={
          'Данное имя пользователя будет использовано как идентификатор пользователя в публичном доступе'
        }
      >
        <FormField
          id={'login'}
          className={cn(errors.login && 'border-red-400')}
          {...register('login')}
        />
      </FieldErrorProvider>
      <Label htmlFor={'password'}>Password</Label>
      <FieldErrorProvider errorMsg={errors.password?.message}>
        <PasswordField
          id={'password'}
          {...register('password')}
        />
      </FieldErrorProvider>
    </div>
  )
}
