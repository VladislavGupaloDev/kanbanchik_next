import { gql } from '@/shared/api/graphql/_generated_'

export const CREATE_USER = gql(`mutation CreateUser($data: CreateUserInput!) {
  createUser(data: $data){
    username
    email
  }
}`)
