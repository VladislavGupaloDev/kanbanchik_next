import { NO_INDEX_PAGE } from '@/core/seo/seo.const'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  ...NO_INDEX_PAGE
}

export default function DashboardPage() {
  return <div>VerificationPage</div>
}
