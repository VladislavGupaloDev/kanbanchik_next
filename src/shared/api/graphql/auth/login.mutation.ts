import { gql } from '@/shared/api/graphql/_generated_'

export const LOGIN = gql(`mutation Login($data: LoginInput!) {
  loginUser(data: $data){
    username
    email
  }
}`)
