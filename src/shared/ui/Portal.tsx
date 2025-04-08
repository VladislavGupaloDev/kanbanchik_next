import { ComponentProps, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export function Portal({
  container,
  ...props
}: ComponentProps<'div'> & { container?: Element | DocumentFragment | null }) {
  const [mounted, setMounted] = useState(false)
  useLayoutEffect(() => setMounted(true), [])
  const parentContainer = container || (mounted && globalThis?.document?.body)

  return parentContainer
    ? createPortal(<div {...props} />, parentContainer)
    : null
}
