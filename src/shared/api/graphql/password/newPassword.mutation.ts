import { gql } from '@/shared/api/graphql/_generated_'

export const NEW_PASSWORD = gql(`
  mutation NewPassword($data: NewPasswordInput!) {
    newPassword(data: $data)
  }
`)
