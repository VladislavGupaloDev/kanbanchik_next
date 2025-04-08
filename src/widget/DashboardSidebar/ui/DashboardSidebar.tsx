'use client'

import {
  SidebarCollapsable,
  SidebarCollapsableGlobalProvider
} from './SidebarCollapsable'
import { SidebarExplorerManager } from './SidebarExplorerManager'
import { LogoutButton } from '@/entity/LogoutButton'
import { DashboardSidebarHeader } from '@/feature/SidebarHeader'
import { ScrollArea } from '@/shared/ui/Scrollable/ScrollArea'
import { Sidebar } from '@/shared/ui/Sidebar/Sidebar'

export function DashboardSidebar() {
  return (
    <>
      <Sidebar>
        <Sidebar.Content>
          <Sidebar.Header>
            <DashboardSidebarHeader />
          </Sidebar.Header>
          <Sidebar.Main>
            <SidebarCollapsableGlobalProvider>
              <SidebarExplorerManager />
              <ScrollArea orientation={'vertical'}>
                <SidebarCollapsable>
                  <SidebarCollapsable.Trigger>
                    <SidebarCollapsable.Chevron />
                    ОТКУИТЬ
                  </SidebarCollapsable.Trigger>
                  <SidebarCollapsable.Content>
                    <div className='h-20'>
                      <SidebarCollapsable.ContentItem>
                        Item
                      </SidebarCollapsable.ContentItem>
                      <SidebarCollapsable>
                        <SidebarCollapsable.Trigger>
                          <SidebarCollapsable.Chevron />
                          ОТКУИТЬ
                        </SidebarCollapsable.Trigger>
                        <SidebarCollapsable.Content>
                          <div className='h-20'>
                            <SidebarCollapsable.ContentItem>
                              Item
                            </SidebarCollapsable.ContentItem>
                          </div>
                        </SidebarCollapsable.Content>
                      </SidebarCollapsable>
                    </div>
                  </SidebarCollapsable.Content>
                </SidebarCollapsable>
              </ScrollArea>
            </SidebarCollapsableGlobalProvider>
          </Sidebar.Main>
          <Sidebar.Footer className='bg-amber-300'>
            <LogoutButton />
          </Sidebar.Footer>
        </Sidebar.Content>
        <Sidebar.Resizer />
      </Sidebar>
    </>
  )
}
