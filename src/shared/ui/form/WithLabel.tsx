import { Label } from '@/shared/components/ui/label'
import { cn } from '@/shared/lib/utils/utils'
import { ComponentProps } from 'react'

interface WithLabelProps extends ComponentProps<'div'> {
  label?: string
  labelCN?: string
}
export function WithLabel({ label, className, labelCN }: WithLabelProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <Label className={cn('', labelCN)}>{label}</Label>
    </div>
  )
}
