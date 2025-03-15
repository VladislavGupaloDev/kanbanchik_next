'use client'

import { AuthForm } from '@/feature/AuthForm'
import { LoginInputs } from '@/feature/LoginInputs'
import { Button } from '@/shared/components/ui/button'
import { FormDescription } from '@/shared/ui/form/FormDescription'
import { FormLabel } from '@/shared/ui/form/FormLabel'
import { LoginSchema, loginSchema } from '@/widget/LoginForm/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

export function LoginForm() {
  const methods = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      login: '',
      password: ''
    },
    mode: 'onChange',
    delayError: 1000
  })
  const onSubmit = (data: LoginSchema) => console.log(data)
  return (
    <>
      <FormProvider {...methods}>
        <AuthForm onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={'flex flex-col gap-2 text-center'}>
            <FormLabel>Вход в аккаунт</FormLabel>
            <FormDescription>
              Введите данные в поля дял входа в учётную запись
            </FormDescription>
          </div>
          <LoginInputs />
          <Button type={'submit'}>Submit</Button>
        </AuthForm>
      </FormProvider>
    </>
  )
}
