import { NO_INDEX_PAGE } from '@/core/seo/seo.const'
import { Login } from '@/page/Login'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  ...NO_INDEX_PAGE
}

export default function LoginPage() {
  return <Login />
}
