import { strToHexColor } from '../lib/hooks/str-hex-convert'
import { cn } from '../lib/utils/utils'
import Image from 'next/image'
import { ComponentProps } from 'react'

interface AvatarProps extends ComponentProps<'div'> {
  username?: string
  avatar?: string
}

export function Avatar({
  username = '',
  avatar,
  className,
  ...props
}: AvatarProps) {
  const hexColor = strToHexColor(username || '')
  return (
    <div
      className={cn(
        'flex size-10 shrink-0 items-center justify-center rounded-sm text-xl font-semibold capitalize',
        className
      )}
      style={{ backgroundColor: hexColor }}
      {...props}
    >
      {avatar ? (
        <Image
          src={avatar}
          alt='User avatar'
        />
      ) : (
        username?.slice(0, 1).toUpperCase()
      )}
    </div>
  )
}
