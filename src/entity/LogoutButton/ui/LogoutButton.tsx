'use client'

import { client } from '@/core/apollo/config'
import { useLogoutMutation } from '@/shared/api/graphql/_generated_/output'
import { Button } from '@/shared/components/ui/button'
import { ROUTES } from '@/shared/routes'
import { useRouter } from 'next/navigation'
import { ComponentProps } from 'react'

export function LogoutButton({ ...props }: ComponentProps<typeof Button>) {
  const [logout] = useLogoutMutation()
  const router = useRouter()
  const logoutHandler = () => {
    logout()
    client.clearStore()
    router.push(ROUTES.PUBLIC.LOGIN)
  }
  return (
    <Button
      onClick={() => logoutHandler()}
      {...props}
    ></Button>
  )
}
