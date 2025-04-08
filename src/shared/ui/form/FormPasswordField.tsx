// PasswordField.tsx (специализированный компонент)
import { Input } from '@/shared/components/ui/input'
import { cn } from '@/shared/lib/utils/utils'
import { PasswordShowButton } from '@/shared/ui/form/PasswordShowButton'
import { ComponentProps, useState } from 'react'

export function PasswordField({
  className,
  ...props
}: ComponentProps<typeof Input>) {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className={cn('relative flex w-full items-center')}>
      <Input
        className={cn('pr-8', className)}
        type={isShow ? 'text' : 'password'}
        {...props}
      />
      <PasswordShowButton
        className='absolute right-2'
        isShow={isShow}
        onClick={() => setIsShow(!isShow)}
      />
    </div>
  )
}
