import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={'flex h-full min-h-screen w-full items-center justify-center'}
    >
      {children}
    </div>
  )
}
