'use client'

import { SettingsProfileSchema, settingsProfileSchema } from '../schema'
import { SettingsField } from '@/entity/SettingsField/SettingsField'
import { SettingsForm } from '@/entity/SettingsForm/SettingsForm'
import {
  FindProfileBySessionDocument,
  useFindProfileBySessionQuery,
  useUpdateProfileInfoMutation
} from '@/shared/api/graphql/_generated_/output'
import { Input } from '@/shared/components/ui/input'
import { Separator } from '@/shared/ui/Separator'
import { FormButton } from '@/shared/ui/form/FormButton'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

export function SettingsProfileForm() {
  const [success, setSuccess] = useState<boolean | null>(null)
  const form = useForm<SettingsProfileSchema>({
    resolver: zodResolver(settingsProfileSchema),
    defaultValues: {
      fullName: '',
      publicEmail: '',
      company: '',
      location: '',
      private: false,
      birthday: undefined
    },
    mode: 'onChange',
    delayError: 1000
  })
  const { data: ProfileData } = useFindProfileBySessionQuery()
  const [updateProfile, { loading }] = useUpdateProfileInfoMutation()
  const responseType = ProfileData?.findProfileBySession.__typename
  const profile =
    responseType === 'FindProfileSuccess' &&
    ProfileData?.findProfileBySession.profile
  useEffect(() => {
    if (profile) {
      form.reset({
        fullName: profile.fullName ?? undefined,
        publicEmail: profile.publicEmail ?? undefined,
        company: profile.company ?? undefined,
        location: profile.location ?? undefined,
        private: profile.private ?? undefined,
        birthday: profile.birthday ?? undefined
      })
    }
  }, [ProfileData])
  const onSubmit = async (input: SettingsProfileSchema) => {
    await updateProfile({
      variables: { input },
      refetchQueries: [FindProfileBySessionDocument],
      onCompleted: ({ updateProfile }) => {
        if (updateProfile.__typename === 'UpdateProfileSuccess') {
          setSuccess(true)
        }
      }
    })
  }
  return (
    <FormProvider {...form}>
      <SettingsForm.Header
        label='Параметры профиля'
        sub='Вы можете изменить отображение профиля и его приватность'
      />
      <SettingsForm onSubmit={form.handleSubmit(onSubmit)}>
        <SettingsForm.Section>
          <SettingsField
            name='fullName'
            label='Полное имя'
            hint='Ваше полное имя будет указано в профиле'
          >
            <Input
              type='text'
              disabled={loading}
            />
          </SettingsField>
          <SettingsField
            name='publicEmail'
            label='Публичная почта'
            hint='Эта почта будет видна в вашем профиле'
          >
            <Input
              type='email'
              disabled={loading}
            />
          </SettingsField>
        </SettingsForm.Section>
        <Separator className='bg-border-secondary' />
        <SettingsForm.Section>
          <SettingsField
            name='company'
            label='Компания'
            hint='Ваша компания в которое вы работаете'
          >
            <Input disabled={loading} />
          </SettingsField>
          <SettingsField
            name='location'
            label='Место нахождения'
            hint='Место нахождения где вы работаете'
          >
            <Input
              type='text'
              disabled={loading}
            />
          </SettingsField>
        </SettingsForm.Section>
        <SettingsForm.Footer>
          <FormButton
            loading={loading}
            success={success === true}
          />
        </SettingsForm.Footer>
      </SettingsForm>
    </FormProvider>
  )
}
