// PasswordField.tsx (специализированный компонент)
import {ComponentProps, useState} from 'react';
import {cn} from '@/shared/lib/utils';
import {PasswordShowButton} from '@/shared/ui/form/PasswordShowButton';
import {FormField} from '@/shared/ui/form/FormField';

export function PasswordField({ className, ...props }: ComponentProps<'input'>) {
  const [isShow, setIsShow] = useState(false);
  
  return (
    <div className={cn('relative flex w-full items-center')}>
      <FormField
        className={cn('pr-8', className)}
        type={isShow ? 'text' : 'password'}
        {...props}
      />
      <PasswordShowButton
        className="absolute right-2"
        isShow={isShow}
        onClick={() => setIsShow(!isShow)}
      />
    </div>
  );
}