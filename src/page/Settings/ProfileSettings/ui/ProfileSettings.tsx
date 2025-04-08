import { SettingsProfileForm } from '@/widget/SettingsProfileForm'
import { SettingsUserForm } from '@/widget/SettingsUserForm'

export function ProfileSettings() {
  return (
    <div className='flex w-full flex-col gap-6'>
      <SettingsUserForm />
      <SettingsProfileForm />
      <SettingsProfileForm />
    </div>
  )
}
