import { SidebarProfileDropdown } from './SidebarProfileDropdown'
import { Sidebar, useSidebar } from '@/shared/ui/Sidebar/Sidebar'
import { SidebarCloseIcon, SidebarOpenIcon } from 'lucide-react'

export function DashboardSidebarHeader() {
  const { isOpen } = useSidebar()

  return (
    <div className='border-border-secondary hover:bg-sidebar-foreground/15 flex items-center border-b-2 p-2'>
      <SidebarProfileDropdown />
      <Sidebar.Trigger>
        {isOpen ? (
          <SidebarCloseIcon className={'stroke-secondary/80'} />
        ) : (
          <SidebarOpenIcon className={'stroke-secondary/80'} />
        )}
      </Sidebar.Trigger>
    </div>
  )
}
