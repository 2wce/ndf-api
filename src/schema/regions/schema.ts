import { gql } from 'apollo-server';

const regionTypeDefs = gql`
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

export default regionTypeDefs;
