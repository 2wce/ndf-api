import { gql } from 'apollo-server';

const sectorTypeDefs = gql`
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

export default sectorTypeDefs;
