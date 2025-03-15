import { cn } from '@/6_shared/lib/utils/cn'
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
