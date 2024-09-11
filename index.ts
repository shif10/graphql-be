// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/standalone";
// import { graphql } from "graphql";
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const cors = require("cors");

// Your type definitions
// const typeDefs = `
//   type Todo {
//     id: ID!
//     title: String!
//     completed: Boolean
//     user:User
//   }

//   type User {
//     id: ID!
//     name: String!
//     username: String!
//     email: String!
//     phone: String!
//     website: String!
//   }

//   type Query {
//     getTodos: [Todo]
//     getAllUsers: [User]
//     getUserById(id: ID!): User
//   }
// `;

// // Dummy data
// const users = [
//   {
//     id: "1",
//     name: "John Doe",
//     username: "john",
//     email: "john@example.com",
//     phone: "1234567890",
//     website: "johndoe.com",
//   },
//   {
//     id: "2",
//     name: "Jane Smith",
//     username: "jane",
//     email: "jane@example.com",
//     phone: "0987654321",
//     website: "janesmith.com",
//   },
// ];
// const todos = [
//   { id: "1", title: "Todo 1", completed: false, name: "John Doe" },
//   { id: "2", title: "Todo 2", completed: true, name: "Jane Smith" },
// ];

// // Resolvers
// const resolvers = {
//   Query: {
//     getTodos: async () => todos,
//     getAllUsers: async () => users,
//     getUserById: async (_, { id }) => {
//       const user = users.find((user) => user.id === id);
//       if (!user) {
//         throw new Error("User not found");
//       }
//       return user;
//     },
//   },
// };

// async function startServer() {
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     csrfPrevention: false, // Disable CSRF for development
//   });

//   const { url } = await startStandaloneServer(server, {
//     listen: { port: 4000 },
//   });

//   console.log(`🚀 Server ready at: ${url}`);
// }

// startServer();

const app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // GraphiQL for testing queries
  })
);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/graphql`);
});
