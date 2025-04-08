'use client'

import { Button } from '@/shared/components/ui/button'
import { cn } from '@/shared/lib/utils/utils'
import { Slot } from '@radix-ui/react-slot'
import { SidebarCloseIcon, SidebarOpenIcon } from 'lucide-react'
import {
  CSSProperties,
  ComponentProps,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState
} from 'react'

const SIDEBAR_COOKIE_NAME = 'sidebar_state'
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = 400
const SIDEBAR_MAX_WIDTH = 500
const SIDEBAR_MIN_WIDTH = 260

const SIDEBAR_WIDTH_ICON = '3rem'

interface SidebarContextProps {
  isOpen: boolean
  setIsOpen: (state: boolean) => void
  toggleSidebar: () => void
  isResizing: boolean
  setIsResizing: (isResizing: boolean) => void
  width: number
  setWidth: (width: number) => void
}

const SidebarContext = createContext<SidebarContextProps | null>(null)

export function SidebarProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(true)
  const [width, setWidth] = useState(SIDEBAR_MAX_WIDTH)
  const toggleSidebar = () => setIsOpen(prev => !prev)
  const [isResizing, setIsResizing] = useState(false)

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        toggleSidebar,
        isResizing,
        setIsResizing,
        width,
        setWidth,
        setIsOpen
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarContext')
  }
  return context
}

export function Sidebar({
  className,
  children,
  ...props
}: ComponentProps<'aside'>) {
  const { width, isOpen } = useSidebar()
  return (
    <aside
      data-slot={'sidebar'}
      className={cn(
        'relative flex h-full min-h-full shrink-0 flex-grow-0 transition-[width] duration-200',
        className
      )}
      style={
        {
          width: isOpen ? width : 0
        } as CSSProperties
      }
    >
      {children}
    </aside>
  )
}

export function SidebarContent({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'relative flex max-h-full min-h-full w-full flex-col overflow-hidden border-r-2',
        className
      )}
      {...props}
    ></div>
  )
}

function SidebarTrigger({ className, ...props }: ComponentProps<'button'>) {
  const { toggleSidebar, isOpen } = useSidebar()
  return (
    <Button
      size={'icon'}
      asChild
      className={cn(
        'bg-sidebar-accent-foreground/70 cursor-pointer p-1.5',
        className
      )}
      onClick={toggleSidebar}
      {...props}
    >
      {isOpen ? (
        <SidebarCloseIcon className={'stroke-secondary/80'} />
      ) : (
        <SidebarOpenIcon className={'stroke-secondary/80'} />
      )}
    </Button>
  )
}

function SidebarResizer({ className, ...props }: ComponentProps<'div'>) {
  const { setIsResizing, setWidth, setIsOpen } = useSidebar()

  const handleMouseDown = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault()
      setIsOpen(true)
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
          SIDEBAR_MAX_WIDTH,
          Math.max(SIDEBAR_MIN_WIDTH, startWidth + (event.clientX - startX))
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
        't-0 absolute top-0 -right-0.5 z-10 h-full w-1.5 cursor-e-resize',
        className
      )}
      onMouseDown={handleMouseDown}
    />
  )
}

function SidebarHeader({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-sidebar='header'
      className={cn('order-1 w-full', className)}
      {...props}
    />
  )
}
function SidebarFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-sidebar='footer'
      className={cn('order-3 w-full shrink-0 p-2', className)}
      {...props}
    />
  )
}

function SidebarMain({ className, ...props }: ComponentProps<'div'>) {
  const { isOpen } = useSidebar()
  return (
    <div
      data-sidebar='main'
      className={cn('order-2 flex h-full flex-col', className)}
      {...props}
    />
  )
}
function SidebarGroup({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-sidebar={'group'}
      className={cn('relative flex w-full min-w-0 flex-col p-2', className)}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  asChild,
  ...props
}: ComponentProps<'div'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      data-sidebar={'group-label'}
      className={cn(
        'text-sidebar-foreground/70 flex w-full items-center truncate rounded-sm text-sm font-semibold [&>svg]:shrink-0',
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupContent({
  className,
  asChild,
  ...props
}: ComponentProps<'div'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      data-sidebar={'group-content'}
      className={cn(
        'text-sidebar-foreground/70 flex w-full min-w-0 flex-col truncate text-sm',
        className
      )}
      {...props}
    />
  )
}

function SidebarGroupItem({
  className,
  asChild,
  ...props
}: ComponentProps<'div'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      data-sidebar={'group-content-item'}
      className={cn('w-full truncate', className)}
      {...props}
    />
  )
}

Sidebar.Trigger = SidebarTrigger
Sidebar.Resizer = SidebarResizer
Sidebar.Main = SidebarMain
Sidebar.Footer = SidebarFooter
Sidebar.Header = SidebarHeader
Sidebar.Content = SidebarContent
Sidebar.Group = SidebarGroup
Sidebar.GroupLabel = SidebarGroupLabel
Sidebar.GroupContent = SidebarGroupContent
Sidebar.GroupItem = SidebarGroupItem
