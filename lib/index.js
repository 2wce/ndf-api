"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = require("./schema");
const prisma_client_1 = require("./generated/prisma-client");
const prisma_1 = require("./generated/prisma");
const server = new apollo_server_1.ApolloServer({
    schema: schema_1.default,
    context: ({ res, req }) => {
        return {
            res,
            req,
            prisma: prisma_client_1.prisma,
            db: new prisma_1.Prisma({
                endpoint: 'https://eu1.prisma.sh/kudakwashe-mupeni/ndf-api/dev',
                secret: 'mysecret123'
            })
        };
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
    console.log(`🚀 Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map