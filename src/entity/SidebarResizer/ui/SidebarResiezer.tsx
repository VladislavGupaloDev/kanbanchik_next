'use client'

import { cn } from '@/shared/lib/utils/utils'
import { useSidebar } from '@/shared/ui/SidebarProvider/ui/SidebarProvider'
import { ComponentProps, useCallback } from 'react'

export function SidebarResiezer({
  className,
  ...props
}: ComponentProps<'div'>) {
  const { setIsResizing, setWidth } = useSidebar()

  const handleMouseDown = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault()
      const sidebar = document.querySelector(
        '[data-slot="sidebar"]'
      ) as HTMLElement | null
      const body = document.body
      if (!sidebar) return
      const startX = event.clientX
      const startWidth = sidebar.getBoundingClientRect().width
      let newWidth = startWidth
      if (body) body.style.cursor = 'ew-resize'
      setIsResizing?.(true)
      const onMouseMove = (event: MouseEvent) => {
        newWidth = Math.min(
          480,
          Math.max(250, startWidth + (event.clientX - startX))
        )
        sidebar.style.width = `${newWidth}px`
      }
      const onMouseUp = () => {
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('mouseup', onMouseUp)
        if (body) body.style.cursor = 'auto'
        setWidth?.(newWidth)
        setIsResizing?.(false)
      }
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    },
    [setIsResizing]
  )
  return (
    <div
      id='sidebar-resize'
      className={cn(
        't-0 absolute top-0 right-0 z-10 h-full w-1.5 cursor-e-resize',
        className
      )}
      onMouseDown={handleMouseDown}
    />
  )
}
