const { ApolloServer } = require("apollo-server");
const typeDefs = require('./graphql/typeDefs/typeDefs')
const resolvers = require('./graphql/resolvers/post')

const dotenv = require('dotenv')
const db = require('../server/config/db')

dotenv.config()
const server = new ApolloServer({ typeDefs, resolvers });


db();
server.listen(5001, () => {
    console.log('Server is running on port: 5001');
});