import {ComponentProps} from 'react';
import {cn} from '@/shared/lib/utils';


export function FormLabel({children, className, ...props}: ComponentProps<'div'>) {
  return <div className={cn('font-semibold text-4xl text-primary', className)}>{children}</div>
}