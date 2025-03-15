'use client'

import { client } from '@/core/apollo/config'
import { ApolloProvider } from '@apollo/client'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function ApolloClientProvider({ children }: Props) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
