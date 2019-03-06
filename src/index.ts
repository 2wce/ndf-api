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
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});
