"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const regionTypeDefs = apollo_server_1.gql `
  type Region {
    createdAt: String
    id: String
    updatedAt: String

    name: String
  }

  input AddRegionInput {
    name: String!
  }

  type AddRegionResponse implements Response {
    region: Region
    success: Boolean
    error: Error
  }

  extend type Query {
    region(id: ID!): Region
    regions: [Region]
  }

  extend type Mutation {
    addRegion(input: AddRegionInput!): AddRegionResponse
  }
`;
exports.default = regionTypeDefs;
//# sourceMappingURL=schema.js.map