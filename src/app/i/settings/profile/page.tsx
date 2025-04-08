import { NO_INDEX_PAGE } from '@/core/seo/seo.const'
import { ProfileSettings } from '@/page/Settings'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Settings',
  ...NO_INDEX_PAGE
}

export default function SettingsPage() {
  return <ProfileSettings />
}
