import { makeExecutableSchema } from 'apollo-server';
import { importSchema } from 'graphql-import';
// @ts-ignore
import { fileLoader, mergeResolvers } from "merge-graphql-schemas";
import * as path from 'path';
import { directiveResolvers } from './directives';

const typeDefs = importSchema(path.join(__dirname, 'schema.graphql'));

const resolversArray = fileLoader(path.join(__dirname, "/**/resolver.ts"), { recursive: true });

const resolvers = mergeResolvers(resolversArray);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  directiveResolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
});

export default schema;