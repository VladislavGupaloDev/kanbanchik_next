import { NO_INDEX_PAGE } from '../../../core/seo/seo.const'
import { PasswordRecovery } from '@/page/PasswordRecovery'
import { PasswordRecoveryProvider } from '@/page/PasswordRecovery/lib/stageContext'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forgot Password',
  ...NO_INDEX_PAGE
}

export default function ForgotPasswordPage() {
  return (
    <PasswordRecoveryProvider>
      <PasswordRecovery />
    </PasswordRecoveryProvider>
  )
}
