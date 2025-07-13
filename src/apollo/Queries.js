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
