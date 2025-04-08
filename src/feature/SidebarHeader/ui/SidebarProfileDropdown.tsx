import { DropdownProfileInfo } from './DropdownProfileInfo'
import { LogoutButton } from '@/entity/LogoutButton'
import { SidebarProfile } from '@/entity/SidebarProfile'
import { Button } from '@/shared/components/ui/button'
import { ROUTES } from '@/shared/routes'
import { Dropdown } from '@/shared/ui/Dropdown/ui/Dropdown'
import { LogOutIcon, SettingsIcon } from 'lucide-react'
import Link from 'next/link'

export function SidebarProfileDropdown() {
  return (
    <Dropdown mainOffset={8}>
      <Dropdown.Trigger
        className='n flex w-full cursor-pointer'
        asChild
      >
        <SidebarProfile />
      </Dropdown.Trigger>
      <Dropdown.Content className='shadow-background/10 shadow-xl'>
        <div className='bg-sidebar-primary-foreground border-primary/10 w-80 overflow-hidden rounded-md border-2'>
          <div className='flex flex-col gap-2 p-3'>
            <DropdownProfileInfo />
            <ul className='flex w-full gap-2'>
              <li>
                <Button
                  variant={'ghost'}
                  className='border-sidebar-foreground/10 hover:bg-accent-foreground/10 border-2 px-2'
                  asChild
                >
                  <Link href={ROUTES.PRIVATE.PROFILE_SETTINGS}>
                    <span>
                      <SettingsIcon />
                    </span>
                    Settings
                  </Link>
                </Button>
              </li>
              <li>
                <LogoutButton
                  variant={'ghost'}
                  className='border-sidebar-foreground/10 hover:bg-accent-foreground/10 cursor-pointer border-2 px-2'
                >
                  <span>
                    <LogOutIcon />
                  </span>
                  Logout
                </LogoutButton>
              </li>
            </ul>
          </div>
        </div>
      </Dropdown.Content>
    </Dropdown>
  )
}
