const { gql } = require("@apollo/client");

export const GET_POSTS = gql`
  query GetPosts {
    getPosts {
      id
      title
      description
      url
    }
  }
`;
