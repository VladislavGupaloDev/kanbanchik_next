'use client'

import {
  SettingsUserSchema,
  settingsUserSchema
} from '../schema/settings-user.schema'
import { SettingsField } from '@/entity/SettingsField/SettingsField'
import { SettingsForm } from '@/entity/SettingsForm/SettingsForm'
import {
  FindCurrentUserDocument,
  useFindCurrentUserQuery,
  useUdateUserInfoMutation
} from '@/shared/api/graphql/_generated_/output'
import { Input } from '@/shared/components/ui/input'
import { FormButton } from '@/shared/ui/form/FormButton'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

export function SettingsUserForm() {
  const [updateState, setUpdateState] = useState<
    'default' | 'success' | 'error'
  >('default')
  const form = useForm<SettingsUserSchema>({
    resolver: zodResolver(settingsUserSchema),
    defaultValues: {
      login: '',
      displayName: ''
    },
    mode: 'onChange',
    delayError: 1000
  })
  const { data: UserData } = useFindCurrentUserQuery()
  const [updateUser, { loading }] = useUdateUserInfoMutation({
    refetchQueries: [FindCurrentUserDocument]
  })
  const responseType = UserData?.findUserByCurrentSession.__typename

  const user =
    responseType === 'FindUserSuccess' &&
    UserData?.findUserByCurrentSession.user

  useEffect(() => {
    if (user) {
      form.reset({
        login: user.login || '',
        displayName: user.displayName || ''
      })
    }
  }, [user])
  const onSubmit = async (input: SettingsUserSchema) => {
    await updateUser({
      variables: { input },
      onCompleted: ({ updateUserInfo }) => {
        if (updateUserInfo.__typename === 'UpdateUserSuccess') {
          setUpdateState('success')
        }
      }
    })
  }

  return (
    <FormProvider {...form}>
      <SettingsForm.Header
        label='Параметры пользователя'
        sub='Вы можете изменить основные параметры пользователя'
      />
      <SettingsForm onSubmit={form.handleSubmit(onSubmit)}>
        <SettingsForm.Section>
          <SettingsField
            name='login'
            label='Имя пользователя'
            hint='Ваш идентификатор пользователя'
          >
            <Input />
          </SettingsField>
          <SettingsField
            name='displayName'
            label='Отображаемое имя'
            hint='Это имя которое будут видеть другие пользователи'
          >
            <Input />
          </SettingsField>
        </SettingsForm.Section>
        <SettingsForm.Footer>
          <FormButton
            loading={loading}
            success={updateState === 'success'}
          >
            Отправить
          </FormButton>
        </SettingsForm.Footer>
      </SettingsForm>
    </FormProvider>
  )
}
