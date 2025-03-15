'use client'

import { AuthForm } from '@/feature/AuthForm'
import { RegisterInputs } from '@/feature/RegisterInputs'
import { Button } from '@/shared/components/ui/button'
import { FormDescription } from '@/shared/ui/form/FormDescription'
import { FormLabel } from '@/shared/ui/form/FormLabel'
import { RegisterSchema, registerSchema } from '@/widget/RegisterForm/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

export function RegisterForm() {
  const methods = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const onSubmit = (data: RegisterSchema) => console.log(data)

  return (
    <>
      <FormProvider {...methods}>
        <AuthForm onSubmit={methods.handleSubmit(onSubmit)}>
          <div className={'flex flex-col gap-2 text-center'}>
            <FormLabel>Регистрация</FormLabel>
            <FormDescription>
              Введите данные в поля для регистрации вашей учётной записи
            </FormDescription>
          </div>
          <RegisterInputs />
          <Button type={'submit'}>Submit</Button>
        </AuthForm>
      </FormProvider>
    </>
  )
}
