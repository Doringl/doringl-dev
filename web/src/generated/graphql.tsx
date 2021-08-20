import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addProject: Project;
  addSkill: Skill;
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  updateUserType: UserResponse;
};


export type MutationAddProjectArgs = {
  inputs: ProjectInputs;
};


export type MutationAddSkillArgs = {
  skillName: Scalars['String'];
};


export type MutationRegisterArgs = {
  input: UserInputs;
};


export type MutationLoginArgs = {
  input: UserInputs;
};


export type MutationUpdateUserTypeArgs = {
  inputs: UserTypeCheck;
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['Float'];
  projectName: Scalars['String'];
  projectStatus: Scalars['String'];
  projectGitHubLink: Scalars['String'];
};

export type ProjectInputs = {
  projectName: Scalars['String'];
  projectStatus: Scalars['String'];
  projectGitHubLink: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  projects: Array<Project>;
  skills: Array<Skill>;
  savedUser?: Maybe<User>;
};

export type Skill = {
  __typename?: 'Skill';
  id: Scalars['Float'];
  skillName: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  userName: Scalars['String'];
  email: Scalars['String'];
  userType: Scalars['String'];
};

export type UserInputs = {
  userName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UserTypeCheck = {
  id: Scalars['Float'];
  userName: Scalars['String'];
  userType: Scalars['Boolean'];
};

export type AddProjectMutationVariables = Exact<{
  projectName: Scalars['String'];
  projectStatus: Scalars['String'];
  projectGitHubLink: Scalars['String'];
}>;


export type AddProjectMutation = (
  { __typename?: 'Mutation' }
  & { addProject: (
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'projectName' | 'projectStatus' | 'projectGitHubLink'>
  ) }
);

export type AddSkillMutationVariables = Exact<{
  skillName: Scalars['String'];
}>;


export type AddSkillMutation = (
  { __typename?: 'Mutation' }
  & { addSkill: (
    { __typename?: 'Skill' }
    & Pick<Skill, 'id' | 'skillName'>
  ) }
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'createdAt' | 'updatedAt' | 'userName' | 'email' | 'userType'>
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'createdAt' | 'updatedAt' | 'userName' | 'email'>
    )> }
  ) }
);

export type UpdateUserTypeMutationVariables = Exact<{
  id: Scalars['Float'];
  userName: Scalars['String'];
  userType: Scalars['Boolean'];
}>;


export type UpdateUserTypeMutation = (
  { __typename?: 'Mutation' }
  & { updateUserType: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'userName' | 'userType'>
    )> }
  ) }
);

export type GetProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProjectsQuery = (
  { __typename?: 'Query' }
  & { projects: Array<(
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'projectName' | 'projectStatus' | 'projectGitHubLink'>
  )> }
);

export type GetSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSkillsQuery = (
  { __typename?: 'Query' }
  & { skills: Array<(
    { __typename?: 'Skill' }
    & Pick<Skill, 'id' | 'skillName'>
  )> }
);

export type SavedUserQueryVariables = Exact<{ [key: string]: never; }>;


export type SavedUserQuery = (
  { __typename?: 'Query' }
  & { savedUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'userName' | 'email' | 'userType'>
  )> }
);


export const AddProjectDocument = gql`
    mutation AddProject($projectName: String!, $projectStatus: String!, $projectGitHubLink: String!) {
  addProject(
    inputs: {projectName: $projectName, projectStatus: $projectStatus, projectGitHubLink: $projectGitHubLink}
  ) {
    id
    projectName
    projectStatus
    projectGitHubLink
  }
}
    `;
export type AddProjectMutationFn = Apollo.MutationFunction<AddProjectMutation, AddProjectMutationVariables>;

/**
 * __useAddProjectMutation__
 *
 * To run a mutation, you first call `useAddProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProjectMutation, { data, loading, error }] = useAddProjectMutation({
 *   variables: {
 *      projectName: // value for 'projectName'
 *      projectStatus: // value for 'projectStatus'
 *      projectGitHubLink: // value for 'projectGitHubLink'
 *   },
 * });
 */
export function useAddProjectMutation(baseOptions?: Apollo.MutationHookOptions<AddProjectMutation, AddProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProjectMutation, AddProjectMutationVariables>(AddProjectDocument, options);
      }
export type AddProjectMutationHookResult = ReturnType<typeof useAddProjectMutation>;
export type AddProjectMutationResult = Apollo.MutationResult<AddProjectMutation>;
export type AddProjectMutationOptions = Apollo.BaseMutationOptions<AddProjectMutation, AddProjectMutationVariables>;
export const AddSkillDocument = gql`
    mutation AddSkill($skillName: String!) {
  addSkill(skillName: $skillName) {
    id
    skillName
  }
}
    `;
export type AddSkillMutationFn = Apollo.MutationFunction<AddSkillMutation, AddSkillMutationVariables>;

/**
 * __useAddSkillMutation__
 *
 * To run a mutation, you first call `useAddSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSkillMutation, { data, loading, error }] = useAddSkillMutation({
 *   variables: {
 *      skillName: // value for 'skillName'
 *   },
 * });
 */
export function useAddSkillMutation(baseOptions?: Apollo.MutationHookOptions<AddSkillMutation, AddSkillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddSkillMutation, AddSkillMutationVariables>(AddSkillDocument, options);
      }
export type AddSkillMutationHookResult = ReturnType<typeof useAddSkillMutation>;
export type AddSkillMutationResult = Apollo.MutationResult<AddSkillMutation>;
export type AddSkillMutationOptions = Apollo.BaseMutationOptions<AddSkillMutation, AddSkillMutationVariables>;
export const LoginDocument = gql`
    mutation Login($username: String!, $email: String!, $password: String!) {
  login(input: {userName: $username, email: $email, password: $password}) {
    errors {
      field
      message
    }
    user {
      id
      createdAt
      updatedAt
      userName
      email
      userType
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
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
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
export const LogoutDocument = gql`
    mutation Logout {
  logout
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
export const RegisterDocument = gql`
    mutation Register($username: String!, $email: String!, $password: String!) {
  register(input: {userName: $username, email: $email, password: $password}) {
    errors {
      field
      message
    }
    user {
      createdAt
      updatedAt
      userName
      email
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateUserTypeDocument = gql`
    mutation UpdateUserType($id: Float!, $userName: String!, $userType: Boolean!) {
  updateUserType(inputs: {id: $id, userName: $userName, userType: $userType}) {
    errors {
      field
      message
    }
    user {
      id
      email
      userName
      userType
    }
  }
}
    `;
export type UpdateUserTypeMutationFn = Apollo.MutationFunction<UpdateUserTypeMutation, UpdateUserTypeMutationVariables>;

/**
 * __useUpdateUserTypeMutation__
 *
 * To run a mutation, you first call `useUpdateUserTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserTypeMutation, { data, loading, error }] = useUpdateUserTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      userName: // value for 'userName'
 *      userType: // value for 'userType'
 *   },
 * });
 */
export function useUpdateUserTypeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserTypeMutation, UpdateUserTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserTypeMutation, UpdateUserTypeMutationVariables>(UpdateUserTypeDocument, options);
      }
export type UpdateUserTypeMutationHookResult = ReturnType<typeof useUpdateUserTypeMutation>;
export type UpdateUserTypeMutationResult = Apollo.MutationResult<UpdateUserTypeMutation>;
export type UpdateUserTypeMutationOptions = Apollo.BaseMutationOptions<UpdateUserTypeMutation, UpdateUserTypeMutationVariables>;
export const GetProjectsDocument = gql`
    query getProjects {
  projects {
    id
    projectName
    projectStatus
    projectGitHubLink
  }
}
    `;

/**
 * __useGetProjectsQuery__
 *
 * To run a query within a React component, call `useGetProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProjectsQuery(baseOptions?: Apollo.QueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
      }
export function useGetProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
        }
export type GetProjectsQueryHookResult = ReturnType<typeof useGetProjectsQuery>;
export type GetProjectsLazyQueryHookResult = ReturnType<typeof useGetProjectsLazyQuery>;
export type GetProjectsQueryResult = Apollo.QueryResult<GetProjectsQuery, GetProjectsQueryVariables>;
export const GetSkillsDocument = gql`
    query getSkills {
  skills {
    id
    skillName
  }
}
    `;

/**
 * __useGetSkillsQuery__
 *
 * To run a query within a React component, call `useGetSkillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSkillsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSkillsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSkillsQuery(baseOptions?: Apollo.QueryHookOptions<GetSkillsQuery, GetSkillsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSkillsQuery, GetSkillsQueryVariables>(GetSkillsDocument, options);
      }
export function useGetSkillsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSkillsQuery, GetSkillsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSkillsQuery, GetSkillsQueryVariables>(GetSkillsDocument, options);
        }
export type GetSkillsQueryHookResult = ReturnType<typeof useGetSkillsQuery>;
export type GetSkillsLazyQueryHookResult = ReturnType<typeof useGetSkillsLazyQuery>;
export type GetSkillsQueryResult = Apollo.QueryResult<GetSkillsQuery, GetSkillsQueryVariables>;
export const SavedUserDocument = gql`
    query SavedUser {
  savedUser {
    id
    userName
    email
    userType
  }
}
    `;

/**
 * __useSavedUserQuery__
 *
 * To run a query within a React component, call `useSavedUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useSavedUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSavedUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useSavedUserQuery(baseOptions?: Apollo.QueryHookOptions<SavedUserQuery, SavedUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SavedUserQuery, SavedUserQueryVariables>(SavedUserDocument, options);
      }
export function useSavedUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SavedUserQuery, SavedUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SavedUserQuery, SavedUserQueryVariables>(SavedUserDocument, options);
        }
export type SavedUserQueryHookResult = ReturnType<typeof useSavedUserQuery>;
export type SavedUserLazyQueryHookResult = ReturnType<typeof useSavedUserLazyQuery>;
export type SavedUserQueryResult = Apollo.QueryResult<SavedUserQuery, SavedUserQueryVariables>;