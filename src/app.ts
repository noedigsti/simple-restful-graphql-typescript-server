import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/helloworld/schema";
import resolvers from "./graphql/helloworld/resolvers";
import { setupRedoc } from "./docs/redoc";
import { helloworld } from "./api/helloworld/helloworld";
import expressPlayground from "graphql-playground-middleware-express";

export const createApp = async () => {
  const app = express();

  // Set up ReDoc route
  await setupRedoc(app);

  // Set up API route
  app.get("/api/helloworld", helloworld);

  // Set up Apollo server
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app, path: "/graphql/helloworld" });

  // Set up GraphQL Playground in development mode
  if (process.env.NODE_ENV !== 'production') {
    app.get('/playground', expressPlayground({ endpoint: '/graphql/helloworld' }));
    }
    
  return app;
};
