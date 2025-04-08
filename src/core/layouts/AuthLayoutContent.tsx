import { AuthLayoutHeader } from './header'
import { ScrollArea } from '@/shared/ui/Scrollable/ScrollArea'
import { SidebarProvider } from '@/shared/ui/Sidebar/Sidebar'
import { DashboardSidebar } from '@/widget/DashboardSidebar/ui/DashboardSidebar'
import { ComponentProps } from 'react'

//TODO: Создать каталог
export function AuthLayoutContent({ children }: ComponentProps<'div'>) {
  return (
    <SidebarProvider>
      <div className='flex h-screen w-full flex-col'>
        <AuthLayoutHeader />
        <div className='relative flex h-full max-h-full w-full overflow-hidden'>
          <DashboardSidebar />
          <ScrollArea
            orientation='vertical'
            asChild
          >
            <main
              id='main'
              className='bg-background order-2 flex h-full shrink-1 flex-grow-1 items-center justify-center self-end overflow-hidden'
            >
              {children}
            </main>
          </ScrollArea>
        </div>
      </div>
    </SidebarProvider>
  )
}
