import { cn } from '../lib/utils/utils'
import { SubHeader } from './form/FormDescription'
import { Header } from './form/FormLabel'
import { ComponentProps, ReactNode } from 'react'

export interface CardWrapperProps {
  header?: string
  subheader?: string
  children?: ReactNode
}

export function CardWrapper({
  className,
  header,
  subheader,
  children,
  ...props
}: CardWrapperProps & ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'bg-secondary border-border-secondary flex w-full max-w-1/2 flex-col items-center gap-4 rounded-sm border-1 p-4',
        className
      )}
      {...props}
    >
      <div className='text-center'>
        {header && <Header>{header}</Header>}
        {subheader && <SubHeader>{subheader}</SubHeader>}
      </div>
      {children}
    </div>
  )
}
