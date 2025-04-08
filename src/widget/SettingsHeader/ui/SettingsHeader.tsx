'use client'

import { ROUTES } from '@/shared/routes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MouseEvent, useEffect, useRef } from 'react'

//? Возможно нужно переделать полностью на принятие объекта и вообще распарсить это на Comp.Comp
export function SettingsHeader() {
  const indicatorRef = useRef<HTMLDivElement>(null)
  const tabsListRef = useRef<HTMLUListElement>(null)
  const pathname = usePathname()

  console.log(pathname)

  //? Чет намудрил по жести, надо будет посмотреть на гитхабе или попросить гптшку отрефакторить
  useEffect(() => {
    if (!tabsListRef.current) return

    const currentTab = tabsListRef.current.querySelector('li:first-child')
    if (!currentTab) return

    const updateIndicatorPosition = () => {
      if (!tabsListRef.current) return

      const tabs = Array.from(tabsListRef.current.children) as HTMLElement[]
      //? Жижная, не типизированная фигня на датасетах
      const activeTab =
        tabs.filter(
          item => item.dataset.target && pathname.includes(item.dataset.target)
        )[0] || currentTab

      const tabRect = activeTab.getBoundingClientRect()
      const listRect = tabsListRef.current!.getBoundingClientRect()
      const relativeLeft = tabRect.left - listRect.left
      if (indicatorRef.current) {
        indicatorRef.current.style.width = `${tabRect.width}px`
        indicatorRef.current.style.transform = `translateX(${relativeLeft}px)`
        indicatorRef.current.dataset.active = 'true'
      }
      //TODO: Удалить логи
      // console.log(activeTab)
      // console.log(tabs)
    }

    updateIndicatorPosition()

    //*Нейронка подсказала, но думаю надо сначала debounce добавить
    // window.addEventListener('resize', updateIndicatorPosition)
    // return () => window.removeEventListener('resize', updateIndicatorPosition)
  }, [pathname])

  const onChooseTab = (event: MouseEvent) => {
    const parent = event.currentTarget as HTMLElement
    const targetElement = (event.target as HTMLElement).closest('a')
    if (!targetElement || !parent) return
    const childRect = targetElement.getBoundingClientRect()
    const parentRect = parent.getBoundingClientRect()
    const relativePosition = childRect.left - parentRect.left
    if (indicatorRef.current) {
      indicatorRef.current.style.width = `${childRect.width}px`
      indicatorRef.current.style.transform = `translateX(${relativePosition}px)`
    }
  }
  return (
    <div className='mx-6 w-full border-b-2 pb-1'>
      <h1 className='text-4xl font-bold'>Настройки</h1>
      <nav className='relative w-full'>
        <ul
          ref={tabsListRef}
          className='flex w-full gap-6 overflow-hidden font-semibold'
          onClick={event => onChooseTab(event)}
        >
          {
            //? Возможно лучше переделать все дата атрибуты под Link
          }
          <li
            className='cursor-pointer hover:text-amber-500'
            id='tab-1'
            data-index='0'
            data-target='profile'
          >
            <Link
              href={ROUTES.PRIVATE.PROFILE_SETTINGS}
              className='flex h-full w-full'
            >
              Профиль
            </Link>
          </li>
          <li
            className='cursor-pointer'
            data-index='1'
            data-target='privacy'
          >
            <Link href={ROUTES.PRIVATE.PRIVACY_SETTINGS}>
              Безопасность и конфиденциальность
            </Link>
          </li>
        </ul>
        <div
          ref={indicatorRef}
          className='transition-[width, transform] absolute -bottom-1 h-1 bg-amber-500 duration-300'
        />
      </nav>
    </div>
  )
}
