import { gql } from '@/shared/api/graphql/_generated_'

export const LOGOUT_USER = gql(`
query LogoutUser {
  logoutUser
}
`)
