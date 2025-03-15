import { gql } from '@apollo/client'

export const VERIFY_EMAIL = gql`
  mutation VerifyAccount($data: VerificationInput!) {
    verifyAccount(data: $data)
  }
`
