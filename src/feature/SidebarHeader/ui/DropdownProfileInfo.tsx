import { SidebarProfileSkeleton } from '@/entity/SidebarProfile/ui/SidebarProfileSkeleton'
import { useSidebarProfileUserQuery } from '@/shared/api/graphql/_generated_/output'
import { cn } from '@/shared/lib/utils/utils'
import { Avatar } from '@/shared/ui/Avatar'
import { ComponentProps } from 'react'

export function DropdownProfileInfo({
  className,
  ...props
}: ComponentProps<'div'>) {
  const { data: userQuery, loading: userQueryLoad } =
    useSidebarProfileUserQuery()
  const userResponse = userQuery?.findUserByCurrentSession
  if (userQueryLoad) {
    return <SidebarProfileSkeleton />
  }
  if (userResponse?.__typename === 'FindUserSuccess') {
    return (
      <div
        className={cn('flex flex-1 gap-2 overflow-hidden', className)}
        {...props}
      >
        <Avatar username={userResponse?.user?.displayName} />
        <div className='ml-2 w-full overflow-hidden'>
          <div className='truncate font-semibold'>
            {userResponse?.user?.displayName}
          </div>
          <div className='text-muted-foreground truncate text-sm'>
            {userResponse.user?.email}
          </div>
        </div>
      </div>
    )
  }
  return null
}
