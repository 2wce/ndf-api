"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_binding_1 = require("prisma-binding");
/**
 * Type Defs
*/
const typeDefs = `type Agenda implements Node {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  description: String
  image: String
  name: String!
}

"""A connection to a list of items."""
type AgendaConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type AgendaEdge {
  """The item at the end of the edge."""
  node: Agenda!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [AgendaSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AgendaSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AgendaSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: AgendaWhereInput
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
  connect: AgendaWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: AgendaUpdateDataInput
  upsert: AgendaUpsertNestedInput
}

input AgendaUpsertNestedInput {
  update: AgendaUpdateDataInput!
  create: AgendaCreateInput!
}

input AgendaWhereInput {
  """Logical AND on all given filters."""
  AND: [AgendaWhereInput!]

  """Logical OR on all given filters."""
  OR: [AgendaWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AgendaWhereInput!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  image: String

  """All values that are not equal to given value."""
  image_not: String

  """All values that are contained in given list."""
  image_in: [String!]

  """All values that are not contained in given list."""
  image_not_in: [String!]

  """All values less than the given value."""
  image_lt: String

  """All values less than or equal the given value."""
  image_lte: String

  """All values greater than the given value."""
  image_gt: String

  """All values greater than or equal the given value."""
  image_gte: String

  """All values containing the given string."""
  image_contains: String

  """All values not containing the given string."""
  image_not_contains: String

  """All values starting with the given string."""
  image_starts_with: String

  """All values not starting with the given string."""
  image_not_starts_with: String

  """All values ending with the given string."""
  image_ends_with: String

  """All values not ending with the given string."""
  image_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
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

type Applicant implements Node {
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

"""A connection to a list of items."""
type ApplicantConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type ApplicantEdge {
  """The item at the end of the edge."""
  node: Applicant!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [ApplicantSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ApplicantSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ApplicantSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ApplicantWhereInput
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
  """Logical AND on all given filters."""
  AND: [ApplicantWhereInput!]

  """Logical OR on all given filters."""
  OR: [ApplicantWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ApplicantWhereInput!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  type: MemberType

  """All values that are not equal to given value."""
  type_not: MemberType

  """All values that are contained in given list."""
  type_in: [MemberType!]

  """All values that are not contained in given list."""
  type_not_in: [MemberType!]
  companyName: String

  """All values that are not equal to given value."""
  companyName_not: String

  """All values that are contained in given list."""
  companyName_in: [String!]

  """All values that are not contained in given list."""
  companyName_not_in: [String!]

  """All values less than the given value."""
  companyName_lt: String

  """All values less than or equal the given value."""
  companyName_lte: String

  """All values greater than the given value."""
  companyName_gt: String

  """All values greater than or equal the given value."""
  companyName_gte: String

  """All values containing the given string."""
  companyName_contains: String

  """All values not containing the given string."""
  companyName_not_contains: String

  """All values starting with the given string."""
  companyName_starts_with: String

  """All values not starting with the given string."""
  companyName_not_starts_with: String

  """All values ending with the given string."""
  companyName_ends_with: String

  """All values not ending with the given string."""
  companyName_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  jobTitle: String

  """All values that are not equal to given value."""
  jobTitle_not: String

  """All values that are contained in given list."""
  jobTitle_in: [String!]

  """All values that are not contained in given list."""
  jobTitle_not_in: [String!]

  """All values less than the given value."""
  jobTitle_lt: String

  """All values less than or equal the given value."""
  jobTitle_lte: String

  """All values greater than the given value."""
  jobTitle_gt: String

  """All values greater than or equal the given value."""
  jobTitle_gte: String

  """All values containing the given string."""
  jobTitle_contains: String

  """All values not containing the given string."""
  jobTitle_not_contains: String

  """All values starting with the given string."""
  jobTitle_starts_with: String

  """All values not starting with the given string."""
  jobTitle_not_starts_with: String

  """All values ending with the given string."""
  jobTitle_ends_with: String

  """All values not ending with the given string."""
  jobTitle_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  phoneNumber: String

  """All values that are not equal to given value."""
  phoneNumber_not: String

  """All values that are contained in given list."""
  phoneNumber_in: [String!]

  """All values that are not contained in given list."""
  phoneNumber_not_in: [String!]

  """All values less than the given value."""
  phoneNumber_lt: String

  """All values less than or equal the given value."""
  phoneNumber_lte: String

  """All values greater than the given value."""
  phoneNumber_gt: String

  """All values greater than or equal the given value."""
  phoneNumber_gte: String

  """All values containing the given string."""
  phoneNumber_contains: String

  """All values not containing the given string."""
  phoneNumber_not_contains: String

  """All values starting with the given string."""
  phoneNumber_starts_with: String

  """All values not starting with the given string."""
  phoneNumber_not_starts_with: String

  """All values ending with the given string."""
  phoneNumber_ends_with: String

  """All values not ending with the given string."""
  phoneNumber_not_ends_with: String
}

input ApplicantWhereUniqueInput {
  id: ID
  email: String
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Booking implements Node {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  event: Event
  member: Member
}

"""A connection to a list of items."""
type BookingConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type BookingEdge {
  """The item at the end of the edge."""
  node: Booking!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [BookingScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [BookingScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BookingScalarWhereInput!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

type BookingSubscriptionPayload {
  mutation: MutationType!
  node: Booking
  updatedFields: [String!]
  previousValues: BookingPreviousValues
}

input BookingSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BookingSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BookingSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BookingSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BookingWhereInput
}

input BookingUpdateInput {
  event: EventUpdateOneWithoutBookingsInput
  member: MemberUpdateOneInput
}

input BookingUpdateManyWithoutEventInput {
  create: [BookingCreateWithoutEventInput!]
  connect: [BookingWhereUniqueInput!]
  set: [BookingWhereUniqueInput!]
  disconnect: [BookingWhereUniqueInput!]
  delete: [BookingWhereUniqueInput!]
  update: [BookingUpdateWithWhereUniqueWithoutEventInput!]
  deleteMany: [BookingScalarWhereInput!]
  upsert: [BookingUpsertWithWhereUniqueWithoutEventInput!]
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
  """Logical AND on all given filters."""
  AND: [BookingWhereInput!]

  """Logical OR on all given filters."""
  OR: [BookingWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BookingWhereInput!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  event: EventWhereInput
  member: MemberWhereInput
}

input BookingWhereUniqueInput {
  id: ID
}

scalar DateTime

type Event implements Node {
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

"""A connection to a list of items."""
type EventConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  communityTag: String
  date: String
  description: String
  name: String!
  time: String
  coordinator: String
  type: EventType
  agenda: AgendaCreateOneInput
  bookings: BookingCreateManyWithoutEventInput
  memberLevel: MemberLevelCreateManyWithoutEventInput
  region: RegionCreateOneInput
  sector: SectorCreateOneInput
  speakers: SpeakerCreateManyInput
  sponsors: SponsorCreateManyInput
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
  coordinator: String
  type: EventType
  agenda: AgendaCreateOneInput
  memberLevel: MemberLevelCreateManyWithoutEventInput
  region: RegionCreateOneInput
  sector: SectorCreateOneInput
  speakers: SpeakerCreateManyInput
  sponsors: SponsorCreateManyInput
}

input EventCreateWithoutMemberLevelInput {
  communityTag: String
  date: String
  description: String
  name: String!
  time: String
  coordinator: String
  type: EventType
  agenda: AgendaCreateOneInput
  bookings: BookingCreateManyWithoutEventInput
  region: RegionCreateOneInput
  sector: SectorCreateOneInput
  speakers: SpeakerCreateManyInput
  sponsors: SponsorCreateManyInput
}

"""An edge in a connection."""
type EventEdge {
  """The item at the end of the edge."""
  node: Event!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [EventScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [EventScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EventScalarWhereInput!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  communityTag: String

  """All values that are not equal to given value."""
  communityTag_not: String

  """All values that are contained in given list."""
  communityTag_in: [String!]

  """All values that are not contained in given list."""
  communityTag_not_in: [String!]

  """All values less than the given value."""
  communityTag_lt: String

  """All values less than or equal the given value."""
  communityTag_lte: String

  """All values greater than the given value."""
  communityTag_gt: String

  """All values greater than or equal the given value."""
  communityTag_gte: String

  """All values containing the given string."""
  communityTag_contains: String

  """All values not containing the given string."""
  communityTag_not_contains: String

  """All values starting with the given string."""
  communityTag_starts_with: String

  """All values not starting with the given string."""
  communityTag_not_starts_with: String

  """All values ending with the given string."""
  communityTag_ends_with: String

  """All values not ending with the given string."""
  communityTag_not_ends_with: String
  date: String

  """All values that are not equal to given value."""
  date_not: String

  """All values that are contained in given list."""
  date_in: [String!]

  """All values that are not contained in given list."""
  date_not_in: [String!]

  """All values less than the given value."""
  date_lt: String

  """All values less than or equal the given value."""
  date_lte: String

  """All values greater than the given value."""
  date_gt: String

  """All values greater than or equal the given value."""
  date_gte: String

  """All values containing the given string."""
  date_contains: String

  """All values not containing the given string."""
  date_not_contains: String

  """All values starting with the given string."""
  date_starts_with: String

  """All values not starting with the given string."""
  date_not_starts_with: String

  """All values ending with the given string."""
  date_ends_with: String

  """All values not ending with the given string."""
  date_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  time: String

  """All values that are not equal to given value."""
  time_not: String

  """All values that are contained in given list."""
  time_in: [String!]

  """All values that are not contained in given list."""
  time_not_in: [String!]

  """All values less than the given value."""
  time_lt: String

  """All values less than or equal the given value."""
  time_lte: String

  """All values greater than the given value."""
  time_gt: String

  """All values greater than or equal the given value."""
  time_gte: String

  """All values containing the given string."""
  time_contains: String

  """All values not containing the given string."""
  time_not_contains: String

  """All values starting with the given string."""
  time_starts_with: String

  """All values not starting with the given string."""
  time_not_starts_with: String

  """All values ending with the given string."""
  time_ends_with: String

  """All values not ending with the given string."""
  time_not_ends_with: String
  coordinator: String

  """All values that are not equal to given value."""
  coordinator_not: String

  """All values that are contained in given list."""
  coordinator_in: [String!]

  """All values that are not contained in given list."""
  coordinator_not_in: [String!]

  """All values less than the given value."""
  coordinator_lt: String

  """All values less than or equal the given value."""
  coordinator_lte: String

  """All values greater than the given value."""
  coordinator_gt: String

  """All values greater than or equal the given value."""
  coordinator_gte: String

  """All values containing the given string."""
  coordinator_contains: String

  """All values not containing the given string."""
  coordinator_not_contains: String

  """All values starting with the given string."""
  coordinator_starts_with: String

  """All values not starting with the given string."""
  coordinator_not_starts_with: String

  """All values ending with the given string."""
  coordinator_ends_with: String

  """All values not ending with the given string."""
  coordinator_not_ends_with: String
  type: EventType

  """All values that are not equal to given value."""
  type_not: EventType

  """All values that are contained in given list."""
  type_in: [EventType!]

  """All values that are not contained in given list."""
  type_not_in: [EventType!]
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [EventSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [EventSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EventSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: EventWhereInput
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
  coordinator: String
  type: EventType
  agenda: AgendaUpdateOneInput
  bookings: BookingUpdateManyWithoutEventInput
  memberLevel: MemberLevelUpdateManyWithoutEventInput
  region: RegionUpdateOneInput
  sector: SectorUpdateOneInput
  speakers: SpeakerUpdateManyInput
  sponsors: SponsorUpdateManyInput
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
  connect: [EventWhereUniqueInput!]
  set: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  delete: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutMemberLevelInput!]
  updateMany: [EventUpdateManyWithWhereNestedInput!]
  deleteMany: [EventScalarWhereInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutMemberLevelInput!]
}

input EventUpdateManyWithWhereNestedInput {
  where: EventScalarWhereInput!
  data: EventUpdateManyDataInput!
}

input EventUpdateOneWithoutBookingsInput {
  create: EventCreateWithoutBookingsInput
  connect: EventWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: EventUpdateWithoutBookingsDataInput
  upsert: EventUpsertWithoutBookingsInput
}

input EventUpdateWithoutBookingsDataInput {
  communityTag: String
  date: String
  description: String
  name: String
  time: String
  coordinator: String
  type: EventType
  agenda: AgendaUpdateOneInput
  memberLevel: MemberLevelUpdateManyWithoutEventInput
  region: RegionUpdateOneInput
  sector: SectorUpdateOneInput
  speakers: SpeakerUpdateManyInput
  sponsors: SponsorUpdateManyInput
}

input EventUpdateWithoutMemberLevelDataInput {
  communityTag: String
  date: String
  description: String
  name: String
  time: String
  coordinator: String
  type: EventType
  agenda: AgendaUpdateOneInput
  bookings: BookingUpdateManyWithoutEventInput
  region: RegionUpdateOneInput
  sector: SectorUpdateOneInput
  speakers: SpeakerUpdateManyInput
  sponsors: SponsorUpdateManyInput
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
  """Logical AND on all given filters."""
  AND: [EventWhereInput!]

  """Logical OR on all given filters."""
  OR: [EventWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EventWhereInput!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  communityTag: String

  """All values that are not equal to given value."""
  communityTag_not: String

  """All values that are contained in given list."""
  communityTag_in: [String!]

  """All values that are not contained in given list."""
  communityTag_not_in: [String!]

  """All values less than the given value."""
  communityTag_lt: String

  """All values less than or equal the given value."""
  communityTag_lte: String

  """All values greater than the given value."""
  communityTag_gt: String

  """All values greater than or equal the given value."""
  communityTag_gte: String

  """All values containing the given string."""
  communityTag_contains: String

  """All values not containing the given string."""
  communityTag_not_contains: String

  """All values starting with the given string."""
  communityTag_starts_with: String

  """All values not starting with the given string."""
  communityTag_not_starts_with: String

  """All values ending with the given string."""
  communityTag_ends_with: String

  """All values not ending with the given string."""
  communityTag_not_ends_with: String
  date: String

  """All values that are not equal to given value."""
  date_not: String

  """All values that are contained in given list."""
  date_in: [String!]

  """All values that are not contained in given list."""
  date_not_in: [String!]

  """All values less than the given value."""
  date_lt: String

  """All values less than or equal the given value."""
  date_lte: String

  """All values greater than the given value."""
  date_gt: String

  """All values greater than or equal the given value."""
  date_gte: String

  """All values containing the given string."""
  date_contains: String

  """All values not containing the given string."""
  date_not_contains: String

  """All values starting with the given string."""
  date_starts_with: String

  """All values not starting with the given string."""
  date_not_starts_with: String

  """All values ending with the given string."""
  date_ends_with: String

  """All values not ending with the given string."""
  date_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  time: String

  """All values that are not equal to given value."""
  time_not: String

  """All values that are contained in given list."""
  time_in: [String!]

  """All values that are not contained in given list."""
  time_not_in: [String!]

  """All values less than the given value."""
  time_lt: String

  """All values less than or equal the given value."""
  time_lte: String

  """All values greater than the given value."""
  time_gt: String

  """All values greater than or equal the given value."""
  time_gte: String

  """All values containing the given string."""
  time_contains: String

  """All values not containing the given string."""
  time_not_contains: String

  """All values starting with the given string."""
  time_starts_with: String

  """All values not starting with the given string."""
  time_not_starts_with: String

  """All values ending with the given string."""
  time_ends_with: String

  """All values not ending with the given string."""
  time_not_ends_with: String
  coordinator: String

  """All values that are not equal to given value."""
  coordinator_not: String

  """All values that are contained in given list."""
  coordinator_in: [String!]

  """All values that are not contained in given list."""
  coordinator_not_in: [String!]

  """All values less than the given value."""
  coordinator_lt: String

  """All values less than or equal the given value."""
  coordinator_lte: String

  """All values greater than the given value."""
  coordinator_gt: String

  """All values greater than or equal the given value."""
  coordinator_gte: String

  """All values containing the given string."""
  coordinator_contains: String

  """All values not containing the given string."""
  coordinator_not_contains: String

  """All values starting with the given string."""
  coordinator_starts_with: String

  """All values not starting with the given string."""
  coordinator_not_starts_with: String

  """All values ending with the given string."""
  coordinator_ends_with: String

  """All values not ending with the given string."""
  coordinator_not_ends_with: String
  type: EventType

  """All values that are not equal to given value."""
  type_not: EventType

  """All values that are contained in given list."""
  type_in: [EventType!]

  """All values that are not contained in given list."""
  type_not_in: [EventType!]
  agenda: AgendaWhereInput
  bookings_every: BookingWhereInput
  bookings_some: BookingWhereInput
  bookings_none: BookingWhereInput
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

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Member implements Node {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  type: MemberType
  membership: Membership
  companyName: String
  email: String!
  isAdmin: Boolean
  jobTitle: String
  name: String
  password: String
  phoneNumber: String
  profilePicture: String
}

"""A connection to a list of items."""
type MemberConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MemberEdge]!
  aggregate: AggregateMember!
}

input MemberCreateInput {
  type: MemberType
  companyName: String
  email: String!
  isAdmin: Boolean
  jobTitle: String
  name: String
  password: String
  phoneNumber: String
  profilePicture: String
  membership: MembershipCreateOneWithoutMemberInput
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
  isAdmin: Boolean
  jobTitle: String
  name: String
  password: String
  phoneNumber: String
  profilePicture: String
}

"""An edge in a connection."""
type MemberEdge {
  """The item at the end of the edge."""
  node: Member!

  """A cursor for use in pagination."""
  cursor: String!
}

type MemberLevel implements Node {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  name: LevelName
  subscription: String
  event(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
}

"""A connection to a list of items."""
type MemberLevelConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type MemberLevelEdge {
  """The item at the end of the edge."""
  node: MemberLevel!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [MemberLevelScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [MemberLevelScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MemberLevelScalarWhereInput!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: LevelName

  """All values that are not equal to given value."""
  name_not: LevelName

  """All values that are contained in given list."""
  name_in: [LevelName!]

  """All values that are not contained in given list."""
  name_not_in: [LevelName!]
  subscription: String

  """All values that are not equal to given value."""
  subscription_not: String

  """All values that are contained in given list."""
  subscription_in: [String!]

  """All values that are not contained in given list."""
  subscription_not_in: [String!]

  """All values less than the given value."""
  subscription_lt: String

  """All values less than or equal the given value."""
  subscription_lte: String

  """All values greater than the given value."""
  subscription_gt: String

  """All values greater than or equal the given value."""
  subscription_gte: String

  """All values containing the given string."""
  subscription_contains: String

  """All values not containing the given string."""
  subscription_not_contains: String

  """All values starting with the given string."""
  subscription_starts_with: String

  """All values not starting with the given string."""
  subscription_not_starts_with: String

  """All values ending with the given string."""
  subscription_ends_with: String

  """All values not ending with the given string."""
  subscription_not_ends_with: String
}

type MemberLevelSubscriptionPayload {
  mutation: MutationType!
  node: MemberLevel
  updatedFields: [String!]
  previousValues: MemberLevelPreviousValues
}

input MemberLevelSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MemberLevelSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MemberLevelSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MemberLevelSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MemberLevelWhereInput
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
  connect: [MemberLevelWhereUniqueInput!]
  set: [MemberLevelWhereUniqueInput!]
  disconnect: [MemberLevelWhereUniqueInput!]
  delete: [MemberLevelWhereUniqueInput!]
  update: [MemberLevelUpdateWithWhereUniqueWithoutEventInput!]
  updateMany: [MemberLevelUpdateManyWithWhereNestedInput!]
  deleteMany: [MemberLevelScalarWhereInput!]
  upsert: [MemberLevelUpsertWithWhereUniqueWithoutEventInput!]
}

input MemberLevelUpdateManyWithWhereNestedInput {
  where: MemberLevelScalarWhereInput!
  data: MemberLevelUpdateManyDataInput!
}

input MemberLevelUpdateOneInput {
  create: MemberLevelCreateInput
  connect: MemberLevelWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: MemberLevelUpdateDataInput
  upsert: MemberLevelUpsertNestedInput
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
  """Logical AND on all given filters."""
  AND: [MemberLevelWhereInput!]

  """Logical OR on all given filters."""
  OR: [MemberLevelWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MemberLevelWhereInput!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: LevelName

  """All values that are not equal to given value."""
  name_not: LevelName

  """All values that are contained in given list."""
  name_in: [LevelName!]

  """All values that are not contained in given list."""
  name_not_in: [LevelName!]
  subscription: String

  """All values that are not equal to given value."""
  subscription_not: String

  """All values that are contained in given list."""
  subscription_in: [String!]

  """All values that are not contained in given list."""
  subscription_not_in: [String!]

  """All values less than the given value."""
  subscription_lt: String

  """All values less than or equal the given value."""
  subscription_lte: String

  """All values greater than the given value."""
  subscription_gt: String

  """All values greater than or equal the given value."""
  subscription_gte: String

  """All values containing the given string."""
  subscription_contains: String

  """All values not containing the given string."""
  subscription_not_contains: String

  """All values starting with the given string."""
  subscription_starts_with: String

  """All values not starting with the given string."""
  subscription_not_starts_with: String

  """All values ending with the given string."""
  subscription_ends_with: String

  """All values not ending with the given string."""
  subscription_not_ends_with: String
  event_every: EventWhereInput
  event_some: EventWhereInput
  event_none: EventWhereInput
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
  isAdmin_ASC
  isAdmin_DESC
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
  isAdmin: Boolean
  jobTitle: String
  name: String
  password: String
  phoneNumber: String
  profilePicture: String
}

type Membership implements Node {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  type: MemberType
  level: MemberLevel
  member: Member
}

"""A connection to a list of items."""
type MembershipConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type MembershipEdge {
  """The item at the end of the edge."""
  node: Membership!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [MembershipSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MembershipSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MembershipSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MembershipWhereInput
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
  connect: MembershipWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: MembershipUpdateWithoutMemberDataInput
  upsert: MembershipUpsertWithoutMemberInput
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
  """Logical AND on all given filters."""
  AND: [MembershipWhereInput!]

  """Logical OR on all given filters."""
  OR: [MembershipWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MembershipWhereInput!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  type: MemberType

  """All values that are not equal to given value."""
  type_not: MemberType

  """All values that are contained in given list."""
  type_in: [MemberType!]

  """All values that are not contained in given list."""
  type_not_in: [MemberType!]
  level: MemberLevelWhereInput
  member: MemberWhereInput
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
  """Logical AND on all given filters."""
  AND: [MemberSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MemberSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MemberSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MemberWhereInput
}

enum MemberType {
  INDIVIDUAL
  INSTITUTIONAL
}

input MemberUpdateDataInput {
  type: MemberType
  companyName: String
  email: String
  isAdmin: Boolean
  jobTitle: String
  name: String
  password: String
  phoneNumber: String
  profilePicture: String
  membership: MembershipUpdateOneWithoutMemberInput
}

input MemberUpdateInput {
  type: MemberType
  companyName: String
  email: String
  isAdmin: Boolean
  jobTitle: String
  name: String
  password: String
  phoneNumber: String
  profilePicture: String
  membership: MembershipUpdateOneWithoutMemberInput
}

input MemberUpdateManyMutationInput {
  type: MemberType
  companyName: String
  email: String
  isAdmin: Boolean
  jobTitle: String
  name: String
  password: String
  phoneNumber: String
  profilePicture: String
}

input MemberUpdateOneInput {
  create: MemberCreateInput
  connect: MemberWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: MemberUpdateDataInput
  upsert: MemberUpsertNestedInput
}

input MemberUpdateOneWithoutMembershipInput {
  create: MemberCreateWithoutMembershipInput
  connect: MemberWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: MemberUpdateWithoutMembershipDataInput
  upsert: MemberUpsertWithoutMembershipInput
}

input MemberUpdateWithoutMembershipDataInput {
  type: MemberType
  companyName: String
  email: String
  isAdmin: Boolean
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
  """Logical AND on all given filters."""
  AND: [MemberWhereInput!]

  """Logical OR on all given filters."""
  OR: [MemberWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MemberWhereInput!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  type: MemberType

  """All values that are not equal to given value."""
  type_not: MemberType

  """All values that are contained in given list."""
  type_in: [MemberType!]

  """All values that are not contained in given list."""
  type_not_in: [MemberType!]
  companyName: String

  """All values that are not equal to given value."""
  companyName_not: String

  """All values that are contained in given list."""
  companyName_in: [String!]

  """All values that are not contained in given list."""
  companyName_not_in: [String!]

  """All values less than the given value."""
  companyName_lt: String

  """All values less than or equal the given value."""
  companyName_lte: String

  """All values greater than the given value."""
  companyName_gt: String

  """All values greater than or equal the given value."""
  companyName_gte: String

  """All values containing the given string."""
  companyName_contains: String

  """All values not containing the given string."""
  companyName_not_contains: String

  """All values starting with the given string."""
  companyName_starts_with: String

  """All values not starting with the given string."""
  companyName_not_starts_with: String

  """All values ending with the given string."""
  companyName_ends_with: String

  """All values not ending with the given string."""
  companyName_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  isAdmin: Boolean

  """All values that are not equal to given value."""
  isAdmin_not: Boolean
  jobTitle: String

  """All values that are not equal to given value."""
  jobTitle_not: String

  """All values that are contained in given list."""
  jobTitle_in: [String!]

  """All values that are not contained in given list."""
  jobTitle_not_in: [String!]

  """All values less than the given value."""
  jobTitle_lt: String

  """All values less than or equal the given value."""
  jobTitle_lte: String

  """All values greater than the given value."""
  jobTitle_gt: String

  """All values greater than or equal the given value."""
  jobTitle_gte: String

  """All values containing the given string."""
  jobTitle_contains: String

  """All values not containing the given string."""
  jobTitle_not_contains: String

  """All values starting with the given string."""
  jobTitle_starts_with: String

  """All values not starting with the given string."""
  jobTitle_not_starts_with: String

  """All values ending with the given string."""
  jobTitle_ends_with: String

  """All values not ending with the given string."""
  jobTitle_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  phoneNumber: String

  """All values that are not equal to given value."""
  phoneNumber_not: String

  """All values that are contained in given list."""
  phoneNumber_in: [String!]

  """All values that are not contained in given list."""
  phoneNumber_not_in: [String!]

  """All values less than the given value."""
  phoneNumber_lt: String

  """All values less than or equal the given value."""
  phoneNumber_lte: String

  """All values greater than the given value."""
  phoneNumber_gt: String

  """All values greater than or equal the given value."""
  phoneNumber_gte: String

  """All values containing the given string."""
  phoneNumber_contains: String

  """All values not containing the given string."""
  phoneNumber_not_contains: String

  """All values starting with the given string."""
  phoneNumber_starts_with: String

  """All values not starting with the given string."""
  phoneNumber_not_starts_with: String

  """All values ending with the given string."""
  phoneNumber_ends_with: String

  """All values not ending with the given string."""
  phoneNumber_not_ends_with: String
  profilePicture: String

  """All values that are not equal to given value."""
  profilePicture_not: String

  """All values that are contained in given list."""
  profilePicture_in: [String!]

  """All values that are not contained in given list."""
  profilePicture_not_in: [String!]

  """All values less than the given value."""
  profilePicture_lt: String

  """All values less than or equal the given value."""
  profilePicture_lte: String

  """All values greater than the given value."""
  profilePicture_gt: String

  """All values greater than or equal the given value."""
  profilePicture_gte: String

  """All values containing the given string."""
  profilePicture_contains: String

  """All values not containing the given string."""
  profilePicture_not_contains: String

  """All values starting with the given string."""
  profilePicture_starts_with: String

  """All values not starting with the given string."""
  profilePicture_not_starts_with: String

  """All values ending with the given string."""
  profilePicture_ends_with: String

  """All values not ending with the given string."""
  profilePicture_not_ends_with: String
  membership: MembershipWhereInput
}

input MemberWhereUniqueInput {
  id: ID
  email: String
}

type Mutation {
  createApplicant(data: ApplicantCreateInput!): Applicant!
  createBooking(data: BookingCreateInput!): Booking!
  createEvent(data: EventCreateInput!): Event!
  createMembership(data: MembershipCreateInput!): Membership!
  createSubscriber(data: SubscriberCreateInput!): Subscriber!
  createAgenda(data: AgendaCreateInput!): Agenda!
  createSponsor(data: SponsorCreateInput!): Sponsor!
  createMember(data: MemberCreateInput!): Member!
  createRegion(data: RegionCreateInput!): Region!
  createMemberLevel(data: MemberLevelCreateInput!): MemberLevel!
  createSpeaker(data: SpeakerCreateInput!): Speaker!
  createSector(data: SectorCreateInput!): Sector!
  updateApplicant(data: ApplicantUpdateInput!, where: ApplicantWhereUniqueInput!): Applicant
  updateBooking(data: BookingUpdateInput!, where: BookingWhereUniqueInput!): Booking
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateMembership(data: MembershipUpdateInput!, where: MembershipWhereUniqueInput!): Membership
  updateSubscriber(data: SubscriberUpdateInput!, where: SubscriberWhereUniqueInput!): Subscriber
  updateAgenda(data: AgendaUpdateInput!, where: AgendaWhereUniqueInput!): Agenda
  updateSponsor(data: SponsorUpdateInput!, where: SponsorWhereUniqueInput!): Sponsor
  updateMember(data: MemberUpdateInput!, where: MemberWhereUniqueInput!): Member
  updateRegion(data: RegionUpdateInput!, where: RegionWhereUniqueInput!): Region
  updateMemberLevel(data: MemberLevelUpdateInput!, where: MemberLevelWhereUniqueInput!): MemberLevel
  updateSpeaker(data: SpeakerUpdateInput!, where: SpeakerWhereUniqueInput!): Speaker
  updateSector(data: SectorUpdateInput!, where: SectorWhereUniqueInput!): Sector
  deleteApplicant(where: ApplicantWhereUniqueInput!): Applicant
  deleteBooking(where: BookingWhereUniqueInput!): Booking
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteMembership(where: MembershipWhereUniqueInput!): Membership
  deleteSubscriber(where: SubscriberWhereUniqueInput!): Subscriber
  deleteAgenda(where: AgendaWhereUniqueInput!): Agenda
  deleteSponsor(where: SponsorWhereUniqueInput!): Sponsor
  deleteMember(where: MemberWhereUniqueInput!): Member
  deleteRegion(where: RegionWhereUniqueInput!): Region
  deleteMemberLevel(where: MemberLevelWhereUniqueInput!): MemberLevel
  deleteSpeaker(where: SpeakerWhereUniqueInput!): Speaker
  deleteSector(where: SectorWhereUniqueInput!): Sector
  upsertApplicant(where: ApplicantWhereUniqueInput!, create: ApplicantCreateInput!, update: ApplicantUpdateInput!): Applicant!
  upsertBooking(where: BookingWhereUniqueInput!, create: BookingCreateInput!, update: BookingUpdateInput!): Booking!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  upsertMembership(where: MembershipWhereUniqueInput!, create: MembershipCreateInput!, update: MembershipUpdateInput!): Membership!
  upsertSubscriber(where: SubscriberWhereUniqueInput!, create: SubscriberCreateInput!, update: SubscriberUpdateInput!): Subscriber!
  upsertAgenda(where: AgendaWhereUniqueInput!, create: AgendaCreateInput!, update: AgendaUpdateInput!): Agenda!
  upsertSponsor(where: SponsorWhereUniqueInput!, create: SponsorCreateInput!, update: SponsorUpdateInput!): Sponsor!
  upsertMember(where: MemberWhereUniqueInput!, create: MemberCreateInput!, update: MemberUpdateInput!): Member!
  upsertRegion(where: RegionWhereUniqueInput!, create: RegionCreateInput!, update: RegionUpdateInput!): Region!
  upsertMemberLevel(where: MemberLevelWhereUniqueInput!, create: MemberLevelCreateInput!, update: MemberLevelUpdateInput!): MemberLevel!
  upsertSpeaker(where: SpeakerWhereUniqueInput!, create: SpeakerCreateInput!, update: SpeakerUpdateInput!): Speaker!
  upsertSector(where: SectorWhereUniqueInput!, create: SectorCreateInput!, update: SectorUpdateInput!): Sector!
  updateManyApplicants(data: ApplicantUpdateManyMutationInput!, where: ApplicantWhereInput): BatchPayload!
  updateManyEvents(data: EventUpdateManyMutationInput!, where: EventWhereInput): BatchPayload!
  updateManyMemberships(data: MembershipUpdateManyMutationInput!, where: MembershipWhereInput): BatchPayload!
  updateManySubscribers(data: SubscriberUpdateManyMutationInput!, where: SubscriberWhereInput): BatchPayload!
  updateManyAgendas(data: AgendaUpdateManyMutationInput!, where: AgendaWhereInput): BatchPayload!
  updateManySponsors(data: SponsorUpdateManyMutationInput!, where: SponsorWhereInput): BatchPayload!
  updateManyMembers(data: MemberUpdateManyMutationInput!, where: MemberWhereInput): BatchPayload!
  updateManyRegions(data: RegionUpdateManyMutationInput!, where: RegionWhereInput): BatchPayload!
  updateManyMemberLevels(data: MemberLevelUpdateManyMutationInput!, where: MemberLevelWhereInput): BatchPayload!
  updateManySpeakers(data: SpeakerUpdateManyMutationInput!, where: SpeakerWhereInput): BatchPayload!
  updateManySectors(data: SectorUpdateManyMutationInput!, where: SectorWhereInput): BatchPayload!
  deleteManyApplicants(where: ApplicantWhereInput): BatchPayload!
  deleteManyBookings(where: BookingWhereInput): BatchPayload!
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  deleteManyMemberships(where: MembershipWhereInput): BatchPayload!
  deleteManySubscribers(where: SubscriberWhereInput): BatchPayload!
  deleteManyAgendas(where: AgendaWhereInput): BatchPayload!
  deleteManySponsors(where: SponsorWhereInput): BatchPayload!
  deleteManyMembers(where: MemberWhereInput): BatchPayload!
  deleteManyRegions(where: RegionWhereInput): BatchPayload!
  deleteManyMemberLevels(where: MemberLevelWhereInput): BatchPayload!
  deleteManySpeakers(where: SpeakerWhereInput): BatchPayload!
  deleteManySectors(where: SectorWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  applicants(where: ApplicantWhereInput, orderBy: ApplicantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Applicant]!
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking]!
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  memberships(where: MembershipWhereInput, orderBy: MembershipOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Membership]!
  subscribers(where: SubscriberWhereInput, orderBy: SubscriberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subscriber]!
  agendas(where: AgendaWhereInput, orderBy: AgendaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Agenda]!
  sponsors(where: SponsorWhereInput, orderBy: SponsorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sponsor]!
  members(where: MemberWhereInput, orderBy: MemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Member]!
  regions(where: RegionWhereInput, orderBy: RegionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Region]!
  memberLevels(where: MemberLevelWhereInput, orderBy: MemberLevelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MemberLevel]!
  speakers(where: SpeakerWhereInput, orderBy: SpeakerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Speaker]!
  sectors(where: SectorWhereInput, orderBy: SectorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sector]!
  applicant(where: ApplicantWhereUniqueInput!): Applicant
  booking(where: BookingWhereUniqueInput!): Booking
  event(where: EventWhereUniqueInput!): Event
  membership(where: MembershipWhereUniqueInput!): Membership
  subscriber(where: SubscriberWhereUniqueInput!): Subscriber
  agenda(where: AgendaWhereUniqueInput!): Agenda
  sponsor(where: SponsorWhereUniqueInput!): Sponsor
  member(where: MemberWhereUniqueInput!): Member
  region(where: RegionWhereUniqueInput!): Region
  memberLevel(where: MemberLevelWhereUniqueInput!): MemberLevel
  speaker(where: SpeakerWhereUniqueInput!): Speaker
  sector(where: SectorWhereUniqueInput!): Sector
  applicantsConnection(where: ApplicantWhereInput, orderBy: ApplicantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ApplicantConnection!
  bookingsConnection(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookingConnection!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  membershipsConnection(where: MembershipWhereInput, orderBy: MembershipOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MembershipConnection!
  subscribersConnection(where: SubscriberWhereInput, orderBy: SubscriberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SubscriberConnection!
  agendasConnection(where: AgendaWhereInput, orderBy: AgendaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AgendaConnection!
  sponsorsConnection(where: SponsorWhereInput, orderBy: SponsorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SponsorConnection!
  membersConnection(where: MemberWhereInput, orderBy: MemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MemberConnection!
  regionsConnection(where: RegionWhereInput, orderBy: RegionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RegionConnection!
  memberLevelsConnection(where: MemberLevelWhereInput, orderBy: MemberLevelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MemberLevelConnection!
  speakersConnection(where: SpeakerWhereInput, orderBy: SpeakerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SpeakerConnection!
  sectorsConnection(where: SectorWhereInput, orderBy: SectorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SectorConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Region implements Node {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  name: String
}

"""A connection to a list of items."""
type RegionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type RegionEdge {
  """The item at the end of the edge."""
  node: Region!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [RegionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RegionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RegionSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RegionWhereInput
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
  connect: RegionWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: RegionUpdateDataInput
  upsert: RegionUpsertNestedInput
}

input RegionUpsertNestedInput {
  update: RegionUpdateDataInput!
  create: RegionCreateInput!
}

input RegionWhereInput {
  """Logical AND on all given filters."""
  AND: [RegionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RegionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RegionWhereInput!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input RegionWhereUniqueInput {
  id: ID
}

type Sector implements Node {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  description: String
  name: String!
}

"""A connection to a list of items."""
type SectorConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type SectorEdge {
  """The item at the end of the edge."""
  node: Sector!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [SectorSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SectorSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SectorSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SectorWhereInput
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
  connect: SectorWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: SectorUpdateDataInput
  upsert: SectorUpsertNestedInput
}

input SectorUpsertNestedInput {
  update: SectorUpdateDataInput!
  create: SectorCreateInput!
}

input SectorWhereInput {
  """Logical AND on all given filters."""
  AND: [SectorWhereInput!]

  """Logical OR on all given filters."""
  OR: [SectorWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SectorWhereInput!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input SectorWhereUniqueInput {
  id: ID
}

type Speaker implements Node {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  jobTitle: String
  avatar: String
  name: String!
}

"""A connection to a list of items."""
type SpeakerConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type SpeakerEdge {
  """The item at the end of the edge."""
  node: Speaker!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [SpeakerScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [SpeakerScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SpeakerScalarWhereInput!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  jobTitle: String

  """All values that are not equal to given value."""
  jobTitle_not: String

  """All values that are contained in given list."""
  jobTitle_in: [String!]

  """All values that are not contained in given list."""
  jobTitle_not_in: [String!]

  """All values less than the given value."""
  jobTitle_lt: String

  """All values less than or equal the given value."""
  jobTitle_lte: String

  """All values greater than the given value."""
  jobTitle_gt: String

  """All values greater than or equal the given value."""
  jobTitle_gte: String

  """All values containing the given string."""
  jobTitle_contains: String

  """All values not containing the given string."""
  jobTitle_not_contains: String

  """All values starting with the given string."""
  jobTitle_starts_with: String

  """All values not starting with the given string."""
  jobTitle_not_starts_with: String

  """All values ending with the given string."""
  jobTitle_ends_with: String

  """All values not ending with the given string."""
  jobTitle_not_ends_with: String
  avatar: String

  """All values that are not equal to given value."""
  avatar_not: String

  """All values that are contained in given list."""
  avatar_in: [String!]

  """All values that are not contained in given list."""
  avatar_not_in: [String!]

  """All values less than the given value."""
  avatar_lt: String

  """All values less than or equal the given value."""
  avatar_lte: String

  """All values greater than the given value."""
  avatar_gt: String

  """All values greater than or equal the given value."""
  avatar_gte: String

  """All values containing the given string."""
  avatar_contains: String

  """All values not containing the given string."""
  avatar_not_contains: String

  """All values starting with the given string."""
  avatar_starts_with: String

  """All values not starting with the given string."""
  avatar_not_starts_with: String

  """All values ending with the given string."""
  avatar_ends_with: String

  """All values not ending with the given string."""
  avatar_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

type SpeakerSubscriptionPayload {
  mutation: MutationType!
  node: Speaker
  updatedFields: [String!]
  previousValues: SpeakerPreviousValues
}

input SpeakerSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SpeakerSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SpeakerSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SpeakerSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SpeakerWhereInput
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
  connect: [SpeakerWhereUniqueInput!]
  set: [SpeakerWhereUniqueInput!]
  disconnect: [SpeakerWhereUniqueInput!]
  delete: [SpeakerWhereUniqueInput!]
  update: [SpeakerUpdateWithWhereUniqueNestedInput!]
  updateMany: [SpeakerUpdateManyWithWhereNestedInput!]
  deleteMany: [SpeakerScalarWhereInput!]
  upsert: [SpeakerUpsertWithWhereUniqueNestedInput!]
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
  """Logical AND on all given filters."""
  AND: [SpeakerWhereInput!]

  """Logical OR on all given filters."""
  OR: [SpeakerWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SpeakerWhereInput!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  jobTitle: String

  """All values that are not equal to given value."""
  jobTitle_not: String

  """All values that are contained in given list."""
  jobTitle_in: [String!]

  """All values that are not contained in given list."""
  jobTitle_not_in: [String!]

  """All values less than the given value."""
  jobTitle_lt: String

  """All values less than or equal the given value."""
  jobTitle_lte: String

  """All values greater than the given value."""
  jobTitle_gt: String

  """All values greater than or equal the given value."""
  jobTitle_gte: String

  """All values containing the given string."""
  jobTitle_contains: String

  """All values not containing the given string."""
  jobTitle_not_contains: String

  """All values starting with the given string."""
  jobTitle_starts_with: String

  """All values not starting with the given string."""
  jobTitle_not_starts_with: String

  """All values ending with the given string."""
  jobTitle_ends_with: String

  """All values not ending with the given string."""
  jobTitle_not_ends_with: String
  avatar: String

  """All values that are not equal to given value."""
  avatar_not: String

  """All values that are contained in given list."""
  avatar_in: [String!]

  """All values that are not contained in given list."""
  avatar_not_in: [String!]

  """All values less than the given value."""
  avatar_lt: String

  """All values less than or equal the given value."""
  avatar_lte: String

  """All values greater than the given value."""
  avatar_gt: String

  """All values greater than or equal the given value."""
  avatar_gte: String

  """All values containing the given string."""
  avatar_contains: String

  """All values not containing the given string."""
  avatar_not_contains: String

  """All values starting with the given string."""
  avatar_starts_with: String

  """All values not starting with the given string."""
  avatar_not_starts_with: String

  """All values ending with the given string."""
  avatar_ends_with: String

  """All values not ending with the given string."""
  avatar_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input SpeakerWhereUniqueInput {
  id: ID
}

type Sponsor implements Node {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  avatar: String
  name: String!
}

"""A connection to a list of items."""
type SponsorConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type SponsorEdge {
  """The item at the end of the edge."""
  node: Sponsor!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [SponsorScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [SponsorScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SponsorScalarWhereInput!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  avatar: String

  """All values that are not equal to given value."""
  avatar_not: String

  """All values that are contained in given list."""
  avatar_in: [String!]

  """All values that are not contained in given list."""
  avatar_not_in: [String!]

  """All values less than the given value."""
  avatar_lt: String

  """All values less than or equal the given value."""
  avatar_lte: String

  """All values greater than the given value."""
  avatar_gt: String

  """All values greater than or equal the given value."""
  avatar_gte: String

  """All values containing the given string."""
  avatar_contains: String

  """All values not containing the given string."""
  avatar_not_contains: String

  """All values starting with the given string."""
  avatar_starts_with: String

  """All values not starting with the given string."""
  avatar_not_starts_with: String

  """All values ending with the given string."""
  avatar_ends_with: String

  """All values not ending with the given string."""
  avatar_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

type SponsorSubscriptionPayload {
  mutation: MutationType!
  node: Sponsor
  updatedFields: [String!]
  previousValues: SponsorPreviousValues
}

input SponsorSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SponsorSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SponsorSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SponsorSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SponsorWhereInput
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
  connect: [SponsorWhereUniqueInput!]
  set: [SponsorWhereUniqueInput!]
  disconnect: [SponsorWhereUniqueInput!]
  delete: [SponsorWhereUniqueInput!]
  update: [SponsorUpdateWithWhereUniqueNestedInput!]
  updateMany: [SponsorUpdateManyWithWhereNestedInput!]
  deleteMany: [SponsorScalarWhereInput!]
  upsert: [SponsorUpsertWithWhereUniqueNestedInput!]
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
  """Logical AND on all given filters."""
  AND: [SponsorWhereInput!]

  """Logical OR on all given filters."""
  OR: [SponsorWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SponsorWhereInput!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  avatar: String

  """All values that are not equal to given value."""
  avatar_not: String

  """All values that are contained in given list."""
  avatar_in: [String!]

  """All values that are not contained in given list."""
  avatar_not_in: [String!]

  """All values less than the given value."""
  avatar_lt: String

  """All values less than or equal the given value."""
  avatar_lte: String

  """All values greater than the given value."""
  avatar_gt: String

  """All values greater than or equal the given value."""
  avatar_gte: String

  """All values containing the given string."""
  avatar_contains: String

  """All values not containing the given string."""
  avatar_not_contains: String

  """All values starting with the given string."""
  avatar_starts_with: String

  """All values not starting with the given string."""
  avatar_not_starts_with: String

  """All values ending with the given string."""
  avatar_ends_with: String

  """All values not ending with the given string."""
  avatar_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
}

input SponsorWhereUniqueInput {
  id: ID
}

type Subscriber implements Node {
  createdAt: DateTime!
  id: ID!
  updatedAt: DateTime!
  email: String!
}

"""A connection to a list of items."""
type SubscriberConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SubscriberEdge]!
  aggregate: AggregateSubscriber!
}

input SubscriberCreateInput {
  email: String!
}

"""An edge in a connection."""
type SubscriberEdge {
  """The item at the end of the edge."""
  node: Subscriber!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [SubscriberSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SubscriberSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SubscriberSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SubscriberWhereInput
}

input SubscriberUpdateInput {
  email: String
}

input SubscriberUpdateManyMutationInput {
  email: String
}

input SubscriberWhereInput {
  """Logical AND on all given filters."""
  AND: [SubscriberWhereInput!]

  """Logical OR on all given filters."""
  OR: [SubscriberWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SubscriberWhereInput!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
}

input SubscriberWhereUniqueInput {
  id: ID
}

type Subscription {
  applicant(where: ApplicantSubscriptionWhereInput): ApplicantSubscriptionPayload
  booking(where: BookingSubscriptionWhereInput): BookingSubscriptionPayload
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  membership(where: MembershipSubscriptionWhereInput): MembershipSubscriptionPayload
  subscriber(where: SubscriberSubscriptionWhereInput): SubscriberSubscriptionPayload
  agenda(where: AgendaSubscriptionWhereInput): AgendaSubscriptionPayload
  sponsor(where: SponsorSubscriptionWhereInput): SponsorSubscriptionPayload
  member(where: MemberSubscriptionWhereInput): MemberSubscriptionPayload
  region(where: RegionSubscriptionWhereInput): RegionSubscriptionPayload
  memberLevel(where: MemberLevelSubscriptionWhereInput): MemberLevelSubscriptionPayload
  speaker(where: SpeakerSubscriptionWhereInput): SpeakerSubscriptionPayload
  sector(where: SectorSubscriptionWhereInput): SectorSubscriptionPayload
}
`;
exports.Prisma = prisma_binding_1.makePrismaBindingClass({ typeDefs });
//# sourceMappingURL=prisma.js.map