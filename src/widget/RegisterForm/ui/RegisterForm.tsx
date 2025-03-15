'use client'

import { AuthForm } from '@/feature/AuthForm'
import { RegisterInputs } from '@/feature/RegisterInputs'
import { Button } from '@/shared/components/ui/button'
import { ROUTES } from '@/shared/routes'
import { FormDescription } from '@/shared/ui/form/FormDescription'
import { FormLabel } from '@/shared/ui/form/FormLabel'
import { FormNotification } from '@/shared/ui/form/FormNotification'
import { RegisterSchema, registerSchema } from '@/widget/RegisterForm/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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
  const router = useRouter()

  const onSubmit = (data: RegisterSchema) => {}

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
          <FormNotification
            icon={'ERROR'}
            header='Ошибка входа!'
            description='Возможно вы допустили ошибку в данных?'
            extend={
              <p>
                <Link
                  href={ROUTES.PUBLIC.HOME}
                  className='text-blue-500 underline-offset-2 hover:text-blue-700 hover:underline'
                >
                  Забыли пароль
                </Link>
                ?
              </p>
            }
          />
          <RegisterInputs />
          <Button
            type={'submit'}
            disabled={!methods.formState.isDirty}
          >
            Submit
          </Button>
        </AuthForm>
      </FormProvider>
    </>
  )
}
