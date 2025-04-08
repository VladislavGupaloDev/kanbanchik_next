import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export function createServerApolloClient() {
  return new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: 'http://localhost:4000/graphql',
      credentials: 'include',
      fetch: fetch
    }),
    cache: new InMemoryCache()
  })
}
