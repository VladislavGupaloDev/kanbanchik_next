import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AdditionalAuthError = BaseError & {
  __typename?: 'AdditionalAuthError';
  error: Scalars['String']['output'];
  error_code: Scalars['Float']['output'];
  error_description?: Maybe<Scalars['String']['output']>;
  obscured_email?: Maybe<Scalars['String']['output']>;
};

export type BanInfo = {
  __typename?: 'BanInfo';
  date: Scalars['DateTime']['output'];
  permanent: Scalars['Boolean']['output'];
  user: User;
};

export type BaseError = {
  error: Scalars['String']['output'];
  error_code: Scalars['Float']['output'];
};

export type CredentialsError = BaseError & {
  __typename?: 'CredentialsError';
  error: Scalars['String']['output'];
  error_code: Scalars['Float']['output'];
};

export type DeactivateAccountInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
};

export type DeactivateUserError = BaseError & {
  __typename?: 'DeactivateUserError';
  error: Scalars['String']['output'];
  error_code: Scalars['Float']['output'];
  error_description?: Maybe<Scalars['String']['output']>;
};

export type DeactivateUserSuccess = {
  __typename?: 'DeactivateUserSuccess';
  success: Scalars['Boolean']['output'];
};

export type DeviceModel = {
  __typename?: 'DeviceModel';
  browser?: Maybe<Scalars['String']['output']>;
  os?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type DisableTotpError = BaseError & {
  __typename?: 'DisableTotpError';
  error: Scalars['String']['output'];
  error_code: Scalars['Float']['output'];
};

export type DisableTotpSuccess = {
  __typename?: 'DisableTotpSuccess';
  success: Scalars['Boolean']['output'];
};

export type EmailVerifyError = BaseError & {
  __typename?: 'EmailVerifyError';
  error: Scalars['String']['output'];
  error_code: Scalars['Float']['output'];
};

export type EmailVerifySuccess = {
  __typename?: 'EmailVerifySuccess';
  status: Scalars['Boolean']['output'];
};

export type EnableTotpError = BaseError & {
  __typename?: 'EnableTotpError';
  error: Scalars['String']['output'];
  error_code: Scalars['Float']['output'];
};

export type EnableTotpInput = {
  secret: Scalars['String']['input'];
  totpToken: Scalars['String']['input'];
};

export type EnableTotpSuccess = {
  __typename?: 'EnableTotpSuccess';
  success: Scalars['Boolean']['output'];
};

export type FindProfileError = BaseError & {
  __typename?: 'FindProfileError';
  error: Scalars['String']['output'];
  error_code: Scalars['Float']['output'];
};

export type FindProfileInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  login?: InputMaybe<Scalars['String']['input']>;
};

export type FindProfileSuccess = {
  __typename?: 'FindProfileSuccess';
  profile?: Maybe<Profile>;
};

export type FindSessionError = BaseError & {
  __typename?: 'FindSessionError';
  error: Scalars['String']['output'];
  error_code: Scalars['Float']['output'];
  error_description: Scalars['String']['output'];
};

export type FindSessionSuccess = {
  __typename?: 'FindSessionSuccess';
  session?: Maybe<SessionModel>;
};

export type FindSessionsSuccess = {
  __typename?: 'FindSessionsSuccess';
  current_value: Scalars['Float']['output'];
  limit: Scalars['Float']['output'];
  sessions?: Maybe<Array<SessionModel>>;
};

export type FindUserError = BaseError & {
  __typename?: 'FindUserError';
  error: Scalars['String']['output'];
  error_code: Scalars['Float']['output'];
};

export type FindUserResultUnion = FindUserError | FindUserSuccess | UserBanned;

export type FindUserSuccess = {
  __typename?: 'FindUserSuccess';
  user?: Maybe<User>;
};

export type GenerateTotpError = BaseError & {
  __typename?: 'GenerateTotpError';
  error: Scalars['String']['output'];
  error_code: Scalars['Float']['output'];
};

export type GenerateTotpSuccess = {
  __typename?: 'GenerateTotpSuccess';
  qrcodeUrl: Scalars['String']['output'];
  secret: Scalars['String']['output'];
};

export type LocationModel = {
  __typename?: 'LocationModel';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  country_code?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
};

export type LoginInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  totpToken?: InputMaybe<Scalars['String']['input']>;
};

export type LoginResponseUnion = AdditionalAuthError | CredentialsError | LoginSuccess;

export type LoginSuccess = {
  __typename?: 'LoginSuccess';
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  clearSession: Scalars['Boolean']['output'];
  createUser: RegisterResponseUnion;
  deactivateAccount: DeactivateAccountUnion;
  disableTotp: DisableTotpUnion;
  emailVerify: EmailVerifyUnion;
  enableTotp: EnableTotpUnion;
  loginUser: LoginResponseUnion;
  logoutUser: Scalars['Boolean']['output'];
  newPassword: NewPasswordUnion;
  removeSession: RemoveSessionUnion;
  resetPassword: ResetPasswordUnion;
  updateProfile: UpdateProfileUnion;
  updateUserInfo: UpdateUserResponseUnion;
};


export type MutationCreateUserArgs = {
  input: RegisterUserInput;
};


export type MutationDeactivateAccountArgs = {
  input: DeactivateAccountInput;
};


export type MutationEmailVerifyArgs = {
  input: VerificationInput;
};


export type MutationEnableTotpArgs = {
  input: EnableTotpInput;
};


export type MutationLoginUserArgs = {
  input: LoginInput;
};


export type MutationNewPasswordArgs = {
  input: NewPasswordInput;
};


export type MutationRemoveSessionArgs = {
  id: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationUpdateUserInfoArgs = {
  input: UpdateUserInfoInput;
};

export type NewPasswordError = BaseError & {
  __typename?: 'NewPasswordError';
  error: Scalars['String']['output'];
  error_code: Scalars['Float']['output'];
  error_description?: Maybe<Scalars['String']['output']>;
};

export type NewPasswordInput = {
  password: Scalars['String']['input'];
  passwordRepeat: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type NewPasswordSuccess = {
  __typename?: 'NewPasswordSuccess';
  success: Scalars['Boolean']['output'];
};

export type Profile = {
  __typename?: 'Profile';
  birthday?: Maybe<Scalars['DateTime']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  private?: Maybe<Scalars['Boolean']['output']>;
  publicEmail?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  findCurrentSession: FindSessionUnion;
  findProfile: FindProfileUnion;
  findProfileBySession: FindProfileUnion;
  findSessionsByCurrentUser: FindSessionUnion;
  findSessionsByUserId: FindSessionUnion;
  findUserByCurrentSession: FindUserResultUnion;
  findUserByIdOrUsername: FindUserResultUnion;
  generateTotpSecret: GenerateTotpUnion;
  isUsernameAvailable: Scalars['Boolean']['output'];
  sessionCheck: Scalars['Boolean']['output'];
};


export type QueryFindProfileArgs = {
  input: FindProfileInput;
};


export type QueryFindSessionsByUserIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryFindUserByIdOrUsernameArgs = {
  input: GetUserByIdOrUsername;
};


export type QueryIsUsernameAvailableArgs = {
  input: UsernameAvailableInput;
};

export type RegisterError = BaseError & {
  __typename?: 'RegisterError';
  error: Scalars['String']['output'];
  error_code: Scalars['Float']['output'];
  error_description?: Maybe<Scalars['String']['output']>;
};

export type RegisterSuccess = {
  __typename?: 'RegisterSuccess';
  user: User;
};

export type RegisterUserInput = {
  email: Scalars['String']['input'];
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RemoveSessionError = BaseError & {
  __typename?: 'RemoveSessionError';
  error: Scalars['String']['output'];
  error_code: Scalars['Float']['output'];
  sessionId: Scalars['String']['output'];
};

export type RemoveSessionSuccess = {
  __typename?: 'RemoveSessionSuccess';
  session: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
};

export type ResetPasswordError = BaseError & {
  __typename?: 'ResetPasswordError';
  error: Scalars['String']['output'];
  error_code: Scalars['Float']['output'];
  error_description?: Maybe<Scalars['String']['output']>;
};

export type ResetPasswordInput = {
  email: Scalars['String']['input'];
};

export type ResetPasswordSuccess = {
  __typename?: 'ResetPasswordSuccess';
  success: Scalars['Boolean']['output'];
};

export type SessionMetadataModel = {
  __typename?: 'SessionMetadataModel';
  device: DeviceModel;
  ip: Scalars['String']['output'];
  location: LocationModel;
};

export type SessionModel = {
  __typename?: 'SessionModel';
  createdAt: Scalars['String']['output'];
  metadata: SessionMetadataModel;
  sessionId: Scalars['ID']['output'];
  userId: Scalars['String']['output'];
};

export type UpdateProfileError = BaseError & {
  __typename?: 'UpdateProfileError';
  error: Scalars['String']['output'];
  error_code: Scalars['Float']['output'];
};

export type UpdateProfileInput = {
  birthday?: InputMaybe<Scalars['DateTime']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  private?: InputMaybe<Scalars['Boolean']['input']>;
  publicEmail?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProfileSuccess = {
  __typename?: 'UpdateProfileSuccess';
  profile?: Maybe<Profile>;
};

export type UpdateUserError = BaseError & {
  __typename?: 'UpdateUserError';
  error: Scalars['String']['output'];
  error_code: Scalars['Float']['output'];
};

export type UpdateUserInfoInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  login?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserSuccess = {
  __typename?: 'UpdateUserSuccess';
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  deactivatedAt?: Maybe<Scalars['DateTime']['output']>;
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  isTotpEnabled: Scalars['Boolean']['output'];
  login: Scalars['String']['output'];
  profile?: Maybe<Profile>;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserBanned = BaseError & {
  __typename?: 'UserBanned';
  ban_info: BanInfo;
  error: Scalars['String']['output'];
  error_code: Scalars['Float']['output'];
};

export type UsernameAvailableInput = {
  login: Scalars['String']['input'];
};

export type VerificationInput = {
  token: Scalars['String']['input'];
};

export type DeactivateAccountUnion = DeactivateUserError | DeactivateUserSuccess;

export type DisableTotpUnion = DisableTotpError | DisableTotpSuccess;

export type EmailVerifyUnion = EmailVerifyError | EmailVerifySuccess;

export type EnableTotpUnion = EnableTotpError | EnableTotpSuccess;

export type FindProfileUnion = FindProfileError | FindProfileSuccess;

export type FindSessionUnion = FindSessionError | FindSessionSuccess | FindSessionsSuccess;

export type GenerateTotpUnion = GenerateTotpError | GenerateTotpSuccess;

export type GetUserByIdOrUsername = {
  id?: InputMaybe<Scalars['String']['input']>;
  login?: InputMaybe<Scalars['String']['input']>;
};

export type NewPasswordUnion = NewPasswordError | NewPasswordSuccess;

export type RegisterResponseUnion = RegisterError | RegisterSuccess;

export type RemoveSessionUnion = RemoveSessionError | RemoveSessionSuccess;

export type ResetPasswordUnion = ResetPasswordError | ResetPasswordSuccess;

export type UpdateProfileUnion = UpdateProfileError | UpdateProfileSuccess;

export type UpdateUserResponseUnion = UpdateUserError | UpdateUserSuccess;

export type SidebarProfileUserQueryVariables = Exact<{ [key: string]: never; }>;


export type SidebarProfileUserQuery = { __typename?: 'Query', findUserByCurrentSession: { __typename: 'FindUserError', error: string, error_code: number } | { __typename?: 'FindUserSuccess', user?: { __typename: 'User', login: string, displayName: string, email: string } | null } | { __typename?: 'UserBanned' } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', loginUser: { __typename: 'AdditionalAuthError', error: string, error_code: number, obscured_email?: string | null, error_description?: string | null } | { __typename: 'CredentialsError', error: string, error_code: number } | { __typename: 'LoginSuccess', user: { __typename?: 'User', id: string, email: string, login: string } } };

export type RegisterUserMutationVariables = Exact<{
  input: RegisterUserInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', createUser: { __typename: 'RegisterError', error: string, error_code: number, error_description?: string | null } | { __typename: 'RegisterSuccess', user: { __typename: 'User', id: string, email: string, login: string, profile?: { __typename?: 'Profile', fullName?: string | null } | null } } };

export type SessionCheckQueryVariables = Exact<{ [key: string]: never; }>;


export type SessionCheckQuery = { __typename?: 'Query', sessionCheck: boolean };

export type IsUsernameAvailableQueryVariables = Exact<{
  input: UsernameAvailableInput;
}>;


export type IsUsernameAvailableQuery = { __typename?: 'Query', isUsernameAvailable: boolean };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logoutUser: boolean };

export type DisableTotpMutationVariables = Exact<{ [key: string]: never; }>;


export type DisableTotpMutation = { __typename?: 'Mutation', disableTotp: { __typename: 'DisableTotpError', error: string, error_code: number } | { __typename: 'DisableTotpSuccess', success: boolean } };

export type EnableTotpMutationVariables = Exact<{
  input: EnableTotpInput;
}>;


export type EnableTotpMutation = { __typename?: 'Mutation', enableTotp: { __typename: 'EnableTotpError', error: string, error_code: number } | { __typename: 'EnableTotpSuccess', success: boolean } };

export type GenerateTotpSecretQueryVariables = Exact<{ [key: string]: never; }>;


export type GenerateTotpSecretQuery = { __typename?: 'Query', generateTotpSecret: { __typename: 'GenerateTotpError', error: string, error_code: number } | { __typename: 'GenerateTotpSuccess', qrcodeUrl: string, secret: string } };

export type EmailVerifyMutationVariables = Exact<{
  input: VerificationInput;
}>;


export type EmailVerifyMutation = { __typename?: 'Mutation', emailVerify: { __typename: 'EmailVerifyError', error: string, error_code: number } | { __typename: 'EmailVerifySuccess', status: boolean } };

export type NewPasswordMutationVariables = Exact<{
  input: NewPasswordInput;
}>;


export type NewPasswordMutation = { __typename?: 'Mutation', newPassword: { __typename: 'NewPasswordError', error: string, error_code: number, error_description?: string | null } | { __typename: 'NewPasswordSuccess', success: boolean } };

export type ResetPasswordMutationVariables = Exact<{
  input: ResetPasswordInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'ResetPasswordError', error: string, error_code: number, error_description?: string | null } | { __typename?: 'ResetPasswordSuccess', success: boolean } };

export type UpdateProfileInfoMutationVariables = Exact<{
  input: UpdateProfileInput;
}>;


export type UpdateProfileInfoMutation = { __typename?: 'Mutation', updateProfile: { __typename: 'UpdateProfileError', error: string, error_code: number } | { __typename: 'UpdateProfileSuccess', profile?: { __typename: 'Profile', fullName?: string | null, private?: boolean | null, company?: string | null, location?: string | null, birthday?: any | null } | null } };

export type RemoveSessionMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type RemoveSessionMutation = { __typename?: 'Mutation', removeSession: { __typename: 'RemoveSessionError', error: string, error_code: number, sessionId: string } | { __typename: 'RemoveSessionSuccess', status: boolean, session: string } };

export type FindCurrentSessionQueryVariables = Exact<{ [key: string]: never; }>;


export type FindCurrentSessionQuery = { __typename?: 'Query', findCurrentSession: { __typename: 'FindSessionError', error: string, error_code: number } | { __typename: 'FindSessionSuccess', session?: { __typename: 'SessionModel', sessionId: string, userId: string, createdAt: string, metadata: { __typename: 'SessionMetadataModel', ip: string, location: { __typename: 'LocationModel', city?: string | null, country?: string | null, country_code?: string | null, timezone?: string | null, latitude?: number | null, longitude?: number | null }, device: { __typename: 'DeviceModel', type?: string | null, browser?: string | null } } } | null } | { __typename: 'FindSessionsSuccess' } };

export type FindSessionsByCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindSessionsByCurrentUserQuery = { __typename?: 'Query', findSessionsByCurrentUser: { __typename: 'FindSessionError', error: string, error_code: number } | { __typename: 'FindSessionSuccess' } | { __typename: 'FindSessionsSuccess', limit: number, current_value: number, sessions?: Array<{ __typename: 'SessionModel', sessionId: string, userId: string, createdAt: string, metadata: { __typename: 'SessionMetadataModel', ip: string, location: { __typename: 'LocationModel', city?: string | null, country?: string | null, country_code?: string | null, timezone?: string | null, latitude?: number | null, longitude?: number | null }, device: { __typename: 'DeviceModel', type?: string | null, browser?: string | null } } }> | null } };

export type FindSessionsByUserIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type FindSessionsByUserIdQuery = { __typename?: 'Query', findSessionsByUserId: { __typename: 'FindSessionError', error: string, error_code: number } | { __typename?: 'FindSessionSuccess' } | { __typename: 'FindSessionsSuccess', limit: number, current_value: number, sessions?: Array<{ __typename: 'SessionModel', sessionId: string, userId: string, createdAt: string, metadata: { __typename?: 'SessionMetadataModel', ip: string, location: { __typename?: 'LocationModel', city?: string | null, country?: string | null, country_code?: string | null, timezone?: string | null, latitude?: number | null, longitude?: number | null }, device: { __typename?: 'DeviceModel', type?: string | null, browser?: string | null } } }> | null } };

export type UdateUserInfoMutationVariables = Exact<{
  input: UpdateUserInfoInput;
}>;


export type UdateUserInfoMutation = { __typename?: 'Mutation', updateUserInfo: { __typename: 'UpdateUserError', error: string, error_code: number } | { __typename?: 'UpdateUserSuccess', user?: { __typename: 'User', id: string, login: string, email: string, displayName: string, isEmailVerified: boolean, isTotpEnabled: boolean } | null } };

export type FindCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindCurrentUserQuery = { __typename?: 'Query', findUserByCurrentSession: { __typename: 'FindUserError', error: string, error_code: number } | { __typename?: 'FindUserSuccess', user?: { __typename: 'User', id: string, login: string, email: string, displayName: string, isEmailVerified: boolean, isTotpEnabled: boolean } | null } | { __typename?: 'UserBanned' } };

export type FindProfileBySessionQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileBySessionQuery = { __typename?: 'Query', findProfileBySession: { __typename: 'FindProfileError', error: string, error_code: number } | { __typename: 'FindProfileSuccess', profile?: { __typename: 'Profile', userId: string, fullName?: string | null, private?: boolean | null, publicEmail?: string | null, company?: string | null, location?: string | null, birthday?: any | null } | null } };


export const SidebarProfileUserDocument = gql`
    query SidebarProfileUser {
  findUserByCurrentSession {
    ... on FindUserSuccess {
      user {
        login
        displayName
        email
        __typename
      }
    }
    ... on FindUserError {
      error
      error_code
      __typename
    }
  }
}
    `;

/**
 * __useSidebarProfileUserQuery__
 *
 * To run a query within a React component, call `useSidebarProfileUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useSidebarProfileUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSidebarProfileUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useSidebarProfileUserQuery(baseOptions?: Apollo.QueryHookOptions<SidebarProfileUserQuery, SidebarProfileUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SidebarProfileUserQuery, SidebarProfileUserQueryVariables>(SidebarProfileUserDocument, options);
      }
export function useSidebarProfileUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SidebarProfileUserQuery, SidebarProfileUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SidebarProfileUserQuery, SidebarProfileUserQueryVariables>(SidebarProfileUserDocument, options);
        }
export function useSidebarProfileUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SidebarProfileUserQuery, SidebarProfileUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SidebarProfileUserQuery, SidebarProfileUserQueryVariables>(SidebarProfileUserDocument, options);
        }
export type SidebarProfileUserQueryHookResult = ReturnType<typeof useSidebarProfileUserQuery>;
export type SidebarProfileUserLazyQueryHookResult = ReturnType<typeof useSidebarProfileUserLazyQuery>;
export type SidebarProfileUserSuspenseQueryHookResult = ReturnType<typeof useSidebarProfileUserSuspenseQuery>;
export type SidebarProfileUserQueryResult = Apollo.QueryResult<SidebarProfileUserQuery, SidebarProfileUserQueryVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  loginUser(input: $input) {
    ... on LoginSuccess {
      __typename
      user {
        id
        email
        login
      }
    }
    ... on CredentialsError {
      __typename
      error
      error_code
    }
    ... on AdditionalAuthError {
      __typename
      error
      error_code
      obscured_email
      error_description
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($input: RegisterUserInput!) {
  createUser(input: $input) {
    ... on RegisterSuccess {
      __typename
      user {
        __typename
        id
        email
        login
        profile {
          fullName
        }
      }
    }
    ... on RegisterError {
      __typename
      error
      error_code
      error_description
    }
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const SessionCheckDocument = gql`
    query sessionCheck {
  sessionCheck
}
    `;

/**
 * __useSessionCheckQuery__
 *
 * To run a query within a React component, call `useSessionCheckQuery` and pass it any options that fit your needs.
 * When your component renders, `useSessionCheckQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSessionCheckQuery({
 *   variables: {
 *   },
 * });
 */
export function useSessionCheckQuery(baseOptions?: Apollo.QueryHookOptions<SessionCheckQuery, SessionCheckQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SessionCheckQuery, SessionCheckQueryVariables>(SessionCheckDocument, options);
      }
export function useSessionCheckLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SessionCheckQuery, SessionCheckQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SessionCheckQuery, SessionCheckQueryVariables>(SessionCheckDocument, options);
        }
export function useSessionCheckSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SessionCheckQuery, SessionCheckQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SessionCheckQuery, SessionCheckQueryVariables>(SessionCheckDocument, options);
        }
export type SessionCheckQueryHookResult = ReturnType<typeof useSessionCheckQuery>;
export type SessionCheckLazyQueryHookResult = ReturnType<typeof useSessionCheckLazyQuery>;
export type SessionCheckSuspenseQueryHookResult = ReturnType<typeof useSessionCheckSuspenseQuery>;
export type SessionCheckQueryResult = Apollo.QueryResult<SessionCheckQuery, SessionCheckQueryVariables>;
export const IsUsernameAvailableDocument = gql`
    query IsUsernameAvailable($input: UsernameAvailableInput!) {
  isUsernameAvailable(input: $input)
}
    `;

/**
 * __useIsUsernameAvailableQuery__
 *
 * To run a query within a React component, call `useIsUsernameAvailableQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsUsernameAvailableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsUsernameAvailableQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useIsUsernameAvailableQuery(baseOptions: Apollo.QueryHookOptions<IsUsernameAvailableQuery, IsUsernameAvailableQueryVariables> & ({ variables: IsUsernameAvailableQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsUsernameAvailableQuery, IsUsernameAvailableQueryVariables>(IsUsernameAvailableDocument, options);
      }
export function useIsUsernameAvailableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsUsernameAvailableQuery, IsUsernameAvailableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsUsernameAvailableQuery, IsUsernameAvailableQueryVariables>(IsUsernameAvailableDocument, options);
        }
export function useIsUsernameAvailableSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<IsUsernameAvailableQuery, IsUsernameAvailableQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IsUsernameAvailableQuery, IsUsernameAvailableQueryVariables>(IsUsernameAvailableDocument, options);
        }
export type IsUsernameAvailableQueryHookResult = ReturnType<typeof useIsUsernameAvailableQuery>;
export type IsUsernameAvailableLazyQueryHookResult = ReturnType<typeof useIsUsernameAvailableLazyQuery>;
export type IsUsernameAvailableSuspenseQueryHookResult = ReturnType<typeof useIsUsernameAvailableSuspenseQuery>;
export type IsUsernameAvailableQueryResult = Apollo.QueryResult<IsUsernameAvailableQuery, IsUsernameAvailableQueryVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logoutUser
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const DisableTotpDocument = gql`
    mutation DisableTotp {
  disableTotp {
    ... on DisableTotpSuccess {
      __typename
      success
    }
    ... on DisableTotpError {
      __typename
      error
      error_code
    }
  }
}
    `;
export type DisableTotpMutationFn = Apollo.MutationFunction<DisableTotpMutation, DisableTotpMutationVariables>;

/**
 * __useDisableTotpMutation__
 *
 * To run a mutation, you first call `useDisableTotpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDisableTotpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [disableTotpMutation, { data, loading, error }] = useDisableTotpMutation({
 *   variables: {
 *   },
 * });
 */
export function useDisableTotpMutation(baseOptions?: Apollo.MutationHookOptions<DisableTotpMutation, DisableTotpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DisableTotpMutation, DisableTotpMutationVariables>(DisableTotpDocument, options);
      }
export type DisableTotpMutationHookResult = ReturnType<typeof useDisableTotpMutation>;
export type DisableTotpMutationResult = Apollo.MutationResult<DisableTotpMutation>;
export type DisableTotpMutationOptions = Apollo.BaseMutationOptions<DisableTotpMutation, DisableTotpMutationVariables>;
export const EnableTotpDocument = gql`
    mutation EnableTotp($input: EnableTotpInput!) {
  enableTotp(input: $input) {
    ... on EnableTotpSuccess {
      __typename
      success
    }
    ... on EnableTotpError {
      __typename
      error
      error_code
    }
  }
}
    `;
export type EnableTotpMutationFn = Apollo.MutationFunction<EnableTotpMutation, EnableTotpMutationVariables>;

/**
 * __useEnableTotpMutation__
 *
 * To run a mutation, you first call `useEnableTotpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableTotpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableTotpMutation, { data, loading, error }] = useEnableTotpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEnableTotpMutation(baseOptions?: Apollo.MutationHookOptions<EnableTotpMutation, EnableTotpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EnableTotpMutation, EnableTotpMutationVariables>(EnableTotpDocument, options);
      }
export type EnableTotpMutationHookResult = ReturnType<typeof useEnableTotpMutation>;
export type EnableTotpMutationResult = Apollo.MutationResult<EnableTotpMutation>;
export type EnableTotpMutationOptions = Apollo.BaseMutationOptions<EnableTotpMutation, EnableTotpMutationVariables>;
export const GenerateTotpSecretDocument = gql`
    query GenerateTotpSecret {
  generateTotpSecret {
    ... on GenerateTotpSuccess {
      __typename
      qrcodeUrl
      secret
    }
    ... on GenerateTotpError {
      __typename
      error
      error_code
    }
  }
}
    `;

/**
 * __useGenerateTotpSecretQuery__
 *
 * To run a query within a React component, call `useGenerateTotpSecretQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateTotpSecretQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateTotpSecretQuery({
 *   variables: {
 *   },
 * });
 */
export function useGenerateTotpSecretQuery(baseOptions?: Apollo.QueryHookOptions<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>(GenerateTotpSecretDocument, options);
      }
export function useGenerateTotpSecretLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>(GenerateTotpSecretDocument, options);
        }
export function useGenerateTotpSecretSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>(GenerateTotpSecretDocument, options);
        }
export type GenerateTotpSecretQueryHookResult = ReturnType<typeof useGenerateTotpSecretQuery>;
export type GenerateTotpSecretLazyQueryHookResult = ReturnType<typeof useGenerateTotpSecretLazyQuery>;
export type GenerateTotpSecretSuspenseQueryHookResult = ReturnType<typeof useGenerateTotpSecretSuspenseQuery>;
export type GenerateTotpSecretQueryResult = Apollo.QueryResult<GenerateTotpSecretQuery, GenerateTotpSecretQueryVariables>;
export const EmailVerifyDocument = gql`
    mutation EmailVerify($input: VerificationInput!) {
  emailVerify(input: $input) {
    __typename
    ... on EmailVerifySuccess {
      __typename
      status
    }
    ... on EmailVerifyError {
      __typename
      error
      error_code
    }
  }
}
    `;
export type EmailVerifyMutationFn = Apollo.MutationFunction<EmailVerifyMutation, EmailVerifyMutationVariables>;

/**
 * __useEmailVerifyMutation__
 *
 * To run a mutation, you first call `useEmailVerifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEmailVerifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [emailVerifyMutation, { data, loading, error }] = useEmailVerifyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEmailVerifyMutation(baseOptions?: Apollo.MutationHookOptions<EmailVerifyMutation, EmailVerifyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EmailVerifyMutation, EmailVerifyMutationVariables>(EmailVerifyDocument, options);
      }
export type EmailVerifyMutationHookResult = ReturnType<typeof useEmailVerifyMutation>;
export type EmailVerifyMutationResult = Apollo.MutationResult<EmailVerifyMutation>;
export type EmailVerifyMutationOptions = Apollo.BaseMutationOptions<EmailVerifyMutation, EmailVerifyMutationVariables>;
export const NewPasswordDocument = gql`
    mutation NewPassword($input: NewPasswordInput!) {
  newPassword(input: $input) {
    ... on NewPasswordSuccess {
      __typename
      success
    }
    ... on NewPasswordError {
      __typename
      error
      error_code
      error_description
    }
  }
}
    `;
export type NewPasswordMutationFn = Apollo.MutationFunction<NewPasswordMutation, NewPasswordMutationVariables>;

/**
 * __useNewPasswordMutation__
 *
 * To run a mutation, you first call `useNewPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newPasswordMutation, { data, loading, error }] = useNewPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useNewPasswordMutation(baseOptions?: Apollo.MutationHookOptions<NewPasswordMutation, NewPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NewPasswordMutation, NewPasswordMutationVariables>(NewPasswordDocument, options);
      }
export type NewPasswordMutationHookResult = ReturnType<typeof useNewPasswordMutation>;
export type NewPasswordMutationResult = Apollo.MutationResult<NewPasswordMutation>;
export type NewPasswordMutationOptions = Apollo.BaseMutationOptions<NewPasswordMutation, NewPasswordMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($input: ResetPasswordInput!) {
  resetPassword(input: $input) {
    ... on ResetPasswordSuccess {
      success
    }
    ... on ResetPasswordError {
      error
      error_code
      error_description
    }
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const UpdateProfileInfoDocument = gql`
    mutation UpdateProfileInfo($input: UpdateProfileInput!) {
  updateProfile(input: $input) {
    __typename
    ... on UpdateProfileSuccess {
      profile {
        __typename
        fullName
        private
        company
        location
        birthday
      }
    }
    ... on UpdateProfileError {
      __typename
      error
      error_code
    }
  }
}
    `;
export type UpdateProfileInfoMutationFn = Apollo.MutationFunction<UpdateProfileInfoMutation, UpdateProfileInfoMutationVariables>;

/**
 * __useUpdateProfileInfoMutation__
 *
 * To run a mutation, you first call `useUpdateProfileInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileInfoMutation, { data, loading, error }] = useUpdateProfileInfoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProfileInfoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileInfoMutation, UpdateProfileInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileInfoMutation, UpdateProfileInfoMutationVariables>(UpdateProfileInfoDocument, options);
      }
export type UpdateProfileInfoMutationHookResult = ReturnType<typeof useUpdateProfileInfoMutation>;
export type UpdateProfileInfoMutationResult = Apollo.MutationResult<UpdateProfileInfoMutation>;
export type UpdateProfileInfoMutationOptions = Apollo.BaseMutationOptions<UpdateProfileInfoMutation, UpdateProfileInfoMutationVariables>;
export const RemoveSessionDocument = gql`
    mutation RemoveSession($id: String!) {
  removeSession(id: $id) {
    ... on RemoveSessionSuccess {
      __typename
      status
      session
    }
    ... on RemoveSessionError {
      __typename
      error
      error_code
      sessionId
    }
  }
}
    `;
export type RemoveSessionMutationFn = Apollo.MutationFunction<RemoveSessionMutation, RemoveSessionMutationVariables>;

/**
 * __useRemoveSessionMutation__
 *
 * To run a mutation, you first call `useRemoveSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSessionMutation, { data, loading, error }] = useRemoveSessionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveSessionMutation(baseOptions?: Apollo.MutationHookOptions<RemoveSessionMutation, RemoveSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveSessionMutation, RemoveSessionMutationVariables>(RemoveSessionDocument, options);
      }
export type RemoveSessionMutationHookResult = ReturnType<typeof useRemoveSessionMutation>;
export type RemoveSessionMutationResult = Apollo.MutationResult<RemoveSessionMutation>;
export type RemoveSessionMutationOptions = Apollo.BaseMutationOptions<RemoveSessionMutation, RemoveSessionMutationVariables>;
export const FindCurrentSessionDocument = gql`
    query FindCurrentSession {
  findCurrentSession {
    __typename
    ... on FindSessionSuccess {
      session {
        __typename
        sessionId
        userId
        createdAt
        metadata {
          __typename
          ip
          location {
            __typename
            city
            country
            country_code
            timezone
            latitude
            longitude
          }
          device {
            __typename
            type
            browser
          }
        }
      }
    }
    ... on FindSessionError {
      __typename
      error
      error_code
    }
    ... on BaseError {
      error
      error_code
      __typename
    }
  }
}
    `;

/**
 * __useFindCurrentSessionQuery__
 *
 * To run a query within a React component, call `useFindCurrentSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCurrentSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCurrentSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindCurrentSessionQuery(baseOptions?: Apollo.QueryHookOptions<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>(FindCurrentSessionDocument, options);
      }
export function useFindCurrentSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>(FindCurrentSessionDocument, options);
        }
export function useFindCurrentSessionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>(FindCurrentSessionDocument, options);
        }
export type FindCurrentSessionQueryHookResult = ReturnType<typeof useFindCurrentSessionQuery>;
export type FindCurrentSessionLazyQueryHookResult = ReturnType<typeof useFindCurrentSessionLazyQuery>;
export type FindCurrentSessionSuspenseQueryHookResult = ReturnType<typeof useFindCurrentSessionSuspenseQuery>;
export type FindCurrentSessionQueryResult = Apollo.QueryResult<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>;
export const FindSessionsByCurrentUserDocument = gql`
    query FindSessionsByCurrentUser {
  findSessionsByCurrentUser {
    __typename
    ... on FindSessionsSuccess {
      sessions {
        __typename
        sessionId
        userId
        createdAt
        metadata {
          __typename
          ip
          location {
            __typename
            city
            country
            country_code
            timezone
            latitude
            longitude
          }
          device {
            __typename
            type
            browser
          }
        }
      }
      limit
      current_value
    }
    ... on FindSessionError {
      __typename
      error
      error_code
    }
    ... on BaseError {
      error
      error_code
      __typename
    }
  }
}
    `;

/**
 * __useFindSessionsByCurrentUserQuery__
 *
 * To run a query within a React component, call `useFindSessionsByCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSessionsByCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSessionsByCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindSessionsByCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<FindSessionsByCurrentUserQuery, FindSessionsByCurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSessionsByCurrentUserQuery, FindSessionsByCurrentUserQueryVariables>(FindSessionsByCurrentUserDocument, options);
      }
export function useFindSessionsByCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSessionsByCurrentUserQuery, FindSessionsByCurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSessionsByCurrentUserQuery, FindSessionsByCurrentUserQueryVariables>(FindSessionsByCurrentUserDocument, options);
        }
export function useFindSessionsByCurrentUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindSessionsByCurrentUserQuery, FindSessionsByCurrentUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindSessionsByCurrentUserQuery, FindSessionsByCurrentUserQueryVariables>(FindSessionsByCurrentUserDocument, options);
        }
export type FindSessionsByCurrentUserQueryHookResult = ReturnType<typeof useFindSessionsByCurrentUserQuery>;
export type FindSessionsByCurrentUserLazyQueryHookResult = ReturnType<typeof useFindSessionsByCurrentUserLazyQuery>;
export type FindSessionsByCurrentUserSuspenseQueryHookResult = ReturnType<typeof useFindSessionsByCurrentUserSuspenseQuery>;
export type FindSessionsByCurrentUserQueryResult = Apollo.QueryResult<FindSessionsByCurrentUserQuery, FindSessionsByCurrentUserQueryVariables>;
export const FindSessionsByUserIdDocument = gql`
    query FindSessionsByUserId($userId: String!) {
  findSessionsByUserId(userId: $userId) {
    ... on FindSessionsSuccess {
      __typename
      sessions {
        __typename
        sessionId
        userId
        createdAt
        metadata {
          ip
          location {
            city
            country
            country_code
            timezone
            latitude
            longitude
          }
          device {
            type
            browser
          }
        }
      }
      limit
      current_value
    }
    ... on FindSessionError {
      __typename
      error
      error_code
    }
  }
}
    `;

/**
 * __useFindSessionsByUserIdQuery__
 *
 * To run a query within a React component, call `useFindSessionsByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSessionsByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSessionsByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFindSessionsByUserIdQuery(baseOptions: Apollo.QueryHookOptions<FindSessionsByUserIdQuery, FindSessionsByUserIdQueryVariables> & ({ variables: FindSessionsByUserIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSessionsByUserIdQuery, FindSessionsByUserIdQueryVariables>(FindSessionsByUserIdDocument, options);
      }
export function useFindSessionsByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSessionsByUserIdQuery, FindSessionsByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSessionsByUserIdQuery, FindSessionsByUserIdQueryVariables>(FindSessionsByUserIdDocument, options);
        }
export function useFindSessionsByUserIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindSessionsByUserIdQuery, FindSessionsByUserIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindSessionsByUserIdQuery, FindSessionsByUserIdQueryVariables>(FindSessionsByUserIdDocument, options);
        }
export type FindSessionsByUserIdQueryHookResult = ReturnType<typeof useFindSessionsByUserIdQuery>;
export type FindSessionsByUserIdLazyQueryHookResult = ReturnType<typeof useFindSessionsByUserIdLazyQuery>;
export type FindSessionsByUserIdSuspenseQueryHookResult = ReturnType<typeof useFindSessionsByUserIdSuspenseQuery>;
export type FindSessionsByUserIdQueryResult = Apollo.QueryResult<FindSessionsByUserIdQuery, FindSessionsByUserIdQueryVariables>;
export const UdateUserInfoDocument = gql`
    mutation UdateUserInfo($input: UpdateUserInfoInput!) {
  updateUserInfo(input: $input) {
    ... on UpdateUserSuccess {
      user {
        id
        login
        email
        displayName
        isEmailVerified
        isTotpEnabled
        __typename
      }
    }
    ... on UpdateUserError {
      error
      error_code
      __typename
    }
  }
}
    `;
export type UdateUserInfoMutationFn = Apollo.MutationFunction<UdateUserInfoMutation, UdateUserInfoMutationVariables>;

/**
 * __useUdateUserInfoMutation__
 *
 * To run a mutation, you first call `useUdateUserInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUdateUserInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [udateUserInfoMutation, { data, loading, error }] = useUdateUserInfoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUdateUserInfoMutation(baseOptions?: Apollo.MutationHookOptions<UdateUserInfoMutation, UdateUserInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UdateUserInfoMutation, UdateUserInfoMutationVariables>(UdateUserInfoDocument, options);
      }
export type UdateUserInfoMutationHookResult = ReturnType<typeof useUdateUserInfoMutation>;
export type UdateUserInfoMutationResult = Apollo.MutationResult<UdateUserInfoMutation>;
export type UdateUserInfoMutationOptions = Apollo.BaseMutationOptions<UdateUserInfoMutation, UdateUserInfoMutationVariables>;
export const FindCurrentUserDocument = gql`
    query FindCurrentUser {
  findUserByCurrentSession {
    ... on FindUserSuccess {
      user {
        id
        login
        email
        displayName
        isEmailVerified
        isTotpEnabled
        __typename
      }
    }
    ... on FindUserError {
      error
      error_code
      __typename
    }
  }
}
    `;

/**
 * __useFindCurrentUserQuery__
 *
 * To run a query within a React component, call `useFindCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<FindCurrentUserQuery, FindCurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCurrentUserQuery, FindCurrentUserQueryVariables>(FindCurrentUserDocument, options);
      }
export function useFindCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCurrentUserQuery, FindCurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCurrentUserQuery, FindCurrentUserQueryVariables>(FindCurrentUserDocument, options);
        }
export function useFindCurrentUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindCurrentUserQuery, FindCurrentUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindCurrentUserQuery, FindCurrentUserQueryVariables>(FindCurrentUserDocument, options);
        }
export type FindCurrentUserQueryHookResult = ReturnType<typeof useFindCurrentUserQuery>;
export type FindCurrentUserLazyQueryHookResult = ReturnType<typeof useFindCurrentUserLazyQuery>;
export type FindCurrentUserSuspenseQueryHookResult = ReturnType<typeof useFindCurrentUserSuspenseQuery>;
export type FindCurrentUserQueryResult = Apollo.QueryResult<FindCurrentUserQuery, FindCurrentUserQueryVariables>;
export const FindProfileBySessionDocument = gql`
    query FindProfileBySession {
  findProfileBySession {
    __typename
    ... on FindProfileSuccess {
      profile {
        __typename
        userId
        fullName
        private
        publicEmail
        company
        location
        birthday
      }
    }
    ... on FindProfileError {
      __typename
      error
      error_code
    }
  }
}
    `;

/**
 * __useFindProfileBySessionQuery__
 *
 * To run a query within a React component, call `useFindProfileBySessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProfileBySessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProfileBySessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindProfileBySessionQuery(baseOptions?: Apollo.QueryHookOptions<FindProfileBySessionQuery, FindProfileBySessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindProfileBySessionQuery, FindProfileBySessionQueryVariables>(FindProfileBySessionDocument, options);
      }
export function useFindProfileBySessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindProfileBySessionQuery, FindProfileBySessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindProfileBySessionQuery, FindProfileBySessionQueryVariables>(FindProfileBySessionDocument, options);
        }
export function useFindProfileBySessionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindProfileBySessionQuery, FindProfileBySessionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindProfileBySessionQuery, FindProfileBySessionQueryVariables>(FindProfileBySessionDocument, options);
        }
export type FindProfileBySessionQueryHookResult = ReturnType<typeof useFindProfileBySessionQuery>;
export type FindProfileBySessionLazyQueryHookResult = ReturnType<typeof useFindProfileBySessionLazyQuery>;
export type FindProfileBySessionSuspenseQueryHookResult = ReturnType<typeof useFindProfileBySessionSuspenseQuery>;
export type FindProfileBySessionQueryResult = Apollo.QueryResult<FindProfileBySessionQuery, FindProfileBySessionQueryVariables>;