import {ROUTES} from '@/shared/routes';
import {Button} from '@/shared/components/ui/button';
import Link from 'next/link';

const  MENU_ITEMS = [{page: ROUTES.PUBLIC.HOME, title: "Home"},
{page: ROUTES.PUBLIC.REGISTER, title: "Register"},
{page: ROUTES.PUBLIC.LOGIN, title: "Login"},
{page: ROUTES.PRIVATE.DASHBOARD, title: "Dashboard"},
{page: ROUTES.PRIVATE.PROFILE, title: "Profile"},
{page: ROUTES.PRIVATE.PROFILE_SETTINGS, title: "Profile Settings"}];

export function Home() {
  return <div className='flex bg-background min-h-screen w-full justify-center items-center'>
    <ul className={'flex gap-3'}>
      {MENU_ITEMS.map((item, i) => {
        return (
          <li key={i} className={'w-fit'}><Button asChild><Link href={item.page} className={'block'}>{item.title}</Link></Button></li>
        )
      })}
    </ul>
  </div>;
}
