import { gql } from '@/shared/api/graphql/_generated_'

export const FIND_PROFILE = gql(`
  query FindProfile($data: FindProfileInput!) {
    findProfile(data: $data) {
      fullName
      publicEmail
      private
      company
      location
      birthday
    }
  }
`)
