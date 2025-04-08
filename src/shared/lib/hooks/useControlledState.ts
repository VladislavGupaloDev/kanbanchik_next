'use client'

import { useCallback, useState } from 'react'

type SetStateAction<T> = T | ((prevState: T) => T)

export function useControlledState<T>({
  value,
  defaultValue,
  onChange
}: {
  value?: T
  defaultValue?: T
  onChange?: (value: T) => void
}) {
  const [state, setState] = useState(defaultValue as T)
  const isControlled = value !== undefined

  const currentValue = isControlled ? value! : state

  const setValue = useCallback(
    (newValue: SetStateAction<T>) => {
      if (!isControlled) {
        setState(prev =>
          typeof newValue === 'function'
            ? (newValue as (prev: T) => T)(prev)
            : newValue
        )
      }

      const resolvedValue =
        typeof newValue === 'function'
          ? (newValue as (prev: T) => T)(currentValue)
          : newValue

      onChange?.(resolvedValue)
    },
    [isControlled, currentValue, onChange]
  )

  return [currentValue, setValue] as const
}
