'use client'

import { NewPasswordForm } from '@/widget/NewPasswordForm'
import { useSearchParams } from 'next/navigation'

export function NewPassword() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  return <div>{token && <NewPasswordForm token={token} />}</div>
}
