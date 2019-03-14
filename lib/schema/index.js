"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const graphql_import_1 = require("graphql-import");
// @ts-ignore
const merge_graphql_schemas_1 = require("merge-graphql-schemas");
const path = require("path");
const directives_1 = require("./directives");
const typeDefs = graphql_import_1.importSchema(path.join(__dirname, 'schema.graphql'));
const resolversArray = merge_graphql_schemas_1.fileLoader(path.join(__dirname, "/**/resolver.ts"), { recursive: true });
const resolvers = merge_graphql_schemas_1.mergeResolvers(resolversArray);
const schema = apollo_server_1.makeExecutableSchema({
    typeDefs,
    resolvers,
    directiveResolvers: directives_1.directiveResolvers,
    resolverValidationOptions: {
        requireResolversForResolveType: false
    }
});
exports.default = schema;
//# sourceMappingURL=index.js.map