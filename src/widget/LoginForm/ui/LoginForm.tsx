'use client'

import { Login2FAInput } from './Login2FAInput'
import { AuthForm } from '@/feature/AuthForm'
import { LoginInputs } from '@/feature/LoginInputs'
import { useLoginMutation } from '@/shared/api/graphql/_generated_/output'
import { Button } from '@/shared/components/ui/button'
import { ErrorCode } from '@/shared/lib/types/ErrorCode'
import { notificationResolve } from '@/shared/lib/utils/notificationResolve'
import { cn } from '@/shared/lib/utils/utils'
import { ROUTES } from '@/shared/routes'
import { FormHeader } from '@/shared/ui/form/FormHeader'
import {
  FormNotification,
  NotificationContent
} from '@/shared/ui/form/FormNotification'
import { LoginSchema, loginSchema } from '@/widget/LoginForm/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

//? Выглядит как параша, хз лучше пересмотреть эту залупу
export function LoginForm() {
  const [errorCode, setErrorCode] = useState<ErrorCode | undefined>()
  const [_2FA, _set2FA] = useState<boolean>(false)
  const router = useRouter()
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      login: '',
      password: '',
      totpToken: undefined
    },
    mode: 'onChange',
    delayError: 1000
  })
  const [login, { error: loginError, data: loginResponse }] = useLoginMutation()
  const onSubmit = async (input: LoginSchema) => {
    await login({
      variables: { input },
      onCompleted: ({ loginUser }) => {
        switch (loginUser.__typename) {
          case 'LoginSuccess': {
            router.push(ROUTES.PRIVATE.DASHBOARD)
            form.clearErrors()
            break
          }
          case 'AdditionalAuthError': {
            setErrorCode(loginUser.error_code)
            break
          }
          //TODO:Переделать под BaseError
          case 'CredentialsError': {
            setErrorCode(loginUser.error_code)
            if (loginUser.error_code === ErrorCode.LOGIN_USERNAME_FAIL) {
              form.setError('login', { type: 'manual' }, { shouldFocus: true })
            }
            if (loginUser.error_code === ErrorCode.LOGIN_PASS_FAIL) {
              form.setError(
                'password',
                { type: 'manual' },
                { shouldFocus: true }
              )
            }
            if (loginUser.error_code === ErrorCode.NEED_2FA_CODE) {
              _set2FA(true)
            }
            break
          }
        }
      }
    })
  }

  const responseType = loginResponse?.loginUser?.__typename

  const errorNotifications: NotificationContent = {
    [ErrorCode.EMAIL_NOT_VERIFIED]: {
      icon: 'WARNING',
      header: 'Ваша почта не подтверждена!',
      description: `На вашу почту ${responseType === 'AdditionalAuthError' && loginResponse?.loginUser.obscured_email} отправленно сообщение с подтверждением учётной записи, оно будет действительно в течени 15 минут!`
    },
    [ErrorCode.LOGIN_USERNAME_FAIL]: {
      icon: 'ERROR',
      header: 'Такого пользователя не существует!',
      description:
        'Пользователя не существет, проверьте правильность ввода данных в полях!'
    },
    [ErrorCode.LOGIN_PASS_FAIL]: {
      icon: 'ERROR',
      header: 'Неверный пароль!',
      description:
        'Проверьте правильность заполненого поля и повторите попытку!',
      children: (
        <p>
          <Link
            href={ROUTES.PUBLIC.PASSWORD_RECOVERY}
            className='text-blue-500 underline-offset-2 hover:text-blue-700 hover:underline'
          >
            Забыли пароль
          </Link>
          ?
        </p>
      )
    },
    DEFAULT: {
      icon: 'ERROR',
      header: 'Непредвиденная ошибка!',
      description:
        'Проверьте правильность заполненого поля и повторите попытку!',
      children: (
        <ul className='text-muted-foreground flex flex-col gap-1 text-sm'>
          <li>
            Сообщение:
            {responseType !== 'LoginSuccess' && loginResponse?.loginUser.error}
          </li>
          <li>
            Код ошибки:
            {responseType !== 'LoginSuccess' &&
              loginResponse?.loginUser.error_code}
          </li>
        </ul>
      )
    }
  }

  const errorNotification = notificationResolve(errorNotifications, errorCode)

  return (
    <>
      <FormProvider {...form}>
        <AuthForm onSubmit={form.handleSubmit(onSubmit)}>
          <FormHeader>
            <FormHeader.Label>Вход в учётную запись</FormHeader.Label>
            <FormHeader.Sub>
              Введите данные для входа в учётную запись!
            </FormHeader.Sub>
          </FormHeader>
          {errorCode && !_2FA && <FormNotification {...errorNotification} />}
          <LoginInputs className={cn('mt-4', _2FA && 'hidden')} />
          {!_2FA && (
            <Link
              href={ROUTES.PUBLIC.PASSWORD_RECOVERY}
              className='text-sm underline-offset-2 hover:underline'
            >
              Проблемы со входом?
            </Link>
          )}
          {_2FA && <Login2FAInput name='totpToken' />}
          <Button
            type={'submit'}
            className='mt-4'
          >
            Submit
          </Button>
        </AuthForm>
      </FormProvider>
    </>
  )
}
