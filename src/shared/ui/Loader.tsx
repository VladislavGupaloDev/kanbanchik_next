import { cn } from '../lib/utils/utils'
import { Loader2Icon, LucideProps } from 'lucide-react'

export function Loader({ className, ...props }: LucideProps) {
  return (
    <Loader2Icon
      className={cn('stroke-primary animate-spin', className)}
      {...props}
    />
  )
}
