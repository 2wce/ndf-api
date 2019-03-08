"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_binding_1 = require("prisma-binding");
/**
 * Type Defs
*/
const typeDefs = `type Agenda {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  description: String
  image: String
  name: String!
}

type AgendaConnection {
  pageInfo: PageInfo!
  edges: [AgendaEdge]!
  aggregate: AggregateAgenda!
}

input AgendaCreateInput {
  description: String
  image: String
  name: String!
}

input AgendaCreateOneInput {
  create: AgendaCreateInput
  connect: AgendaWhereUniqueInput
}

type AgendaEdge {
  node: Agenda!
  cursor: String!
}

enum AgendaOrderByInput {
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  description_ASC
  description_DESC
  image_ASC
  image_DESC
  name_ASC
  name_DESC
}

type AgendaPreviousValues {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  description: String
  image: String
  name: String!
}

type AgendaSubscriptionPayload {
  mutation: MutationType!
  node: Agenda
  updatedFields: [String!]
  previousValues: AgendaPreviousValues
}

input AgendaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AgendaWhereInput
  AND: [AgendaSubscriptionWhereInput!]
  OR: [AgendaSubscriptionWhereInput!]
  NOT: [AgendaSubscriptionWhereInput!]
}

input AgendaUpdateDataInput {
  description: String
  image: String
  name: String
}

input AgendaUpdateInput {
  description: String
  image: String
  name: String
}

input AgendaUpdateManyMutationInput {
  description: String
  image: String
  name: String
}

input AgendaUpdateOneInput {
  create: AgendaCreateInput
  update: AgendaUpdateDataInput
  upsert: AgendaUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: AgendaWhereUniqueInput
}

input AgendaUpsertNestedInput {
  update: AgendaUpdateDataInput!
  create: AgendaCreateInput!
}

input AgendaWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [AgendaWhereInput!]
  OR: [AgendaWhereInput!]
  NOT: [AgendaWhereInput!]
}

input AgendaWhereUniqueInput {
  id: ID
}

type AggregateAgenda {
  count: Int!
}

type AggregateApplicant {
  count: Int!
}

type AggregateBooking {
  count: Int!
}

type AggregateEvent {
  count: Int!
}

type AggregateMember {
  count: Int!
}

type AggregateMemberLevel {
  count: Int!
}

type AggregateMembership {
  count: Int!
}

type AggregateRegion {
  count: Int!
}

type AggregateSector {
  count: Int!
}

type AggregateSpeaker {
  count: Int!
}

type AggregateSponsor {
  count: Int!
}

type AggregateSubscriber {
  count: Int!
}

type Applicant {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  type: MemberType
  companyName: String
  email: String!
  jobTitle: String
  name: String
  phoneNumber: String
}

type ApplicantConnection {
  pageInfo: PageInfo!
  edges: [ApplicantEdge]!
  aggregate: AggregateApplicant!
}

input ApplicantCreateInput {
  type: MemberType
  companyName: String
  email: String!
  jobTitle: String
  name: String
  phoneNumber: String
}

type ApplicantEdge {
  node: Applicant!
  cursor: String!
}

enum ApplicantOrderByInput {
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  type_ASC
  type_DESC
  companyName_ASC
  companyName_DESC
  email_ASC
  email_DESC
  jobTitle_ASC
  jobTitle_DESC
  name_ASC
  name_DESC
  phoneNumber_ASC
  phoneNumber_DESC
}

type ApplicantPreviousValues {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  type: MemberType
  companyName: String
  email: String!
  jobTitle: String
  name: String
  phoneNumber: String
}

type ApplicantSubscriptionPayload {
  mutation: MutationType!
  node: Applicant
  updatedFields: [String!]
  previousValues: ApplicantPreviousValues
}

input ApplicantSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ApplicantWhereInput
  AND: [ApplicantSubscriptionWhereInput!]
  OR: [ApplicantSubscriptionWhereInput!]
  NOT: [ApplicantSubscriptionWhereInput!]
}

input ApplicantUpdateInput {
  type: MemberType
  companyName: String
  email: String
  jobTitle: String
  name: String
  phoneNumber: String
}

input ApplicantUpdateManyMutationInput {
  type: MemberType
  companyName: String
  email: String
  jobTitle: String
  name: String
  phoneNumber: String
}

input ApplicantWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: MemberType
  type_not: MemberType
  type_in: [MemberType!]
  type_not_in: [MemberType!]
  companyName: String
  companyName_not: String
  companyName_in: [String!]
  companyName_not_in: [String!]
  companyName_lt: String
  companyName_lte: String
  companyName_gt: String
  companyName_gte: String
  companyName_contains: String
  companyName_not_contains: String
  companyName_starts_with: String
  companyName_not_starts_with: String
  companyName_ends_with: String
  companyName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  jobTitle: String
  jobTitle_not: String
  jobTitle_in: [String!]
  jobTitle_not_in: [String!]
  jobTitle_lt: String
  jobTitle_lte: String
  jobTitle_gt: String
  jobTitle_gte: String
  jobTitle_contains: String
  jobTitle_not_contains: String
  jobTitle_starts_with: String
  jobTitle_not_starts_with: String
  jobTitle_ends_with: String
  jobTitle_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  phoneNumber: String
  phoneNumber_not: String
  phoneNumber_in: [String!]
  phoneNumber_not_in: [String!]
  phoneNumber_lt: String
  phoneNumber_lte: String
  phoneNumber_gt: String
  phoneNumber_gte: String
  phoneNumber_contains: String
  phoneNumber_not_contains: String
  phoneNumber_starts_with: String
  phoneNumber_not_starts_with: String
  phoneNumber_ends_with: String
  phoneNumber_not_ends_with: String
  AND: [ApplicantWhereInput!]
  OR: [ApplicantWhereInput!]
  NOT: [ApplicantWhereInput!]
}

input ApplicantWhereUniqueInput {
  id: ID
  email: String
}

type BatchPayload {
  count: Long!
}

type Booking {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  event: Event
  member: Member
}

type BookingConnection {
  pageInfo: PageInfo!
  edges: [BookingEdge]!
  aggregate: AggregateBooking!
}

input BookingCreateInput {
  event: EventCreateOneWithoutBookingsInput
  member: MemberCreateOneInput
}

input BookingCreateManyWithoutEventInput {
  create: [BookingCreateWithoutEventInput!]
  connect: [BookingWhereUniqueInput!]
}

input BookingCreateWithoutEventInput {
  member: MemberCreateOneInput
}

type BookingEdge {
  node: Booking!
  cursor: String!
}

enum BookingOrderByInput {
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BookingPreviousValues {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
}

input BookingScalarWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [BookingScalarWhereInput!]
  OR: [BookingScalarWhereInput!]
  NOT: [BookingScalarWhereInput!]
}

type BookingSubscriptionPayload {
  mutation: MutationType!
  node: Booking
  updatedFields: [String!]
  previousValues: BookingPreviousValues
}

input BookingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BookingWhereInput
  AND: [BookingSubscriptionWhereInput!]
  OR: [BookingSubscriptionWhereInput!]
  NOT: [BookingSubscriptionWhereInput!]
}

input BookingUpdateInput {
  event: EventUpdateOneWithoutBookingsInput
  member: MemberUpdateOneInput
}

input BookingUpdateManyWithoutEventInput {
  create: [BookingCreateWithoutEventInput!]
  delete: [BookingWhereUniqueInput!]
  connect: [BookingWhereUniqueInput!]
  set: [BookingWhereUniqueInput!]
  disconnect: [BookingWhereUniqueInput!]
  update: [BookingUpdateWithWhereUniqueWithoutEventInput!]
  upsert: [BookingUpsertWithWhereUniqueWithoutEventInput!]
  deleteMany: [BookingScalarWhereInput!]
}

input BookingUpdateWithoutEventDataInput {
  member: MemberUpdateOneInput
}

input BookingUpdateWithWhereUniqueWithoutEventInput {
  where: BookingWhereUniqueInput!
  data: BookingUpdateWithoutEventDataInput!
}

input BookingUpsertWithWhereUniqueWithoutEventInput {
  where: BookingWhereUniqueInput!
  update: BookingUpdateWithoutEventDataInput!
  create: BookingCreateWithoutEventInput!
}

input BookingWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  event: EventWhereInput
  member: MemberWhereInput
  AND: [BookingWhereInput!]
  OR: [BookingWhereInput!]
  NOT: [BookingWhereInput!]
}

input BookingWhereUniqueInput {
  id: ID
}

scalar DateTime

type Event {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  communityTag: String
  date: String
  description: String
  name: String!
  time: String
  agenda: Agenda
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking!]
  coordinator: String
  memberLevel(where: MemberLevelWhereInput, orderBy: MemberLevelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MemberLevel!]
  region: Region
  sector: Sector
  speakers(where: SpeakerWhereInput, orderBy: SpeakerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Speaker!]
  sponsors(where: SponsorWhereInput, orderBy: SponsorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sponsor!]
  type: EventType
}

type EventConnection {
  pageInfo: PageInfo!
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  communityTag: String
  date: String
  description: String
  name: String!
  time: String
  agenda: AgendaCreateOneInput
  bookings: BookingCreateManyWithoutEventInput
  coordinator: String
  memberLevel: MemberLevelCreateManyWithoutEventInput
  region: RegionCreateOneInput
  sector: SectorCreateOneInput
  speakers: SpeakerCreateManyInput
  sponsors: SponsorCreateManyInput
  type: EventType
}

input EventCreateManyWithoutMemberLevelInput {
  create: [EventCreateWithoutMemberLevelInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateOneWithoutBookingsInput {
  create: EventCreateWithoutBookingsInput
  connect: EventWhereUniqueInput
}

input EventCreateWithoutBookingsInput {
  communityTag: String
  date: String
  description: String
  name: String!
  time: String
  agenda: AgendaCreateOneInput
  coordinator: String
  memberLevel: MemberLevelCreateManyWithoutEventInput
  region: RegionCreateOneInput
  sector: SectorCreateOneInput
  speakers: SpeakerCreateManyInput
  sponsors: SponsorCreateManyInput
  type: EventType
}

input EventCreateWithoutMemberLevelInput {
  communityTag: String
  date: String
  description: String
  name: String!
  time: String
  agenda: AgendaCreateOneInput
  bookings: BookingCreateManyWithoutEventInput
  coordinator: String
  region: RegionCreateOneInput
  sector: SectorCreateOneInput
  speakers: SpeakerCreateManyInput
  sponsors: SponsorCreateManyInput
  type: EventType
}

type EventEdge {
  node: Event!
  cursor: String!
}

enum EventOrderByInput {
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  communityTag_ASC
  communityTag_DESC
  date_ASC
  date_DESC
  description_ASC
  description_DESC
  name_ASC
  name_DESC
  time_ASC
  time_DESC
  coordinator_ASC
  coordinator_DESC
  type_ASC
  type_DESC
}

type EventPreviousValues {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  communityTag: String
  date: String
  description: String
  name: String!
  time: String
  coordinator: String
  type: EventType
}

input EventScalarWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  communityTag: String
  communityTag_not: String
  communityTag_in: [String!]
  communityTag_not_in: [String!]
  communityTag_lt: String
  communityTag_lte: String
  communityTag_gt: String
  communityTag_gte: String
  communityTag_contains: String
  communityTag_not_contains: String
  communityTag_starts_with: String
  communityTag_not_starts_with: String
  communityTag_ends_with: String
  communityTag_not_ends_with: String
  date: String
  date_not: String
  date_in: [String!]
  date_not_in: [String!]
  date_lt: String
  date_lte: String
  date_gt: String
  date_gte: String
  date_contains: String
  date_not_contains: String
  date_starts_with: String
  date_not_starts_with: String
  date_ends_with: String
  date_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  time: String
  time_not: String
  time_in: [String!]
  time_not_in: [String!]
  time_lt: String
  time_lte: String
  time_gt: String
  time_gte: String
  time_contains: String
  time_not_contains: String
  time_starts_with: String
  time_not_starts_with: String
  time_ends_with: String
  time_not_ends_with: String
  coordinator: String
  coordinator_not: String
  coordinator_in: [String!]
  coordinator_not_in: [String!]
  coordinator_lt: String
  coordinator_lte: String
  coordinator_gt: String
  coordinator_gte: String
  coordinator_contains: String
  coordinator_not_contains: String
  coordinator_starts_with: String
  coordinator_not_starts_with: String
  coordinator_ends_with: String
  coordinator_not_ends_with: String
  type: EventType
  type_not: EventType
  type_in: [EventType!]
  type_not_in: [EventType!]
  AND: [EventScalarWhereInput!]
  OR: [EventScalarWhereInput!]
  NOT: [EventScalarWhereInput!]
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EventWhereInput
  AND: [EventSubscriptionWhereInput!]
  OR: [EventSubscriptionWhereInput!]
  NOT: [EventSubscriptionWhereInput!]
}

enum EventType {
  MEMBER_EVENT
  CORPORATE_EVENT
  RESEARCH_EVENT
  CONFERENCE
  SPECIAL_EVENT
}

input EventUpdateInput {
  communityTag: String
  date: String
  description: String
  name: String
  time: String
  agenda: AgendaUpdateOneInput
  bookings: BookingUpdateManyWithoutEventInput
  coordinator: String
  memberLevel: MemberLevelUpdateManyWithoutEventInput
  region: RegionUpdateOneInput
  sector: SectorUpdateOneInput
  speakers: SpeakerUpdateManyInput
  sponsors: SponsorUpdateManyInput
  type: EventType
}

input EventUpdateManyDataInput {
  communityTag: String
  date: String
  description: String
  name: String
  time: String
  coordinator: String
  type: EventType
}

input EventUpdateManyMutationInput {
  communityTag: String
  date: String
  description: String
  name: String
  time: String
  coordinator: String
  type: EventType
}

input EventUpdateManyWithoutMemberLevelInput {
  create: [EventCreateWithoutMemberLevelInput!]
  delete: [EventWhereUniqueInput!]
  connect: [EventWhereUniqueInput!]
  set: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutMemberLevelInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutMemberLevelInput!]
  deleteMany: [EventScalarWhereInput!]
  updateMany: [EventUpdateManyWithWhereNestedInput!]
}

input EventUpdateManyWithWhereNestedInput {
  where: EventScalarWhereInput!
  data: EventUpdateManyDataInput!
}

input EventUpdateOneWithoutBookingsInput {
  create: EventCreateWithoutBookingsInput
  update: EventUpdateWithoutBookingsDataInput
  upsert: EventUpsertWithoutBookingsInput
  delete: Boolean
  disconnect: Boolean
  connect: EventWhereUniqueInput
}

input EventUpdateWithoutBookingsDataInput {
  communityTag: String
  date: String
  description: String
  name: String
  time: String
  agenda: AgendaUpdateOneInput
  coordinator: String
  memberLevel: MemberLevelUpdateManyWithoutEventInput
  region: RegionUpdateOneInput
  sector: SectorUpdateOneInput
  speakers: SpeakerUpdateManyInput
  sponsors: SponsorUpdateManyInput
  type: EventType
}

input EventUpdateWithoutMemberLevelDataInput {
  communityTag: String
  date: String
  description: String
  name: String
  time: String
  agenda: AgendaUpdateOneInput
  bookings: BookingUpdateManyWithoutEventInput
  coordinator: String
  region: RegionUpdateOneInput
  sector: SectorUpdateOneInput
  speakers: SpeakerUpdateManyInput
  sponsors: SponsorUpdateManyInput
  type: EventType
}

input EventUpdateWithWhereUniqueWithoutMemberLevelInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutMemberLevelDataInput!
}

input EventUpsertWithoutBookingsInput {
  update: EventUpdateWithoutBookingsDataInput!
  create: EventCreateWithoutBookingsInput!
}

input EventUpsertWithWhereUniqueWithoutMemberLevelInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutMemberLevelDataInput!
  create: EventCreateWithoutMemberLevelInput!
}

input EventWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  communityTag: String
  communityTag_not: String
  communityTag_in: [String!]
  communityTag_not_in: [String!]
  communityTag_lt: String
  communityTag_lte: String
  communityTag_gt: String
  communityTag_gte: String
  communityTag_contains: String
  communityTag_not_contains: String
  communityTag_starts_with: String
  communityTag_not_starts_with: String
  communityTag_ends_with: String
  communityTag_not_ends_with: String
  date: String
  date_not: String
  date_in: [String!]
  date_not_in: [String!]
  date_lt: String
  date_lte: String
  date_gt: String
  date_gte: String
  date_contains: String
  date_not_contains: String
  date_starts_with: String
  date_not_starts_with: String
  date_ends_with: String
  date_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  time: String
  time_not: String
  time_in: [String!]
  time_not_in: [String!]
  time_lt: String
  time_lte: String
  time_gt: String
  time_gte: String
  time_contains: String
  time_not_contains: String
  time_starts_with: String
  time_not_starts_with: String
  time_ends_with: String
  time_not_ends_with: String
  agenda: AgendaWhereInput
  bookings_every: BookingWhereInput
  bookings_some: BookingWhereInput
  bookings_none: BookingWhereInput
  coordinator: String
  coordinator_not: String
  coordinator_in: [String!]
  coordinator_not_in: [String!]
  coordinator_lt: String
  coordinator_lte: String
  coordinator_gt: String
  coordinator_gte: String
  coordinator_contains: String
  coordinator_not_contains: String
  coordinator_starts_with: String
  coordinator_not_starts_with: String
  coordinator_ends_with: String
  coordinator_not_ends_with: String
  memberLevel_every: MemberLevelWhereInput
  memberLevel_some: MemberLevelWhereInput
  memberLevel_none: MemberLevelWhereInput
  region: RegionWhereInput
  sector: SectorWhereInput
  speakers_every: SpeakerWhereInput
  speakers_some: SpeakerWhereInput
  speakers_none: SpeakerWhereInput
  sponsors_every: SponsorWhereInput
  sponsors_some: SponsorWhereInput
  sponsors_none: SponsorWhereInput
  type: EventType
  type_not: EventType
  type_in: [EventType!]
  type_not_in: [EventType!]
  AND: [EventWhereInput!]
  OR: [EventWhereInput!]
  NOT: [EventWhereInput!]
}

input EventWhereUniqueInput {
  id: ID
}

enum LevelName {
  MEMBER
  ASSOCIATE
  PARTNER
  STRATEGIC_PARTNER
}

scalar Long

type Member {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  type: MemberType
  membership: Membership
  companyName: String
  email: String!
  jobTitle: String
  name: String
  password: String
  phoneNumber: String
  profilePicture: String
}

type MemberConnection {
  pageInfo: PageInfo!
  edges: [MemberEdge]!
  aggregate: AggregateMember!
}

input MemberCreateInput {
  type: MemberType
  membership: MembershipCreateOneWithoutMemberInput
  companyName: String
  email: String!
  jobTitle: String
  name: String
  password: String
  phoneNumber: String
  profilePicture: String
}

input MemberCreateOneInput {
  create: MemberCreateInput
  connect: MemberWhereUniqueInput
}

input MemberCreateOneWithoutMembershipInput {
  create: MemberCreateWithoutMembershipInput
  connect: MemberWhereUniqueInput
}

input MemberCreateWithoutMembershipInput {
  type: MemberType
  companyName: String
  email: String!
  jobTitle: String
  name: String
  password: String
  phoneNumber: String
  profilePicture: String
}

type MemberEdge {
  node: Member!
  cursor: String!
}

type MemberLevel {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  name: LevelName
  subscription: String
  event(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
}

type MemberLevelConnection {
  pageInfo: PageInfo!
  edges: [MemberLevelEdge]!
  aggregate: AggregateMemberLevel!
}

input MemberLevelCreateInput {
  name: LevelName
  subscription: String
  event: EventCreateManyWithoutMemberLevelInput
}

input MemberLevelCreateManyWithoutEventInput {
  create: [MemberLevelCreateWithoutEventInput!]
  connect: [MemberLevelWhereUniqueInput!]
}

input MemberLevelCreateOneInput {
  create: MemberLevelCreateInput
  connect: MemberLevelWhereUniqueInput
}

input MemberLevelCreateWithoutEventInput {
  name: LevelName
  subscription: String
}

type MemberLevelEdge {
  node: MemberLevel!
  cursor: String!
}

enum MemberLevelOrderByInput {
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  subscription_ASC
  subscription_DESC
}

type MemberLevelPreviousValues {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  name: LevelName
  subscription: String
}

input MemberLevelScalarWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: LevelName
  name_not: LevelName
  name_in: [LevelName!]
  name_not_in: [LevelName!]
  subscription: String
  subscription_not: String
  subscription_in: [String!]
  subscription_not_in: [String!]
  subscription_lt: String
  subscription_lte: String
  subscription_gt: String
  subscription_gte: String
  subscription_contains: String
  subscription_not_contains: String
  subscription_starts_with: String
  subscription_not_starts_with: String
  subscription_ends_with: String
  subscription_not_ends_with: String
  AND: [MemberLevelScalarWhereInput!]
  OR: [MemberLevelScalarWhereInput!]
  NOT: [MemberLevelScalarWhereInput!]
}

type MemberLevelSubscriptionPayload {
  mutation: MutationType!
  node: MemberLevel
  updatedFields: [String!]
  previousValues: MemberLevelPreviousValues
}

input MemberLevelSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MemberLevelWhereInput
  AND: [MemberLevelSubscriptionWhereInput!]
  OR: [MemberLevelSubscriptionWhereInput!]
  NOT: [MemberLevelSubscriptionWhereInput!]
}

input MemberLevelUpdateDataInput {
  name: LevelName
  subscription: String
  event: EventUpdateManyWithoutMemberLevelInput
}

input MemberLevelUpdateInput {
  name: LevelName
  subscription: String
  event: EventUpdateManyWithoutMemberLevelInput
}

input MemberLevelUpdateManyDataInput {
  name: LevelName
  subscription: String
}

input MemberLevelUpdateManyMutationInput {
  name: LevelName
  subscription: String
}

input MemberLevelUpdateManyWithoutEventInput {
  create: [MemberLevelCreateWithoutEventInput!]
  delete: [MemberLevelWhereUniqueInput!]
  connect: [MemberLevelWhereUniqueInput!]
  set: [MemberLevelWhereUniqueInput!]
  disconnect: [MemberLevelWhereUniqueInput!]
  update: [MemberLevelUpdateWithWhereUniqueWithoutEventInput!]
  upsert: [MemberLevelUpsertWithWhereUniqueWithoutEventInput!]
  deleteMany: [MemberLevelScalarWhereInput!]
  updateMany: [MemberLevelUpdateManyWithWhereNestedInput!]
}

input MemberLevelUpdateManyWithWhereNestedInput {
  where: MemberLevelScalarWhereInput!
  data: MemberLevelUpdateManyDataInput!
}

input MemberLevelUpdateOneInput {
  create: MemberLevelCreateInput
  update: MemberLevelUpdateDataInput
  upsert: MemberLevelUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: MemberLevelWhereUniqueInput
}

input MemberLevelUpdateWithoutEventDataInput {
  name: LevelName
  subscription: String
}

input MemberLevelUpdateWithWhereUniqueWithoutEventInput {
  where: MemberLevelWhereUniqueInput!
  data: MemberLevelUpdateWithoutEventDataInput!
}

input MemberLevelUpsertNestedInput {
  update: MemberLevelUpdateDataInput!
  create: MemberLevelCreateInput!
}

input MemberLevelUpsertWithWhereUniqueWithoutEventInput {
  where: MemberLevelWhereUniqueInput!
  update: MemberLevelUpdateWithoutEventDataInput!
  create: MemberLevelCreateWithoutEventInput!
}

input MemberLevelWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: LevelName
  name_not: LevelName
  name_in: [LevelName!]
  name_not_in: [LevelName!]
  subscription: String
  subscription_not: String
  subscription_in: [String!]
  subscription_not_in: [String!]
  subscription_lt: String
  subscription_lte: String
  subscription_gt: String
  subscription_gte: String
  subscription_contains: String
  subscription_not_contains: String
  subscription_starts_with: String
  subscription_not_starts_with: String
  subscription_ends_with: String
  subscription_not_ends_with: String
  event_every: EventWhereInput
  event_some: EventWhereInput
  event_none: EventWhereInput
  AND: [MemberLevelWhereInput!]
  OR: [MemberLevelWhereInput!]
  NOT: [MemberLevelWhereInput!]
}

input MemberLevelWhereUniqueInput {
  id: ID
}

enum MemberOrderByInput {
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  type_ASC
  type_DESC
  companyName_ASC
  companyName_DESC
  email_ASC
  email_DESC
  jobTitle_ASC
  jobTitle_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  profilePicture_ASC
  profilePicture_DESC
}

type MemberPreviousValues {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  type: MemberType
  companyName: String
  email: String!
  jobTitle: String
  name: String
  password: String
  phoneNumber: String
  profilePicture: String
}

type Membership {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  type: MemberType
  level: MemberLevel
  member: Member
}

type MembershipConnection {
  pageInfo: PageInfo!
  edges: [MembershipEdge]!
  aggregate: AggregateMembership!
}

input MembershipCreateInput {
  type: MemberType
  level: MemberLevelCreateOneInput
  member: MemberCreateOneWithoutMembershipInput
}

input MembershipCreateOneWithoutMemberInput {
  create: MembershipCreateWithoutMemberInput
  connect: MembershipWhereUniqueInput
}

input MembershipCreateWithoutMemberInput {
  type: MemberType
  level: MemberLevelCreateOneInput
}

type MembershipEdge {
  node: Membership!
  cursor: String!
}

enum MembershipOrderByInput {
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  type_ASC
  type_DESC
}

type MembershipPreviousValues {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  type: MemberType
}

type MembershipSubscriptionPayload {
  mutation: MutationType!
  node: Membership
  updatedFields: [String!]
  previousValues: MembershipPreviousValues
}

input MembershipSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MembershipWhereInput
  AND: [MembershipSubscriptionWhereInput!]
  OR: [MembershipSubscriptionWhereInput!]
  NOT: [MembershipSubscriptionWhereInput!]
}

input MembershipUpdateInput {
  type: MemberType
  level: MemberLevelUpdateOneInput
  member: MemberUpdateOneWithoutMembershipInput
}

input MembershipUpdateManyMutationInput {
  type: MemberType
}

input MembershipUpdateOneWithoutMemberInput {
  create: MembershipCreateWithoutMemberInput
  update: MembershipUpdateWithoutMemberDataInput
  upsert: MembershipUpsertWithoutMemberInput
  delete: Boolean
  disconnect: Boolean
  connect: MembershipWhereUniqueInput
}

input MembershipUpdateWithoutMemberDataInput {
  type: MemberType
  level: MemberLevelUpdateOneInput
}

input MembershipUpsertWithoutMemberInput {
  update: MembershipUpdateWithoutMemberDataInput!
  create: MembershipCreateWithoutMemberInput!
}

input MembershipWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: MemberType
  type_not: MemberType
  type_in: [MemberType!]
  type_not_in: [MemberType!]
  level: MemberLevelWhereInput
  member: MemberWhereInput
  AND: [MembershipWhereInput!]
  OR: [MembershipWhereInput!]
  NOT: [MembershipWhereInput!]
}

input MembershipWhereUniqueInput {
  id: ID
}

type MemberSubscriptionPayload {
  mutation: MutationType!
  node: Member
  updatedFields: [String!]
  previousValues: MemberPreviousValues
}

input MemberSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MemberWhereInput
  AND: [MemberSubscriptionWhereInput!]
  OR: [MemberSubscriptionWhereInput!]
  NOT: [MemberSubscriptionWhereInput!]
}

enum MemberType {
  INDIVIDUAL
  INSTITUTIONAL
}

input MemberUpdateDataInput {
  type: MemberType
  membership: MembershipUpdateOneWithoutMemberInput
  companyName: String
  email: String
  jobTitle: String
  name: String
  password: String
  phoneNumber: String
  profilePicture: String
}

input MemberUpdateInput {
  type: MemberType
  membership: MembershipUpdateOneWithoutMemberInput
  companyName: String
  email: String
  jobTitle: String
  name: String
  password: String
  phoneNumber: String
  profilePicture: String
}

input MemberUpdateManyMutationInput {
  type: MemberType
  companyName: String
  email: String
  jobTitle: String
  name: String
  password: String
  phoneNumber: String
  profilePicture: String
}

input MemberUpdateOneInput {
  create: MemberCreateInput
  update: MemberUpdateDataInput
  upsert: MemberUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: MemberWhereUniqueInput
}

input MemberUpdateOneWithoutMembershipInput {
  create: MemberCreateWithoutMembershipInput
  update: MemberUpdateWithoutMembershipDataInput
  upsert: MemberUpsertWithoutMembershipInput
  delete: Boolean
  disconnect: Boolean
  connect: MemberWhereUniqueInput
}

input MemberUpdateWithoutMembershipDataInput {
  type: MemberType
  companyName: String
  email: String
  jobTitle: String
  name: String
  password: String
  phoneNumber: String
  profilePicture: String
}

input MemberUpsertNestedInput {
  update: MemberUpdateDataInput!
  create: MemberCreateInput!
}

input MemberUpsertWithoutMembershipInput {
  update: MemberUpdateWithoutMembershipDataInput!
  create: MemberCreateWithoutMembershipInput!
}

input MemberWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: MemberType
  type_not: MemberType
  type_in: [MemberType!]
  type_not_in: [MemberType!]
  membership: MembershipWhereInput
  companyName: String
  companyName_not: String
  companyName_in: [String!]
  companyName_not_in: [String!]
  companyName_lt: String
  companyName_lte: String
  companyName_gt: String
  companyName_gte: String
  companyName_contains: String
  companyName_not_contains: String
  companyName_starts_with: String
  companyName_not_starts_with: String
  companyName_ends_with: String
  companyName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  jobTitle: String
  jobTitle_not: String
  jobTitle_in: [String!]
  jobTitle_not_in: [String!]
  jobTitle_lt: String
  jobTitle_lte: String
  jobTitle_gt: String
  jobTitle_gte: String
  jobTitle_contains: String
  jobTitle_not_contains: String
  jobTitle_starts_with: String
  jobTitle_not_starts_with: String
  jobTitle_ends_with: String
  jobTitle_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  phoneNumber: String
  phoneNumber_not: String
  phoneNumber_in: [String!]
  phoneNumber_not_in: [String!]
  phoneNumber_lt: String
  phoneNumber_lte: String
  phoneNumber_gt: String
  phoneNumber_gte: String
  phoneNumber_contains: String
  phoneNumber_not_contains: String
  phoneNumber_starts_with: String
  phoneNumber_not_starts_with: String
  phoneNumber_ends_with: String
  phoneNumber_not_ends_with: String
  profilePicture: String
  profilePicture_not: String
  profilePicture_in: [String!]
  profilePicture_not_in: [String!]
  profilePicture_lt: String
  profilePicture_lte: String
  profilePicture_gt: String
  profilePicture_gte: String
  profilePicture_contains: String
  profilePicture_not_contains: String
  profilePicture_starts_with: String
  profilePicture_not_starts_with: String
  profilePicture_ends_with: String
  profilePicture_not_ends_with: String
  AND: [MemberWhereInput!]
  OR: [MemberWhereInput!]
  NOT: [MemberWhereInput!]
}

input MemberWhereUniqueInput {
  id: ID
  email: String
}

type Mutation {
  createAgenda(data: AgendaCreateInput!): Agenda!
  updateAgenda(data: AgendaUpdateInput!, where: AgendaWhereUniqueInput!): Agenda
  updateManyAgendas(data: AgendaUpdateManyMutationInput!, where: AgendaWhereInput): BatchPayload!
  upsertAgenda(where: AgendaWhereUniqueInput!, create: AgendaCreateInput!, update: AgendaUpdateInput!): Agenda!
  deleteAgenda(where: AgendaWhereUniqueInput!): Agenda
  deleteManyAgendas(where: AgendaWhereInput): BatchPayload!
  createApplicant(data: ApplicantCreateInput!): Applicant!
  updateApplicant(data: ApplicantUpdateInput!, where: ApplicantWhereUniqueInput!): Applicant
  updateManyApplicants(data: ApplicantUpdateManyMutationInput!, where: ApplicantWhereInput): BatchPayload!
  upsertApplicant(where: ApplicantWhereUniqueInput!, create: ApplicantCreateInput!, update: ApplicantUpdateInput!): Applicant!
  deleteApplicant(where: ApplicantWhereUniqueInput!): Applicant
  deleteManyApplicants(where: ApplicantWhereInput): BatchPayload!
  createBooking(data: BookingCreateInput!): Booking!
  updateBooking(data: BookingUpdateInput!, where: BookingWhereUniqueInput!): Booking
  upsertBooking(where: BookingWhereUniqueInput!, create: BookingCreateInput!, update: BookingUpdateInput!): Booking!
  deleteBooking(where: BookingWhereUniqueInput!): Booking
  deleteManyBookings(where: BookingWhereInput): BatchPayload!
  createEvent(data: EventCreateInput!): Event!
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateManyEvents(data: EventUpdateManyMutationInput!, where: EventWhereInput): BatchPayload!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  createMember(data: MemberCreateInput!): Member!
  updateMember(data: MemberUpdateInput!, where: MemberWhereUniqueInput!): Member
  updateManyMembers(data: MemberUpdateManyMutationInput!, where: MemberWhereInput): BatchPayload!
  upsertMember(where: MemberWhereUniqueInput!, create: MemberCreateInput!, update: MemberUpdateInput!): Member!
  deleteMember(where: MemberWhereUniqueInput!): Member
  deleteManyMembers(where: MemberWhereInput): BatchPayload!
  createMemberLevel(data: MemberLevelCreateInput!): MemberLevel!
  updateMemberLevel(data: MemberLevelUpdateInput!, where: MemberLevelWhereUniqueInput!): MemberLevel
  updateManyMemberLevels(data: MemberLevelUpdateManyMutationInput!, where: MemberLevelWhereInput): BatchPayload!
  upsertMemberLevel(where: MemberLevelWhereUniqueInput!, create: MemberLevelCreateInput!, update: MemberLevelUpdateInput!): MemberLevel!
  deleteMemberLevel(where: MemberLevelWhereUniqueInput!): MemberLevel
  deleteManyMemberLevels(where: MemberLevelWhereInput): BatchPayload!
  createMembership(data: MembershipCreateInput!): Membership!
  updateMembership(data: MembershipUpdateInput!, where: MembershipWhereUniqueInput!): Membership
  updateManyMemberships(data: MembershipUpdateManyMutationInput!, where: MembershipWhereInput): BatchPayload!
  upsertMembership(where: MembershipWhereUniqueInput!, create: MembershipCreateInput!, update: MembershipUpdateInput!): Membership!
  deleteMembership(where: MembershipWhereUniqueInput!): Membership
  deleteManyMemberships(where: MembershipWhereInput): BatchPayload!
  createRegion(data: RegionCreateInput!): Region!
  updateRegion(data: RegionUpdateInput!, where: RegionWhereUniqueInput!): Region
  updateManyRegions(data: RegionUpdateManyMutationInput!, where: RegionWhereInput): BatchPayload!
  upsertRegion(where: RegionWhereUniqueInput!, create: RegionCreateInput!, update: RegionUpdateInput!): Region!
  deleteRegion(where: RegionWhereUniqueInput!): Region
  deleteManyRegions(where: RegionWhereInput): BatchPayload!
  createSector(data: SectorCreateInput!): Sector!
  updateSector(data: SectorUpdateInput!, where: SectorWhereUniqueInput!): Sector
  updateManySectors(data: SectorUpdateManyMutationInput!, where: SectorWhereInput): BatchPayload!
  upsertSector(where: SectorWhereUniqueInput!, create: SectorCreateInput!, update: SectorUpdateInput!): Sector!
  deleteSector(where: SectorWhereUniqueInput!): Sector
  deleteManySectors(where: SectorWhereInput): BatchPayload!
  createSpeaker(data: SpeakerCreateInput!): Speaker!
  updateSpeaker(data: SpeakerUpdateInput!, where: SpeakerWhereUniqueInput!): Speaker
  updateManySpeakers(data: SpeakerUpdateManyMutationInput!, where: SpeakerWhereInput): BatchPayload!
  upsertSpeaker(where: SpeakerWhereUniqueInput!, create: SpeakerCreateInput!, update: SpeakerUpdateInput!): Speaker!
  deleteSpeaker(where: SpeakerWhereUniqueInput!): Speaker
  deleteManySpeakers(where: SpeakerWhereInput): BatchPayload!
  createSponsor(data: SponsorCreateInput!): Sponsor!
  updateSponsor(data: SponsorUpdateInput!, where: SponsorWhereUniqueInput!): Sponsor
  updateManySponsors(data: SponsorUpdateManyMutationInput!, where: SponsorWhereInput): BatchPayload!
  upsertSponsor(where: SponsorWhereUniqueInput!, create: SponsorCreateInput!, update: SponsorUpdateInput!): Sponsor!
  deleteSponsor(where: SponsorWhereUniqueInput!): Sponsor
  deleteManySponsors(where: SponsorWhereInput): BatchPayload!
  createSubscriber(data: SubscriberCreateInput!): Subscriber!
  updateSubscriber(data: SubscriberUpdateInput!, where: SubscriberWhereUniqueInput!): Subscriber
  updateManySubscribers(data: SubscriberUpdateManyMutationInput!, where: SubscriberWhereInput): BatchPayload!
  upsertSubscriber(where: SubscriberWhereUniqueInput!, create: SubscriberCreateInput!, update: SubscriberUpdateInput!): Subscriber!
  deleteSubscriber(where: SubscriberWhereUniqueInput!): Subscriber
  deleteManySubscribers(where: SubscriberWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  agenda(where: AgendaWhereUniqueInput!): Agenda
  agendas(where: AgendaWhereInput, orderBy: AgendaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Agenda]!
  agendasConnection(where: AgendaWhereInput, orderBy: AgendaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AgendaConnection!
  applicant(where: ApplicantWhereUniqueInput!): Applicant
  applicants(where: ApplicantWhereInput, orderBy: ApplicantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Applicant]!
  applicantsConnection(where: ApplicantWhereInput, orderBy: ApplicantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ApplicantConnection!
  booking(where: BookingWhereUniqueInput!): Booking
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking]!
  bookingsConnection(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookingConnection!
  event(where: EventWhereUniqueInput!): Event
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  member(where: MemberWhereUniqueInput!): Member
  members(where: MemberWhereInput, orderBy: MemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Member]!
  membersConnection(where: MemberWhereInput, orderBy: MemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MemberConnection!
  memberLevel(where: MemberLevelWhereUniqueInput!): MemberLevel
  memberLevels(where: MemberLevelWhereInput, orderBy: MemberLevelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MemberLevel]!
  memberLevelsConnection(where: MemberLevelWhereInput, orderBy: MemberLevelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MemberLevelConnection!
  membership(where: MembershipWhereUniqueInput!): Membership
  memberships(where: MembershipWhereInput, orderBy: MembershipOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Membership]!
  membershipsConnection(where: MembershipWhereInput, orderBy: MembershipOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MembershipConnection!
  region(where: RegionWhereUniqueInput!): Region
  regions(where: RegionWhereInput, orderBy: RegionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Region]!
  regionsConnection(where: RegionWhereInput, orderBy: RegionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RegionConnection!
  sector(where: SectorWhereUniqueInput!): Sector
  sectors(where: SectorWhereInput, orderBy: SectorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sector]!
  sectorsConnection(where: SectorWhereInput, orderBy: SectorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SectorConnection!
  speaker(where: SpeakerWhereUniqueInput!): Speaker
  speakers(where: SpeakerWhereInput, orderBy: SpeakerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Speaker]!
  speakersConnection(where: SpeakerWhereInput, orderBy: SpeakerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SpeakerConnection!
  sponsor(where: SponsorWhereUniqueInput!): Sponsor
  sponsors(where: SponsorWhereInput, orderBy: SponsorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sponsor]!
  sponsorsConnection(where: SponsorWhereInput, orderBy: SponsorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SponsorConnection!
  subscriber(where: SubscriberWhereUniqueInput!): Subscriber
  subscribers(where: SubscriberWhereInput, orderBy: SubscriberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subscriber]!
  subscribersConnection(where: SubscriberWhereInput, orderBy: SubscriberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SubscriberConnection!
  node(id: ID!): Node
}

type Region {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  name: String
}

type RegionConnection {
  pageInfo: PageInfo!
  edges: [RegionEdge]!
  aggregate: AggregateRegion!
}

input RegionCreateInput {
  name: String
}

input RegionCreateOneInput {
  create: RegionCreateInput
  connect: RegionWhereUniqueInput
}

type RegionEdge {
  node: Region!
  cursor: String!
}

enum RegionOrderByInput {
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
}

type RegionPreviousValues {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  name: String
}

type RegionSubscriptionPayload {
  mutation: MutationType!
  node: Region
  updatedFields: [String!]
  previousValues: RegionPreviousValues
}

input RegionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RegionWhereInput
  AND: [RegionSubscriptionWhereInput!]
  OR: [RegionSubscriptionWhereInput!]
  NOT: [RegionSubscriptionWhereInput!]
}

input RegionUpdateDataInput {
  name: String
}

input RegionUpdateInput {
  name: String
}

input RegionUpdateManyMutationInput {
  name: String
}

input RegionUpdateOneInput {
  create: RegionCreateInput
  update: RegionUpdateDataInput
  upsert: RegionUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: RegionWhereUniqueInput
}

input RegionUpsertNestedInput {
  update: RegionUpdateDataInput!
  create: RegionCreateInput!
}

input RegionWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [RegionWhereInput!]
  OR: [RegionWhereInput!]
  NOT: [RegionWhereInput!]
}

input RegionWhereUniqueInput {
  id: ID
}

type Sector {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  description: String
  name: String!
}

type SectorConnection {
  pageInfo: PageInfo!
  edges: [SectorEdge]!
  aggregate: AggregateSector!
}

input SectorCreateInput {
  description: String
  name: String!
}

input SectorCreateOneInput {
  create: SectorCreateInput
  connect: SectorWhereUniqueInput
}

type SectorEdge {
  node: Sector!
  cursor: String!
}

enum SectorOrderByInput {
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  description_ASC
  description_DESC
  name_ASC
  name_DESC
}

type SectorPreviousValues {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  description: String
  name: String!
}

type SectorSubscriptionPayload {
  mutation: MutationType!
  node: Sector
  updatedFields: [String!]
  previousValues: SectorPreviousValues
}

input SectorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SectorWhereInput
  AND: [SectorSubscriptionWhereInput!]
  OR: [SectorSubscriptionWhereInput!]
  NOT: [SectorSubscriptionWhereInput!]
}

input SectorUpdateDataInput {
  description: String
  name: String
}

input SectorUpdateInput {
  description: String
  name: String
}

input SectorUpdateManyMutationInput {
  description: String
  name: String
}

input SectorUpdateOneInput {
  create: SectorCreateInput
  update: SectorUpdateDataInput
  upsert: SectorUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: SectorWhereUniqueInput
}

input SectorUpsertNestedInput {
  update: SectorUpdateDataInput!
  create: SectorCreateInput!
}

input SectorWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [SectorWhereInput!]
  OR: [SectorWhereInput!]
  NOT: [SectorWhereInput!]
}

input SectorWhereUniqueInput {
  id: ID
}

type Speaker {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  jobTitle: String
  avatar: String
  name: String!
}

type SpeakerConnection {
  pageInfo: PageInfo!
  edges: [SpeakerEdge]!
  aggregate: AggregateSpeaker!
}

input SpeakerCreateInput {
  jobTitle: String
  avatar: String
  name: String!
}

input SpeakerCreateManyInput {
  create: [SpeakerCreateInput!]
  connect: [SpeakerWhereUniqueInput!]
}

type SpeakerEdge {
  node: Speaker!
  cursor: String!
}

enum SpeakerOrderByInput {
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  jobTitle_ASC
  jobTitle_DESC
  avatar_ASC
  avatar_DESC
  name_ASC
  name_DESC
}

type SpeakerPreviousValues {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  jobTitle: String
  avatar: String
  name: String!
}

input SpeakerScalarWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  jobTitle: String
  jobTitle_not: String
  jobTitle_in: [String!]
  jobTitle_not_in: [String!]
  jobTitle_lt: String
  jobTitle_lte: String
  jobTitle_gt: String
  jobTitle_gte: String
  jobTitle_contains: String
  jobTitle_not_contains: String
  jobTitle_starts_with: String
  jobTitle_not_starts_with: String
  jobTitle_ends_with: String
  jobTitle_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [SpeakerScalarWhereInput!]
  OR: [SpeakerScalarWhereInput!]
  NOT: [SpeakerScalarWhereInput!]
}

type SpeakerSubscriptionPayload {
  mutation: MutationType!
  node: Speaker
  updatedFields: [String!]
  previousValues: SpeakerPreviousValues
}

input SpeakerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SpeakerWhereInput
  AND: [SpeakerSubscriptionWhereInput!]
  OR: [SpeakerSubscriptionWhereInput!]
  NOT: [SpeakerSubscriptionWhereInput!]
}

input SpeakerUpdateDataInput {
  jobTitle: String
  avatar: String
  name: String
}

input SpeakerUpdateInput {
  jobTitle: String
  avatar: String
  name: String
}

input SpeakerUpdateManyDataInput {
  jobTitle: String
  avatar: String
  name: String
}

input SpeakerUpdateManyInput {
  create: [SpeakerCreateInput!]
  update: [SpeakerUpdateWithWhereUniqueNestedInput!]
  upsert: [SpeakerUpsertWithWhereUniqueNestedInput!]
  delete: [SpeakerWhereUniqueInput!]
  connect: [SpeakerWhereUniqueInput!]
  set: [SpeakerWhereUniqueInput!]
  disconnect: [SpeakerWhereUniqueInput!]
  deleteMany: [SpeakerScalarWhereInput!]
  updateMany: [SpeakerUpdateManyWithWhereNestedInput!]
}

input SpeakerUpdateManyMutationInput {
  jobTitle: String
  avatar: String
  name: String
}

input SpeakerUpdateManyWithWhereNestedInput {
  where: SpeakerScalarWhereInput!
  data: SpeakerUpdateManyDataInput!
}

input SpeakerUpdateWithWhereUniqueNestedInput {
  where: SpeakerWhereUniqueInput!
  data: SpeakerUpdateDataInput!
}

input SpeakerUpsertWithWhereUniqueNestedInput {
  where: SpeakerWhereUniqueInput!
  update: SpeakerUpdateDataInput!
  create: SpeakerCreateInput!
}

input SpeakerWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  jobTitle: String
  jobTitle_not: String
  jobTitle_in: [String!]
  jobTitle_not_in: [String!]
  jobTitle_lt: String
  jobTitle_lte: String
  jobTitle_gt: String
  jobTitle_gte: String
  jobTitle_contains: String
  jobTitle_not_contains: String
  jobTitle_starts_with: String
  jobTitle_not_starts_with: String
  jobTitle_ends_with: String
  jobTitle_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [SpeakerWhereInput!]
  OR: [SpeakerWhereInput!]
  NOT: [SpeakerWhereInput!]
}

input SpeakerWhereUniqueInput {
  id: ID
}

type Sponsor {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  avatar: String
  name: String!
}

type SponsorConnection {
  pageInfo: PageInfo!
  edges: [SponsorEdge]!
  aggregate: AggregateSponsor!
}

input SponsorCreateInput {
  avatar: String
  name: String!
}

input SponsorCreateManyInput {
  create: [SponsorCreateInput!]
  connect: [SponsorWhereUniqueInput!]
}

type SponsorEdge {
  node: Sponsor!
  cursor: String!
}

enum SponsorOrderByInput {
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  avatar_ASC
  avatar_DESC
  name_ASC
  name_DESC
}

type SponsorPreviousValues {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  avatar: String
  name: String!
}

input SponsorScalarWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [SponsorScalarWhereInput!]
  OR: [SponsorScalarWhereInput!]
  NOT: [SponsorScalarWhereInput!]
}

type SponsorSubscriptionPayload {
  mutation: MutationType!
  node: Sponsor
  updatedFields: [String!]
  previousValues: SponsorPreviousValues
}

input SponsorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SponsorWhereInput
  AND: [SponsorSubscriptionWhereInput!]
  OR: [SponsorSubscriptionWhereInput!]
  NOT: [SponsorSubscriptionWhereInput!]
}

input SponsorUpdateDataInput {
  avatar: String
  name: String
}

input SponsorUpdateInput {
  avatar: String
  name: String
}

input SponsorUpdateManyDataInput {
  avatar: String
  name: String
}

input SponsorUpdateManyInput {
  create: [SponsorCreateInput!]
  update: [SponsorUpdateWithWhereUniqueNestedInput!]
  upsert: [SponsorUpsertWithWhereUniqueNestedInput!]
  delete: [SponsorWhereUniqueInput!]
  connect: [SponsorWhereUniqueInput!]
  set: [SponsorWhereUniqueInput!]
  disconnect: [SponsorWhereUniqueInput!]
  deleteMany: [SponsorScalarWhereInput!]
  updateMany: [SponsorUpdateManyWithWhereNestedInput!]
}

input SponsorUpdateManyMutationInput {
  avatar: String
  name: String
}

input SponsorUpdateManyWithWhereNestedInput {
  where: SponsorScalarWhereInput!
  data: SponsorUpdateManyDataInput!
}

input SponsorUpdateWithWhereUniqueNestedInput {
  where: SponsorWhereUniqueInput!
  data: SponsorUpdateDataInput!
}

input SponsorUpsertWithWhereUniqueNestedInput {
  where: SponsorWhereUniqueInput!
  update: SponsorUpdateDataInput!
  create: SponsorCreateInput!
}

input SponsorWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [SponsorWhereInput!]
  OR: [SponsorWhereInput!]
  NOT: [SponsorWhereInput!]
}

input SponsorWhereUniqueInput {
  id: ID
}

type Subscriber {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  email: String!
}

type SubscriberConnection {
  pageInfo: PageInfo!
  edges: [SubscriberEdge]!
  aggregate: AggregateSubscriber!
}

input SubscriberCreateInput {
  email: String!
}

type SubscriberEdge {
  node: Subscriber!
  cursor: String!
}

enum SubscriberOrderByInput {
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  email_ASC
  email_DESC
}

type SubscriberPreviousValues {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  email: String!
}

type SubscriberSubscriptionPayload {
  mutation: MutationType!
  node: Subscriber
  updatedFields: [String!]
  previousValues: SubscriberPreviousValues
}

input SubscriberSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SubscriberWhereInput
  AND: [SubscriberSubscriptionWhereInput!]
  OR: [SubscriberSubscriptionWhereInput!]
  NOT: [SubscriberSubscriptionWhereInput!]
}

input SubscriberUpdateInput {
  email: String
}

input SubscriberUpdateManyMutationInput {
  email: String
}

input SubscriberWhereInput {
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  AND: [SubscriberWhereInput!]
  OR: [SubscriberWhereInput!]
  NOT: [SubscriberWhereInput!]
}

input SubscriberWhereUniqueInput {
  id: ID
}

type Subscription {
  agenda(where: AgendaSubscriptionWhereInput): AgendaSubscriptionPayload
  applicant(where: ApplicantSubscriptionWhereInput): ApplicantSubscriptionPayload
  booking(where: BookingSubscriptionWhereInput): BookingSubscriptionPayload
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  member(where: MemberSubscriptionWhereInput): MemberSubscriptionPayload
  memberLevel(where: MemberLevelSubscriptionWhereInput): MemberLevelSubscriptionPayload
  membership(where: MembershipSubscriptionWhereInput): MembershipSubscriptionPayload
  region(where: RegionSubscriptionWhereInput): RegionSubscriptionPayload
  sector(where: SectorSubscriptionWhereInput): SectorSubscriptionPayload
  speaker(where: SpeakerSubscriptionWhereInput): SpeakerSubscriptionPayload
  sponsor(where: SponsorSubscriptionWhereInput): SponsorSubscriptionPayload
  subscriber(where: SubscriberSubscriptionWhereInput): SubscriberSubscriptionPayload
}
`;
exports.Prisma = prisma_binding_1.makePrismaBindingClass({ typeDefs });
//# sourceMappingURL=prisma.js.map