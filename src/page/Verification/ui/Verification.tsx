'use client'

import { useVerifyAccountMutation } from '@/shared/api/graphql/_generated_/output'
import { Button } from '@/shared/components/ui/button'
import { ROUTES } from '@/shared/routes'
import { CardWrapper, CardWrapperProps } from '@/shared/ui/CardWrapper'
import { Loader } from '@/shared/ui/Loader'
import { CheckCircleIcon, XCircleIcon } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

type VerificationStatus = 'loading' | 'success' | 'error' | 'invalid-token'

export function Verification() {
  const [status, setStatus] = useState<VerificationStatus>('loading')
  const params = useSearchParams()
  const token = params.get('token')
  const [verify, { error, data, loading }] = useVerifyAccountMutation()
  const handleVerify = async (token: string) => {
    setStatus('loading')
    return await verify({
      variables: { data: { token } }
    })
  }

  useEffect(() => {
    if (!token) {
      setStatus('invalid-token')
      return
    }

    handleVerify(token)
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'))
  }, [token, verify])

  const statusContent: Record<VerificationStatus, CardWrapperProps> = {
    loading: {
      header: 'Верификация аккаунта',
      subheader: 'Ожидается ответ от сервера на верификацию аккаунта',
      children: <Loader size={60} />
    },
    success: {
      header: 'Аккаунт верифицирован',
      subheader:
        'Верификация прошла успешно, вы будете перенаправлены на страницу входа через 10 секунд или нажмите на кнопку ниже',
      children: (
        <>
          <CheckCircleIcon
            size={60}
            className='stroke-green-400'
          />
          <Button asChild>
            <Link href={ROUTES.PUBLIC.LOGIN}>Войти</Link>
          </Button>
        </>
      )
    },
    error: {
      header: 'Ошибка!',
      subheader: 'Запрос завершился с ошибкой!',
      children: (
        <>
          <XCircleIcon
            size={60}
            className='stroke-red-500'
          />
          <Button
            onClick={() => {
              if (token) handleVerify(token)
            }}
          >
            Попробовать снова
          </Button>
        </>
      )
    },
    'invalid-token': {
      header: 'Ошибка токена',
      subheader: 'Неправильный формат токена или токен не был передан',
      children: (
        <>
          <XCircleIcon
            size={60}
            className='stroke-red-500'
          />
          <Button asChild>
            <Link href={ROUTES.PUBLIC.HOME}>На главную!</Link>
          </Button>
        </>
      )
    }
  }

  return <CardWrapper {...statusContent[status]} />
}
