import { AuthLayoutContent } from '@/core/layouts/AuthLayoutContent'
import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <AuthLayoutContent>{children} </AuthLayoutContent>
}
