import { ScrollArea } from '@/shared/ui/Scrollable/ScrollArea'
import { SettingsHeader } from '@/widget/SettingsHeader'
import { ReactNode } from 'react'

export default function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <div className='h-full w-full overflow-hidden'>
      <SettingsHeader />
      <ScrollArea
        orientation='vertical'
        asChild
      >
        <div className='h-full w-full pt-6'>
          <div className='flex max-w-[60rem] flex-col gap-8 px-6'>
            {children}
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
