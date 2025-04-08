'use client'

import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

const HttpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include'
})

export const client = new ApolloClient({
  link: HttpLink,
  cache: new InMemoryCache(),
  credentials: 'include'
})
