'use client'

import { PasswordRecoverySchema, passwordRecoverySchema } from '../schema'
import { AuthForm } from '@/feature/AuthForm'
import { usePasswordRecovery } from '@/page/PasswordRecovery/lib/stageContext'
import { useResetPasswordMutation } from '@/shared/api/graphql/_generated_/output'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { FormField } from '@/shared/ui/FormField/FormField'
import { FormHeader } from '@/shared/ui/form/FormHeader'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { FormProvider, set, useForm } from 'react-hook-form'

export function PasswordRecoveryForm() {
  const [errorCode, setErrorCode] = useState()
  const { setStage, setEmail } = usePasswordRecovery()
  const form = useForm<PasswordRecoverySchema>({
    resolver: zodResolver(passwordRecoverySchema),
    defaultValues: {
      email: ''
    },
    mode: 'onChange',
    delayError: 1000
  })

  const [resetPassword, { data, error }] = useResetPasswordMutation()
  const onSubmit = async (input: PasswordRecoverySchema) => {
    resetPassword({
      variables: { input },
      onCompleted: ({ resetPassword }) => {
        switch (resetPassword.__typename) {
          case 'ResetPasswordSuccess': {
            form.clearErrors()
            setEmail(input.email)
            setStage('success')
            break
          }
          case 'ResetPasswordError': {
            set
            break
          }
        }
      }
    })
  }

  return (
    <div>
      <FormProvider {...form}>
        <AuthForm onSubmit={form.handleSubmit(onSubmit)}>
          <FormHeader>
            <FormHeader.Label>Восстановление пароля</FormHeader.Label>
            <FormHeader.Sub>
              Введите почту для восстановление пароля
            </FormHeader.Sub>
          </FormHeader>
          <FormField
            name='email'
            render={({ field }) => (
              <FormField.Item>
                <FormField.Label className='mb-3'>Email</FormField.Label>
                <FormField.Control {...field}>
                  <Input />
                </FormField.Control>
                <FormField.Message
                  hint={
                    'Введите почту от аккаунта, чтобы получить письмо о смене пароля!'
                  }
                />
              </FormField.Item>
            )}
          />
          <Button type='submit'>Submit</Button>
        </AuthForm>
      </FormProvider>
    </div>
  )
}
