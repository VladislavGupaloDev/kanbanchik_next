'use client'

import { Button } from '@/shared/components/ui/button'
import { useControlledState } from '@/shared/lib/hooks/useControlledState'
import { cn } from '@/shared/lib/utils/utils'
import { Slot } from '@radix-ui/react-slot'
import {
  ComponentProps,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'

/** Интерфейс для локального контекста группы */
interface CollapsableContextProps {
  isOpen: boolean
  setIsOpen: (open: boolean | ((prev: boolean) => boolean)) => void
  toggleOpenState: () => void
  deepLevel: number
}

/** Интерфейс для глобального контекста групповых операций */
interface GlobalCollapsableContextProps {
  closeAllCounter: number
  closeAll: () => void
  openAllCounter: number
  openAll: () => void
}

// Создаем контексты
const CollapsableContext = createContext<CollapsableContextProps | null>(null)
const CollapsableGlobalContext =
  createContext<GlobalCollapsableContextProps | null>(null)

/** Пропсы для компонента Group */
interface CollapsableProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

/** Глобальный провайдер для управления операциями открытия/закрытия для всех групп */
export function CollapsableGlobalProvider({ children }: PropsWithChildren) {
  const [closeAllCounter, setCloseAllCounter] = useState(0)
  const [openAllCounter, setOpenAllCounter] = useState(0)

  const closeAll = useCallback(() => {
    setCloseAllCounter(prev => prev + 1)
  }, [])

  const openAll = useCallback(() => {
    setOpenAllCounter(prev => prev + 1)
  }, [])

  return (
    <CollapsableGlobalContext.Provider
      value={{ closeAllCounter, closeAll, openAllCounter, openAll }}
    >
      {children}
    </CollapsableGlobalContext.Provider>
  )
}

/** Кнопка для глобального закрытия всех групп */
export function GlobalCloseTrigger({
  className,
  ...props
}: ComponentProps<typeof Button>) {
  const globalContext = useContext(CollapsableGlobalContext)
  if (!globalContext) {
    console.warn(
      'GlobalCloseTrigger должен использоваться внутри GlobalGroupProvider'
    )
    return null
  }
  return (
    <Button
      className={cn('cursor-pointer', className)}
      size={'icon'}
      {...props}
      onClick={globalContext.closeAll}
    />
  )
}

/** Кнопка для глобального открытия всех групп */
export function GlobalOpenTrigger({
  className,
  ...props
}: ComponentProps<typeof Button>) {
  const globalContext = useContext(CollapsableGlobalContext)
  if (!globalContext) {
    console.warn(
      'GlobalOpenTrigger должен использоваться внутри GlobalCollapsableProvider'
    )
    return null
  }
  return (
    <Button
      size={'icon'}
      className={cn('cursor-pointer', className)}
      {...props}
      onClick={globalContext.openAll}
    />
  )
}

/** Компонент группы, обеспечивающий управление локальным состоянием открытия */
export function Collapsable({
  open,
  defaultOpen = false,
  onOpenChange,
  className,
  children,
  ...props
}: CollapsableProps & ComponentProps<'div'>) {
  // Получаем родительский контекст (если есть) для определения вложенности
  const parentContext = useContext(CollapsableContext)
  // Извлекаем глобальные счетчики из глобального контекста
  // Управление открытия/закрытия с использованием контролируемого состояния
  const [isOpen, setIsOpen] = useControlledState({
    value: open,
    defaultValue: defaultOpen,
    onChange: onOpenChange
  })

  const globalContext = useContext(CollapsableGlobalContext)
  // Заглушка при отсутствии глоабального контекста/провайдера
  const closeAllCounter = globalContext?.closeAllCounter ?? 0
  const openAllCounter = globalContext?.openAllCounter ?? 0
  // Сохраняем предыдущие значения счетчиков
  const prevCloseAllCounter = useRef(closeAllCounter)
  const prevOpenAllCounter = useRef(openAllCounter)

  // Функция для переключения состояния
  const toggleOpenState = useCallback(
    () => setIsOpen(prev => !prev),
    [setIsOpen]
  )

  // Обрабатка глобальных команд открытия/закрытия
  useEffect(() => {
    if (prevCloseAllCounter.current !== closeAllCounter) {
      setIsOpen(false)
      prevCloseAllCounter.current = closeAllCounter
    }
    if (prevOpenAllCounter.current !== openAllCounter) {
      setIsOpen(true)
      prevOpenAllCounter.current = openAllCounter
    }
  }, [closeAllCounter, openAllCounter, setIsOpen])

  return (
    <CollapsableContext.Provider
      value={{
        isOpen,
        setIsOpen,
        toggleOpenState,
        deepLevel: parentContext ? parentContext.deepLevel + 1 : 0
      }}
    >
      <div
        className={cn(className)}
        {...props}
      >
        {children}
      </div>
    </CollapsableContext.Provider>
  )
}

/** Хук для доступа к локальному контексту группы */
export function useCollapsable() {
  const context = useContext(CollapsableContext)
  if (!context) {
    throw new Error('useCollapsable must be used within a Collapsable')
  }
  return context
}

/** Пропсы для триггера группы */
interface CollapsableTriggerProps extends ComponentProps<'button'> {
  asChild?: boolean
}

/** Компонент-триггер для переключения состояния группы */
function CollapsableTrigger({
  asChild = false,
  ...props
}: CollapsableTriggerProps) {
  const { isOpen, toggleOpenState, deepLevel } = useCollapsable()
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot='CollapsableTrigger'
      data-deep={deepLevel}
      onClick={toggleOpenState}
      data-content-state={isOpen ? 'expanded' : 'collapsed'}
      {...props}
    />
  )
}

function CollapsableItem({
  asChild = false,
  ...props
}: ComponentProps<'div'> & { asChild?: boolean }) {
  const { isOpen } = useCollapsable()
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      data-content-state={isOpen ? 'expanded' : 'collapsed'}
      {...props}
    />
  )
}

/** Пропсы для содержимого группы */
interface CollapsableContentProps extends ComponentProps<'div'> {
  asChild?: boolean
}

/** Компонент содержимого, отображающийся при открытой группе */
function CollapsableContent({
  children,
  asChild = false,
  ...props
}: CollapsableContentProps) {
  const { isOpen } = useCollapsable()
  const Comp = asChild ? Slot : 'div'

  if (!isOpen) return null

  return (
    <Comp
      data-content-state={isOpen ? 'expanded' : 'collapsed'}
      {...props}
    >
      {children}
    </Comp>
  )
}

// Присваиваем компоненты к основному компоненту Group для удобства использования
Collapsable.Trigger = CollapsableTrigger
Collapsable.Item = CollapsableItem
Collapsable.Content = CollapsableContent
Collapsable.GlobalClose = GlobalCloseTrigger
Collapsable.GlobalOpen = GlobalOpenTrigger
