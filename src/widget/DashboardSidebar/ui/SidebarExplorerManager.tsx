import { Collapsable } from '@/shared/ui/Collapsable'
import { Sidebar } from '@/shared/ui/Sidebar/Sidebar'
import { FolderClosedIcon, FolderOpenIcon } from 'lucide-react'
import { ComponentProps } from 'react'

export function SidebarExplorerManager({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <Sidebar.Group>
      <Sidebar.GroupLabel>Explorer manager</Sidebar.GroupLabel>
      <Sidebar.GroupContent className='[&_button]:hover:bg-accent-foreground/10 flex-row [&_svg]:text-white'>
        <Collapsable.GlobalClose className='bg-transparent'>
          <FolderClosedIcon />
        </Collapsable.GlobalClose>
        <Collapsable.GlobalOpen className='bg-transparent'>
          <FolderOpenIcon />
        </Collapsable.GlobalOpen>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  )
}
