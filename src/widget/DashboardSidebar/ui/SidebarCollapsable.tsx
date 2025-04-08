import { cn } from '@/shared/lib/utils/utils'
import { Collapsable } from '@/shared/ui/Collapsable'
import {
  CollapsableGlobalProvider,
  useCollapsable
} from '@/shared/ui/Collapsable/ui/Collapsable'
import { Sidebar } from '@/shared/ui/Sidebar/Sidebar'
import { ChevronRightIcon } from 'lucide-react'
import { ComponentProps } from 'react'

export const useSidebarCollapsable = useCollapsable
export const SidebarCollapsableGlobalProvider = CollapsableGlobalProvider

export function SidebarCollapsable({
  ...props
}: ComponentProps<typeof Collapsable>) {
  return (
    <Sidebar.Group className='p-0'>
      <Collapsable {...props} />
    </Sidebar.Group>
  )
}

function SidebarCollapsableContentItem({
  ...props
}: ComponentProps<typeof Collapsable.Item>) {
  const { deepLevel } = useSidebarCollapsable()
  return (
    <Sidebar.GroupItem asChild>
      <Collapsable.Item
        data-deep={deepLevel}
        className='hover:bg-accent-foreground/20 rounded-sm py-1'
        style={{
          paddingLeft: `${20 + 12 * (deepLevel + 1)}px`
        }}
        {...props}
      />
    </Sidebar.GroupItem>
  )
}

function SidebarCollapsableTriggerChevron({
  className,
  ...props
}: ComponentProps<typeof ChevronRightIcon>) {
  return (
    <Collapsable.Item asChild>
      <ChevronRightIcon
        className={cn(
          'transition-transform duration-150 ease-in-out data-[content-state=expanded]:rotate-90',
          className
        )}
        size={20}
        {...props}
      />
    </Collapsable.Item>
  )
}

function SidebarCollapsableTrigger({
  className,
  children,
  ...props
}: ComponentProps<'div'>) {
  const { deepLevel } = useSidebarCollapsable()
  return (
    <Sidebar.GroupLabel
      className=''
      asChild
    >
      <Collapsable.Trigger asChild>
        <div
          className={cn(
            'hover:bg-accent-foreground/20 w-full cursor-pointer py-1 select-none',
            className
          )}
          {...props}
          style={{
            paddingLeft: `${8 + 16 * deepLevel}px`
          }}
        >
          {children}
        </div>
      </Collapsable.Trigger>
    </Sidebar.GroupLabel>
  )
}

export function SidebarCollapsableContent({
  ...props
}: ComponentProps<typeof Sidebar.GroupContent>) {
  return (
    <Collapsable.Content asChild>
      <Sidebar.GroupContent {...props} />
    </Collapsable.Content>
  )
}

SidebarCollapsable.Trigger = SidebarCollapsableTrigger
SidebarCollapsable.ContentItem = SidebarCollapsableContentItem
SidebarCollapsable.Content = SidebarCollapsableContent
SidebarCollapsable.Item = Collapsable.Item
SidebarCollapsable.Chevron = SidebarCollapsableTriggerChevron
