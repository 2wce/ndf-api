import { ApolloServer } from "apollo-server";

import schema from './schema';
import { prisma } from "./generated/prisma-client";
import { Prisma } from "./generated/prisma";

const server = new ApolloServer({
    schema,
    context: ({ res, req }) => {
      return {
        res,
        req,
        prisma,
        db: new Prisma({
          endpoint: 'https://eu1.prisma.sh/kudakwashe-mupeni/ndf-api/dev',
          secret: 'mysecret123'
        })
      }

     },
    introspection: true,
    playground: true,
    uploads: false,
    debug: true,
    engine: true,
    cors: {
      origin: ['http://localhost:3000', 'http://192.168.1.100:3000', 'http://192.168.1.111:3000'],
      credentials: true
    }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});
