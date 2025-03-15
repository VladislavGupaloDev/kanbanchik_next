import { gql } from '@/shared/api/graphql/_generated_'

export const RESET_PASSWORD = gql(`
  mutation ResetPassword($data: ResetPasswordInput!) {
    resetPassword(data: $data)
  }
`)
