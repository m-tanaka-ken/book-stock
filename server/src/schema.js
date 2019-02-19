const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    books: [Book]
    book(id: ID!): Book
    me: User!
  }

  type Mutations {
    createBookById(id: ID): BookCreateResponse
    updateBookById(id: ID, status: Number): BookUpdateResponse
    login(email: String): String
  }

  type Book {
    id: Number
    url: String
    name: String
    created_at: String
    borrowed_at: String
    returned_at: String
    last_borrowed_user: String
  }

  type BookCreateResponse {
    success: Boolean!
    book: Book
  }

  type BookUpdateResponse {
    success: Boolean!
    book: Book
  }

  type User {
    name: String
    email: String
    token: String
  }
`;

module.exports = typeDefs;
