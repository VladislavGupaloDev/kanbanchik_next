import { FieldErrorWrapper } from '@/entity/AuthField'
import { Label } from '@/shared/components/ui/label'
import { cn } from '@/shared/lib/utils/utils'
import { FormField } from '@/shared/ui/form/FormField'
import { PasswordField } from '@/shared/ui/form/FormPasswordField'
import { RegisterSchema } from '@/widget/RegisterForm/schema'
import { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'

interface RegisterInputs extends ComponentProps<'div'> {
  disabled?: boolean
}

export function RegisterInputs({
  disabled = false,
  className,
  ...props
}: RegisterInputs) {
  const {
    register,
    formState: {
      errors: {
        username: usernameError,
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError
      }
    }
  } = useFormContext<RegisterSchema>()

  return (
    <div
      className={cn('flex flex-col gap-3', className)}
      {...props}
    >
      <Label htmlFor={'login'}>Имя пользователя</Label>
      <FieldErrorWrapper
        errorMsg={usernameError?.message}
        hint={
          'Данное имя пользователя будет использовано как идентификатор пользователя в публичном доступе'
        }
      >
        <FormField
          id={'login'}
          placeholder='Имя пользователя'
          error={!!usernameError}
          disabled={disabled}
          {...register('login')}
        />
      </FieldErrorWrapper>
      <Label htmlFor={'email'}>Почта</Label>

      <FieldErrorWrapper
        errorMsg={emailError?.message}
        hint={'Данная почта будет использоваться для верификации аккаунта '}
      >
        <FormField
          id={'email'}
          placeholder='Почта'
          type='email'
          error={!!emailError}
          disabled={disabled}
          {...register('email')}
        />
      </FieldErrorWrapper>
      <Label htmlFor={'password'}>Пароль</Label>

      <FieldErrorWrapper errorMsg={passwordError?.message}>
        <PasswordField
          id={'password'}
          placeholder='••••••••'
          error={!!passwordError}
          disabled={disabled}
          {...register('password')}
        />
      </FieldErrorWrapper>
      <Label htmlFor={'confirmPassword'}>Подтверждение пароля</Label>
      <FieldErrorWrapper errorMsg={confirmPasswordError?.message}>
        <PasswordField
          id={'confirmPassword'}
          placeholder='••••••••'
          error={!!confirmPasswordError}
          disabled={disabled}
          {...register('confirmPassword')}
        />
      </FieldErrorWrapper>
    </div>
  )
}
