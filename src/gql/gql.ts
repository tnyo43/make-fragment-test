/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment Profile_user_1 on User {\n    id\n    name\n    avatarUrl\n  }\n": types.Profile_User_1FragmentDoc,
    "\n  fragment Profile_user_2 on User {\n    id\n    name\n    email\n  }\n": types.Profile_User_2FragmentDoc,
    "\n  fragment Profile_query on Query {\n    currentUser {\n      ...Profile_user_1\n      ...Profile_user_2\n    }\n  }\n": types.Profile_QueryFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Profile_user_1 on User {\n    id\n    name\n    avatarUrl\n  }\n"): (typeof documents)["\n  fragment Profile_user_1 on User {\n    id\n    name\n    avatarUrl\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Profile_user_2 on User {\n    id\n    name\n    email\n  }\n"): (typeof documents)["\n  fragment Profile_user_2 on User {\n    id\n    name\n    email\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Profile_query on Query {\n    currentUser {\n      ...Profile_user_1\n      ...Profile_user_2\n    }\n  }\n"): (typeof documents)["\n  fragment Profile_query on Query {\n    currentUser {\n      ...Profile_user_1\n      ...Profile_user_2\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;