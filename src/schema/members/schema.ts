import { gql } from 'apollo-server';

const memberTypeDefs = gql`
  # Add member response
  type AddMemberResponse implements Response {
    member: Member
    success: Boolean
    error: Error
  }

  # Add member response
  type AddMembershipResponse implements Response {
    membership: Membership
    success: Boolean
    error: Error
  }

  # Membership
  type Membership {
    id: ID!

    # enums
    type: MemberType

    # relationship
    level: MemberLevel
    # nominees: [Nominee]
    member: Member
  }

  # Member
  type Member {
    id: ID!

    # enums
    type: MemberType

    # relationships
    membership: Membership

    # scalars
    companyName: String
    email: String!
    jobTitle: String
    name: String
    password: String
    phoneNumber: String
    profilePicture: String
  }

  # Enums
  enum MemberType {
    INDIVIDUAL
    INSTITUTIONAL
  }

  # Inputs
  input AddMemberInput {
    companyName: String
    email: String!
    jobTitle: String
    # level: MemberLevel
    name: String!
    phoneNumber: String
    type: MemberType
  }

  input AddMembershipInput {
    userId: ID!
    levelId: ID!
    type: MemberType!
  }

  # Queries
  extend type Query {
    member(id: ID!): Member
    members: [Member]
  }

  # Mutations
  extend type Mutation {
    addMember(input: AddMemberInput!): AddMemberResponse
    addMembership(input: AddMembershipInput!): AddMembershipResponse
  }
`;

export default memberTypeDefs;
