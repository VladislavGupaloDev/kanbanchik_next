'use client'

import { NewPasswordSchema, newPasswordSchema } from '../schema'
import { AuthForm } from '@/feature/AuthForm'
import { useNewPasswordMutation } from '@/shared/api/graphql/_generated_/output'
import { Button } from '@/shared/components/ui/button'
import { ErrorCode } from '@/shared/lib/types/ErrorCode'
import { notificationResolve } from '@/shared/lib/utils/notificationResolve'
import { ROUTES } from '@/shared/routes'
import { FormField } from '@/shared/ui/FormField/FormField'
import { FormHeader } from '@/shared/ui/form/FormHeader'
import {
  FormNotification,
  NotificationContent
} from '@/shared/ui/form/FormNotification'
import { PasswordField } from '@/shared/ui/form/FormPasswordField'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

export function NewPasswordForm({ token }: { token: string }) {
  const [errorCode, setErrorCode] = useState<ErrorCode>()
  const router = useRouter()
  const form = useForm<NewPasswordSchema>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: '',
      passwordRepeat: ''
    },
    mode: 'onChange',
    delayError: 1000
  })
  const [newPassword, { data: newPasswordData, loading }] =
    useNewPasswordMutation()
  const newPasswordResponse = newPasswordData?.newPassword
  const newPasswordResponseType = newPasswordResponse?.__typename
  const onSubmit = async (formData: NewPasswordSchema) => {
    await newPassword({
      variables: {
        input: {
          password: formData.password,
          passwordRepeat: formData.passwordRepeat,
          token
        }
      },
      onCompleted: ({ newPassword }) => {
        switch (newPassword.__typename) {
          case 'NewPasswordSuccess':
            router.push(ROUTES.PUBLIC.LOGIN)
            break
          case 'NewPasswordError':
            setErrorCode(newPassword.error_code)
            break
        }
      }
    })
  }
  const errorNotifications: NotificationContent = {
    [ErrorCode.TOKEN_EXPIRED]: {
      icon: 'ERROR',
      header: 'Истек срок жизни запроса!',
      description:
        'Повторите запрос на сброс пароля, чтобы создать нвоый токен!',
      children: (
        <Button asChild>
          <Link href={ROUTES.PUBLIC.PASSWORD_RECOVERY}>Повторить снова</Link>
        </Button>
      )
    },
    [ErrorCode.TOKEN_NOT_VALID]: {
      icon: 'ERROR',
      header: 'Ссылка с запросом не действительна!',
      description:
        'Данного запроса не существует, повторите операцию запроса на сброс пароля!',
      children: (
        <Button asChild>
          <Link href={ROUTES.PUBLIC.PASSWORD_RECOVERY}>Повторить снова</Link>
        </Button>
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
            {newPasswordResponseType !== 'NewPasswordSuccess' &&
              newPasswordResponse?.error}
          </li>
          <li>
            Код ошибки:
            {newPasswordResponseType !== 'NewPasswordSuccess' &&
              newPasswordResponse?.error_code}
          </li>
        </ul>
      )
    }
  }

  const errorNotification = notificationResolve(errorNotifications, errorCode)

  return (
    <FormProvider {...form}>
      <AuthForm onSubmit={form.handleSubmit(onSubmit)}>
        <FormHeader>
          <FormHeader.Label>Назначение нового пароля</FormHeader.Label>
          <FormHeader.Sub>Введите в поля свой новый пароль</FormHeader.Sub>
        </FormHeader>
        {errorCode && <FormNotification {...errorNotification} />}
        <div className='flex flex-col gap-2'>
          <FormField
            name='password'
            render={({ field }) => (
              <FormField.Item>
                <FormField.Label className='mb-3'>Пароль</FormField.Label>
                <FormField.Control {...field}>
                  <PasswordField />
                </FormField.Control>
                <FormField.Message hint='Введите новый пароль' />
              </FormField.Item>
            )}
          />
          <FormField
            name='passwordRepeat'
            render={({ field }) => (
              <FormField.Item>
                <FormField.Label className='mb-3'>
                  Подтвердите пароль
                </FormField.Label>
                <FormField.Control {...field}>
                  <PasswordField />
                </FormField.Control>
                <FormField.Message hint='Повторите пароль' />
              </FormField.Item>
            )}
          />
        </div>
        // TODO: Сделать FormButton с loading | success | error пропсами
        <Button
          type='submit'
          className='mt-4'
          disabled={!form.formState.isValid || loading}
        >
          Подтвердить
        </Button>
      </AuthForm>
    </FormProvider>
  )
}
