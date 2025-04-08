'use client'

import { usePasswordRecovery } from '../lib/stageContext'
import { Button } from '@/shared/components/ui/button'
import { ROUTES } from '@/shared/routes'
import { PasswordRecoveryForm } from '@/widget/PasswordRecoveryForm'
import Link from 'next/link'

export function PasswordRecovery() {
  const { stage, email, setStage } = usePasswordRecovery()
  return (
    <div>
      {stage === 'form' && <PasswordRecoveryForm />}
      {stage === 'success' && (
        <div className='flex w-130 flex-col gap-3'>
          <h1 className='text-2xl font-bold'>Проверьте свою почту</h1>
          <div className='gap-1.5` flex flex-col font-semibold'>
            <p>
              {'На вашу почту '}
              <span className='font-bold'>{email}</span> отправленно сообщение с
              сcылкой для сброса пароля.
            </p>
            <p>Нажмите на ссылку для того, чтобы продолжить сброс пароля!</p>
            <p>
              На доставку письма требуется время, ожидайте в течении нескольких
              минут!
            </p>
          </div>
          <div className='flex gap-4'>
            <Button asChild>
              <Link href={ROUTES.PUBLIC.HOME}>Готово</Link>
            </Button>
            <Button
              variant={'secondary'}
              onClick={() => setStage('form')}
            >
              Заного
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
