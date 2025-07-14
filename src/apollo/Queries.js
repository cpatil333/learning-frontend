import { gql } from "@apollo/client";

export const USER_LIST = gql`
  query {
    users {
      id
      fullName
      email
      role
    }
  }
`;

export const GET_USER_ID = gql`
  query ($userById: ID!) {
    userById(id: $userById) {
      id
      fullName
      email
      password
      role
    }
  }
`;
