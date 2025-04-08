import { Skeleton } from '@/shared/ui/Skeleton'

export function SidebarProfileSkeleton() {
  return (
    <div className='flex flex-1 gap-2 overflow-hidden'>
      <Skeleton className='flex size-10 shrink-0 rounded-sm border-2' />
      <div className='w-full space-y-1 overflow-hidden'>
        <Skeleton className='h-5 w-3/4' />
        <Skeleton className='h-4 w-1/2' />
      </div>
    </div>
  )
}
