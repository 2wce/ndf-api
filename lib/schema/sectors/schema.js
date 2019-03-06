"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const sectorTypeDefs = apollo_server_1.gql `
  # A  User
  type Sector {
    id: ID!

    createdAt: Int
    description: String
    name: String!
    updatedAt: Int
  }

  input AddSectorInput {
    description: String
    name: String!
  }

  type AddSectorResponse {
    success: Boolean
    sector: Sector
    error: Error
  }

  extend type Query {
    sector(id: ID!): Sector
    sectors(orderBy: String): [Sector]
  }

  extend type Mutation {
    addSector(input: AddSectorInput!): AddSectorResponse
  }
`;
exports.default = sectorTypeDefs;
//# sourceMappingURL=schema.js.map