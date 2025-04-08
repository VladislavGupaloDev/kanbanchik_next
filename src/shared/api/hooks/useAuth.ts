'use client'

import { useLogoutMutation } from '../graphql/_generated_/output'
import { client } from '@/core/apollo/config'
import { ROUTES } from '@/shared/routes'
import { useRouter } from 'next/navigation'

export function useAuth() {
  const [logout] = useLogoutMutation()
  const router = useRouter()
  const logoutHandler = () => {
    logout()
    client.clearStore()
    router.push(ROUTES.PUBLIC.LOGIN)
  }
  return { logoutHandler }
}
