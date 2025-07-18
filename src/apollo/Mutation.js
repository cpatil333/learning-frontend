import { gql } from "@apollo/client";

export const USER_lOGIN = gql`
  mutation ($userLogin: LoginInput!) {
    login(userLogin: $userLogin) {
      user {
        id
        fullName
        role
      }
      token
    }
  }
`;

export const USER_REGISTER = gql`
  mutation ($register: UserInput!) {
    signup(register: $register) {
      id
      fullName
      email
      role
    }
  }
`;

export const USER_UPDATE = gql`
  mutation ($updateRegister: UpdateUserInput!) {
    updateUser(updateRegister: $updateRegister) {
      id
      fullName
      email
      role
    }
  }
`;

