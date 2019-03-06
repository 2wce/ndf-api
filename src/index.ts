import { ApolloServer } from "apollo-server";

import schema from './schema';
import { prisma } from "./generated/prisma-client";

const server = new ApolloServer({
    schema,
    context: { prisma },
    introspection: true,
    playground: true,
    uploads: false,
    debug: true,
    engine: true,
    cors: {
      origin: ['http://localhost:3000', 'http://192.168.1.111:3000'],
      credentials: true
    }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});
