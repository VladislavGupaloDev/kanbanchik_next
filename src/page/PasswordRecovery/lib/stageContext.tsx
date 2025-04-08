'use client'

import { PropsWithChildren, createContext, useContext, useState } from 'react'

type PasswordRecoveryStage = 'form' | 'success'
interface PasswordRecoveryContextProps {
  stage: PasswordRecoveryStage
  setStage: (stage: PasswordRecoveryStage) => void
  email: string
  setEmail: (email: string) => void
}

const PasswordRecoveryContext =
  createContext<PasswordRecoveryContextProps | null>(null)

export function PasswordRecoveryProvider({ children }: PropsWithChildren) {
  const [stage, setStage] = useState<PasswordRecoveryStage>('form')
  const [email, setEmail] = useState('')
  return (
    <PasswordRecoveryContext.Provider
      value={{ stage, setStage, email, setEmail }}
    >
      {children}
    </PasswordRecoveryContext.Provider>
  )
}

export function usePasswordRecovery() {
  const context = useContext(PasswordRecoveryContext)
  if (!context) {
    throw new Error(
      'usePasswordRecovery must be used within a PasswordRecoveryProvider'
    )
  }
  return context
}
