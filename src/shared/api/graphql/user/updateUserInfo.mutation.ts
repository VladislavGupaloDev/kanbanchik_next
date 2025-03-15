import { gql } from '@apollo/client'

export const UPDATE_USER_INFO = gql(`
  mutation UpdateUserInfo($input: UpdateUserInfoInput!) {
    updateUserInfo(input: $input){
        username
        email
    }
  }
`)
