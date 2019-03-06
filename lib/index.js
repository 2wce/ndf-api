"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = require("./schema");
const prisma_client_1 = require("./generated/prisma-client");
const server = new apollo_server_1.ApolloServer({
    schema: schema_1.default,
    context: { prisma: prisma_client_1.prisma },
    introspection: true,
    playground: true,
    uploads: false,
    debug: true,
});
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map