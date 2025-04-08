import { Loader } from '../Loader'
import { Button } from '@/shared/components/ui/button'
import { cn } from '@/shared/lib/utils/utils'
import { CheckIcon } from 'lucide-react'
import { ComponentProps, ReactNode } from 'react'

interface FormButtonProps {
  loading?: boolean
  error?: boolean
  success?: boolean
}
export function FormButton({
  loading = false,
  error = false,
  success = false,
  className,
  ...props
}: FormButtonProps & ComponentProps<typeof Button>) {
  const formButtonContent: Record<any, ReactNode> = {
    loading: (
      <>
        Отправка <Loader className='stroke-background' />
      </>
    ),
    success: (
      <>
        <CheckIcon />
      </>
    )
  }
  const formButtonChild =
    (loading && formButtonContent['loading']) ||
    (success && formButtonContent['success'])
  return (
    <Button
      disabled={loading || error}
      className={cn(
        'min-w-30 cursor-pointer',
        success && 'bg-green-400 hover:bg-green-500',
        className
      )}
    >
      {formButtonChild || 'Отправить'}
    </Button>
  )
}
