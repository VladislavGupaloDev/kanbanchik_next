'use client'

import { Button } from '@/shared/components/ui/button'
import { cn } from '@/shared/lib/utils/utils'
import { useSidebar } from '@/shared/ui/SidebarProvider/ui/SidebarProvider'
import { ComponentProps } from 'react'

export function SidebarToggle({
  className,
  ...props
}: ComponentProps<'button'>) {
  const { toggleSidebar, isOpen } = useSidebar()
  return (
    <Button
      size={'icon'}
      asChild
      className={cn(
        'bg-sidebar-accent-foreground/70 cursor-pointer p-1.5',
        className
      )}
      onClick={toggleSidebar}
      {...props}
    ></Button>
  )
}
