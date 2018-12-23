const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    sample: String!
  }
`;

module.exports = typeDefs;
