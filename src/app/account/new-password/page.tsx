import { NO_INDEX_PAGE } from '@/core/seo/seo.const'
import { NewPassword } from '@/page/NewPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Password',
  ...NO_INDEX_PAGE
}

export default function NewPasswordPage() {
  return <NewPassword />
}
