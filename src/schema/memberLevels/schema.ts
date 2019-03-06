import { gql } from 'apollo-server';

const memberLevelTypeDefs = gql`
  type MemberLevel {
    id: ID!
    name: LevelName
    subscription: String
    event: [Event]
  }

  enum LevelName {
    MEMBER
    ASSOCIATE
    PARTNER
    STRATEGIC_PARTNER
  }

  input AddMemberLevelInput {
    name: LevelName
    subscription: String
  }

  type AddMemberLevelResponse implements Response {
    memberLevel: MemberLevel
    success: Boolean
    error: Error
  }

  extend type Query {
    memberLevel(id: ID!): MemberLevel
    memberLevels: [MemberLevel]
  }

  extend type Mutation {
    addMemberLevel(input: AddMemberLevelInput!): AddMemberLevelResponse
  }
`;

export default memberLevelTypeDefs;
