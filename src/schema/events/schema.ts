import { gql } from 'apollo-server';

const eventTypeDefs = gql`
  # An Event
  type Event {
    createdAt: Int
    id: ID!
    updatedAt: Int

    communityTag: String
    date: String
    description: String
    name: String!
    time: String

    agenda: Agenda
    bookings: [Booking]
    coordinator: String
    memberLevel: [MemberLevel]
    region: Region
    # sector: Sector
    speakers: [Speaker]
    sponsors: [Sponsor]
    type: EventType
  }

  enum EventType {
    MEMBER_EVENT
    CORPORATE_EVENT
    RESEARCH_EVENT
    CONFERENCE
    SPECIAL_EVENT
  }

  type Speaker {
    jobTitle: String
    avatar: String
    name: String!
  }

  type Sponsor {
    avatar: String
    name: String!
  }

  input AddEventInput {
    agendaId: String
    communityTag: String
    coordinator: String
    date: String
    description: String
    memberLevelId: String
    name: String!
    regionId: String
    time: String
    speakers: [SpeakerInput]
    sponsors: [SponsorInput]
  }

  input SpeakerInput {
    name: String
    avatar: String
    jobTitle: String
  }

  input SponsorInput {
    name: String
    avatar: String
  }

  type AddEventResponse implements Response {
    event: Event
    success: Boolean
    error: Error
  }

  extend type Query {
    event(id: ID!): Event
    events: [Event]
  }

  extend type Mutation {
    addEvent(input: AddEventInput!): AddEventResponse
  }
`;

export default eventTypeDefs;
