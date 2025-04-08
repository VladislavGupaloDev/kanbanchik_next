'use client'

import { Portal } from '../../Portal'
import { useClickOutside } from '@/shared/lib/hooks'
import { useControlledState } from '@/shared/lib/hooks/useControlledState'
import { composeRefs } from '@/shared/lib/utils/radixComposeRef'
import { cn } from '@/shared/lib/utils/utils'
import {
  UseFloatingOptions,
  flip,
  offset,
  shift,
  useFloating
} from '@floating-ui/react-dom'
import { Slot } from '@radix-ui/react-slot'
import {
  ComponentProps,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext
} from 'react'

interface DropdownContextProps {
  isOpen: boolean
  setIsOpen: (open: boolean | ((prev: boolean) => boolean)) => void
  toggleOpenState: () => void
  refs: {
    setReference: (node: HTMLElement | null) => void
    setFloating: (node: HTMLElement | null) => void
  }
  floatingStyles: React.CSSProperties
}

const DropdownContext = createContext<DropdownContextProps | null>(null)

export function useDropdown() {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error('useDropdown must be used within  a Dropdown')
  }
  return context
}

interface DropdownProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  mainOffset?: number
  alignOffset?: number
  flipping?: boolean
}

export function Dropdown({
  open,
  defaultOpen = false,
  onOpenChange,
  placement = 'bottom-start',
  mainOffset = 0,
  alignOffset = 0,
  flipping = true,
  children
}: DropdownProps & PropsWithChildren & UseFloatingOptions) {
  const [isOpen, setIsOpen] = useControlledState({
    value: open,
    defaultValue: defaultOpen,
    onChange: onOpenChange
  })
  const toggleOpenState = useCallback(
    () => setIsOpen(prev => !prev),
    [setIsOpen]
  )
  const { refs, floatingStyles } = useFloating({
    strategy: 'fixed',
    placement,
    middleware: [
      offset({ mainAxis: mainOffset, alignmentAxis: alignOffset }),
      flipping && flip(),
      shift()
    ],
    open: isOpen
  })
  return (
    <DropdownContext.Provider
      value={{ isOpen, setIsOpen, toggleOpenState, refs, floatingStyles }}
    >
      {children}
    </DropdownContext.Provider>
  )
}

function DropdownTrigger({
  asChild = false,
  children,
  className,
  ...props
}: { asChild?: boolean } & ComponentProps<'div'>) {
  const { isOpen, toggleOpenState, refs } = useDropdown()
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot='DropdownTrigger'
      data-state={isOpen ? 'open' : 'close'}
      className={cn(className)}
      onClick={toggleOpenState}
      ref={refs.setReference}
    >
      {children}
    </Comp>
  )
}

function DropdownContent({
  children,
  ref,
  className,
  ...props
}: ComponentProps<typeof Portal>) {
  const { isOpen, setIsOpen, refs, floatingStyles } = useDropdown()
  const clickOutsideRef = useClickOutside<HTMLDivElement>(() =>
    setIsOpen(false)
  )

  if (!isOpen) return null
  return (
    <Portal
      className={cn('z-50', className)}
      data-state={isOpen ? 'open' : 'close'}
      ref={composeRefs(clickOutsideRef, refs.setFloating)}
      style={floatingStyles}
      {...props}
    >
      {children}
    </Portal>
  )
}

Dropdown.Trigger = DropdownTrigger
Dropdown.Content = DropdownContent
