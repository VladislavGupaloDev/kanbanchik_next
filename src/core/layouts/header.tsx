'use client'

import { Sidebar, useSidebar } from '@/shared/ui/Sidebar/Sidebar'

export function AuthLayoutHeader() {
  const { isOpen } = useSidebar()

  return (
    <header className='h-10 w-full border-b-2'>
      {!isOpen && <Sidebar.Trigger />}
    </header>
  )
}
