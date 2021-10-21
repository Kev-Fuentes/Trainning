const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
type Query {
    users:[User]
}
type User {
    id:ID
    name:String!
    age:Int!
    weight:Float
}

type Mutation {
    createUser(input: UserInput):User
    updateUser(_id:ID, input:UserInput): User
    deleteUser(_id:ID): User
}
input UserInput {
     name:String!
     age:Int!
     weight:Float
}
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = schema;
