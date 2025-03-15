import { gql } from '@/shared/api/graphql/_generated_'

export const FIND_USER = gql(`
  query FindUser {
    findUser {
      id
      email
      username
    }
  }
`)
