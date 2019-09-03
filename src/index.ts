import { ApolloServer } from "apollo-server";
import { Prisma } from "./generated/prisma";
import { prisma } from "./generated/prisma-client";
import schema from './schema';

const server = new ApolloServer({
    schema,
    context: ({ res, req }: any) => {
      return {
        res,
        req,
        prisma,
        db: new Prisma({
          endpoint: 'https://eu1.prisma.sh/kudakwashe-mupeni/ndf-api/dev',
          secret: process.env.APOLLO_SECRET
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

server.listen().then(({ url }: any) => {
  console.log(`🚀 Server ready at ${url}`)
});
