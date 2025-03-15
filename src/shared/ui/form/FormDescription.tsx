import {ComponentProps} from 'react';
import {cn} from '@/shared/lib/utils';


export function FormDescription({children, className, ...props}: ComponentProps<'div'>) {
  return <div className={cn('text-primary/60 text-sm font-light', className)}>{children}</div>
}