import { cn } from '@/shared/lib/utils/utils'
import { EyeClosedIcon, EyeIcon } from 'lucide-react'
import { ComponentProps } from 'react'

interface PasswordShowButtonProps extends ComponentProps<'button'> {
  isShow: boolean
}

export function PasswordShowButton({
  className,
  isShow,
  ...props
}: PasswordShowButtonProps) {
  return (
    <button
      className={cn('cursor-pointer', className)}
      type='button'
      {...props}
    >
      {!isShow ? (
        <EyeIcon
          size='20'
          className={'stroke-primary'}
        />
      ) : (
        <EyeClosedIcon
          size='20'
          className={'stroke-primary'}
        />
      )}
    </button>
  )
}
