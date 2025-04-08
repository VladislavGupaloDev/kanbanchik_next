'use client'

import { AuthForm } from '@/feature/AuthForm'
import { RegisterInputs } from '@/feature/RegisterInputs'
import { useRegisterUserMutation } from '@/shared/api/graphql/_generated_/output'
import { Button } from '@/shared/components/ui/button'
import { ROUTES } from '@/shared/routes'
import { FormHeader } from '@/shared/ui/form/FormHeader'
import { FormNotification } from '@/shared/ui/form/FormNotification'
import { RegisterSchema, registerSchema } from '@/widget/RegisterForm/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'

// TODO: Обдумать моментик с проверкой на почту и на имя

export function RegisterForm() {
  const methods = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      login: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    mode: 'onChange',
    delayError: 1000
  })
  const [
    createUser,
    { error: creaeteUserError, loading, data: createUserResponse }
  ] = useRegisterUserMutation()
  const router = useRouter()

  const onSubmit = (data: RegisterSchema) => {
    const { confirmPassword, ...sendData } = data
    createUser({
      variables: {
        input: sendData
      }
    })
  }

  const responseOK = !!createUserResponse?.createUser
  console.log(responseOK)
  return (
    <>
      <FormProvider {...methods}>
        <AuthForm onSubmit={methods.handleSubmit(onSubmit)}>
          <FormHeader
            header='Регистрация'
            subHeader='Введите данные в поля для регистрации вашей учётной записи'
          />
          {creaeteUserError && (
            <FormNotification
              icon={'WARNING'}
              header='Ошибка созданяи учётной записи!'
              description={creaeteUserError.message}
              className='animate-expand animate-in fade-in-0 fade-out-0 max-h-30 duration-75'
            />
          )}
          {!creaeteUserError && responseOK && (
            <FormNotification
              icon={'PASS'}
              header='Учетная запись создана!'
              description={`На почту ${createUserResponse.createUser.__typename === 'RegisterSuccess' ? createUserResponse?.createUser.user.email : ''} отправлено сообщение для верификации аккаунта`}
              className='animate-expand animate-in fade-in-0 fade-out-0 max-h-30 duration-75'
            />
          )}
          <RegisterInputs disabled={responseOK} />
          {!responseOK ? (
            <Button
              type={'submit'}
              disabled={!methods.formState.isDirty || loading}
            >
              <p>Submit</p>
              {loading && <Loader2 className='animate-spin' />}
            </Button>
          ) : (
            <Button asChild>
              <Link href={ROUTES.PUBLIC.LOGIN}>Перейти на страницу входа</Link>
            </Button>
          )}
        </AuthForm>
      </FormProvider>
    </>
  )
}
