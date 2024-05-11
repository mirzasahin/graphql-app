const { ApolloServer } = require("apollo-server");
const typeDefs = require('./graphql/typeDefs/typeDefs.js')
const resolvers = require('./graphql/resolvers/post.js')

const dotenv = require('dotenv')
const db = require('../server/config/db.js')

dotenv.config()
const server = new ApolloServer({ typeDefs, resolvers });


db();
server.listen(5001, () => {
    console.log('Server is running on port: 5001');
});