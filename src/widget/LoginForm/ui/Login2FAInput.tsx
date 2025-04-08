import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from '@/shared/components/ui/input-otp'
import { FormField } from '@/shared/ui/FormField/FormField'
import { REGEXP_ONLY_DIGITS } from 'input-otp'
import { useForm } from 'react-hook-form'

export function Login2FAInput({ name }: { name: string }) {
  const {} = useForm()
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormField.Item className='flex flex-col items-center p-4'>
          <FormField.Control>
            <InputOTP
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS}
              {...field}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </FormField.Control>
          <FormField.Message hint='Введите Totp-код для продолжение входа в аккаунт' />
        </FormField.Item>
      )}
    />
  )
}
