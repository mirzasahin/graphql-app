const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    books: String
  }
`;

const resolvers = {
  Query: {
    books: () => "graphql test...",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(5000, () => {
    console.log('Server is running on port: 5000 ');
});