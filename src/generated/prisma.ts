import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    applicants: <T = Array<Applicant | null>>(args: { where?: ApplicantWhereInput | null, orderBy?: ApplicantOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bookings: <T = Array<Booking | null>>(args: { where?: BookingWhereInput | null, orderBy?: BookingOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    events: <T = Array<Event | null>>(args: { where?: EventWhereInput | null, orderBy?: EventOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    memberships: <T = Array<Membership | null>>(args: { where?: MembershipWhereInput | null, orderBy?: MembershipOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    subscribers: <T = Array<Subscriber | null>>(args: { where?: SubscriberWhereInput | null, orderBy?: SubscriberOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    agendas: <T = Array<Agenda | null>>(args: { where?: AgendaWhereInput | null, orderBy?: AgendaOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sponsors: <T = Array<Sponsor | null>>(args: { where?: SponsorWhereInput | null, orderBy?: SponsorOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    members: <T = Array<Member | null>>(args: { where?: MemberWhereInput | null, orderBy?: MemberOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    regions: <T = Array<Region | null>>(args: { where?: RegionWhereInput | null, orderBy?: RegionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    memberLevels: <T = Array<MemberLevel | null>>(args: { where?: MemberLevelWhereInput | null, orderBy?: MemberLevelOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    speakers: <T = Array<Speaker | null>>(args: { where?: SpeakerWhereInput | null, orderBy?: SpeakerOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sectors: <T = Array<Sector | null>>(args: { where?: SectorWhereInput | null, orderBy?: SectorOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    applicant: <T = Applicant | null>(args: { where: ApplicantWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    booking: <T = Booking | null>(args: { where: BookingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    event: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    membership: <T = Membership | null>(args: { where: MembershipWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    subscriber: <T = Subscriber | null>(args: { where: SubscriberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    agenda: <T = Agenda | null>(args: { where: AgendaWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    sponsor: <T = Sponsor | null>(args: { where: SponsorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    member: <T = Member | null>(args: { where: MemberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    region: <T = Region | null>(args: { where: RegionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    memberLevel: <T = MemberLevel | null>(args: { where: MemberLevelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    speaker: <T = Speaker | null>(args: { where: SpeakerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    sector: <T = Sector | null>(args: { where: SectorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    applicantsConnection: <T = ApplicantConnection>(args: { where?: ApplicantWhereInput | null, orderBy?: ApplicantOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bookingsConnection: <T = BookingConnection>(args: { where?: BookingWhereInput | null, orderBy?: BookingOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    eventsConnection: <T = EventConnection>(args: { where?: EventWhereInput | null, orderBy?: EventOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    membershipsConnection: <T = MembershipConnection>(args: { where?: MembershipWhereInput | null, orderBy?: MembershipOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    subscribersConnection: <T = SubscriberConnection>(args: { where?: SubscriberWhereInput | null, orderBy?: SubscriberOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    agendasConnection: <T = AgendaConnection>(args: { where?: AgendaWhereInput | null, orderBy?: AgendaOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sponsorsConnection: <T = SponsorConnection>(args: { where?: SponsorWhereInput | null, orderBy?: SponsorOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    membersConnection: <T = MemberConnection>(args: { where?: MemberWhereInput | null, orderBy?: MemberOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    regionsConnection: <T = RegionConnection>(args: { where?: RegionWhereInput | null, orderBy?: RegionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    memberLevelsConnection: <T = MemberLevelConnection>(args: { where?: MemberLevelWhereInput | null, orderBy?: MemberLevelOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    speakersConnection: <T = SpeakerConnection>(args: { where?: SpeakerWhereInput | null, orderBy?: SpeakerOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sectorsConnection: <T = SectorConnection>(args: { where?: SectorWhereInput | null, orderBy?: SectorOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createApplicant: <T = Applicant>(args: { data: ApplicantCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBooking: <T = Booking>(args: { data: BookingCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEvent: <T = Event>(args: { data: EventCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMembership: <T = Membership>(args: { data: MembershipCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSubscriber: <T = Subscriber>(args: { data: SubscriberCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAgenda: <T = Agenda>(args: { data: AgendaCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSponsor: <T = Sponsor>(args: { data: SponsorCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMember: <T = Member>(args: { data: MemberCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRegion: <T = Region>(args: { data: RegionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMemberLevel: <T = MemberLevel>(args: { data: MemberLevelCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSpeaker: <T = Speaker>(args: { data: SpeakerCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSector: <T = Sector>(args: { data: SectorCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateApplicant: <T = Applicant | null>(args: { data: ApplicantUpdateInput, where: ApplicantWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateBooking: <T = Booking | null>(args: { data: BookingUpdateInput, where: BookingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateEvent: <T = Event | null>(args: { data: EventUpdateInput, where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateMembership: <T = Membership | null>(args: { data: MembershipUpdateInput, where: MembershipWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateSubscriber: <T = Subscriber | null>(args: { data: SubscriberUpdateInput, where: SubscriberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateAgenda: <T = Agenda | null>(args: { data: AgendaUpdateInput, where: AgendaWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateSponsor: <T = Sponsor | null>(args: { data: SponsorUpdateInput, where: SponsorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateMember: <T = Member | null>(args: { data: MemberUpdateInput, where: MemberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateRegion: <T = Region | null>(args: { data: RegionUpdateInput, where: RegionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateMemberLevel: <T = MemberLevel | null>(args: { data: MemberLevelUpdateInput, where: MemberLevelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateSpeaker: <T = Speaker | null>(args: { data: SpeakerUpdateInput, where: SpeakerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateSector: <T = Sector | null>(args: { data: SectorUpdateInput, where: SectorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteApplicant: <T = Applicant | null>(args: { where: ApplicantWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteBooking: <T = Booking | null>(args: { where: BookingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteEvent: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteMembership: <T = Membership | null>(args: { where: MembershipWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteSubscriber: <T = Subscriber | null>(args: { where: SubscriberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteAgenda: <T = Agenda | null>(args: { where: AgendaWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteSponsor: <T = Sponsor | null>(args: { where: SponsorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteMember: <T = Member | null>(args: { where: MemberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteRegion: <T = Region | null>(args: { where: RegionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteMemberLevel: <T = MemberLevel | null>(args: { where: MemberLevelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteSpeaker: <T = Speaker | null>(args: { where: SpeakerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteSector: <T = Sector | null>(args: { where: SectorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertApplicant: <T = Applicant>(args: { where: ApplicantWhereUniqueInput, create: ApplicantCreateInput, update: ApplicantUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBooking: <T = Booking>(args: { where: BookingWhereUniqueInput, create: BookingCreateInput, update: BookingUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEvent: <T = Event>(args: { where: EventWhereUniqueInput, create: EventCreateInput, update: EventUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMembership: <T = Membership>(args: { where: MembershipWhereUniqueInput, create: MembershipCreateInput, update: MembershipUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSubscriber: <T = Subscriber>(args: { where: SubscriberWhereUniqueInput, create: SubscriberCreateInput, update: SubscriberUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAgenda: <T = Agenda>(args: { where: AgendaWhereUniqueInput, create: AgendaCreateInput, update: AgendaUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSponsor: <T = Sponsor>(args: { where: SponsorWhereUniqueInput, create: SponsorCreateInput, update: SponsorUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMember: <T = Member>(args: { where: MemberWhereUniqueInput, create: MemberCreateInput, update: MemberUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRegion: <T = Region>(args: { where: RegionWhereUniqueInput, create: RegionCreateInput, update: RegionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMemberLevel: <T = MemberLevel>(args: { where: MemberLevelWhereUniqueInput, create: MemberLevelCreateInput, update: MemberLevelUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSpeaker: <T = Speaker>(args: { where: SpeakerWhereUniqueInput, create: SpeakerCreateInput, update: SpeakerUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSector: <T = Sector>(args: { where: SectorWhereUniqueInput, create: SectorCreateInput, update: SectorUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyApplicants: <T = BatchPayload>(args: { data: ApplicantUpdateManyMutationInput, where?: ApplicantWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEvents: <T = BatchPayload>(args: { data: EventUpdateManyMutationInput, where?: EventWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMemberships: <T = BatchPayload>(args: { data: MembershipUpdateManyMutationInput, where?: MembershipWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySubscribers: <T = BatchPayload>(args: { data: SubscriberUpdateManyMutationInput, where?: SubscriberWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAgendas: <T = BatchPayload>(args: { data: AgendaUpdateManyMutationInput, where?: AgendaWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySponsors: <T = BatchPayload>(args: { data: SponsorUpdateManyMutationInput, where?: SponsorWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMembers: <T = BatchPayload>(args: { data: MemberUpdateManyMutationInput, where?: MemberWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRegions: <T = BatchPayload>(args: { data: RegionUpdateManyMutationInput, where?: RegionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMemberLevels: <T = BatchPayload>(args: { data: MemberLevelUpdateManyMutationInput, where?: MemberLevelWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySpeakers: <T = BatchPayload>(args: { data: SpeakerUpdateManyMutationInput, where?: SpeakerWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySectors: <T = BatchPayload>(args: { data: SectorUpdateManyMutationInput, where?: SectorWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyApplicants: <T = BatchPayload>(args: { where?: ApplicantWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBookings: <T = BatchPayload>(args: { where?: BookingWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEvents: <T = BatchPayload>(args: { where?: EventWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMemberships: <T = BatchPayload>(args: { where?: MembershipWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySubscribers: <T = BatchPayload>(args: { where?: SubscriberWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAgendas: <T = BatchPayload>(args: { where?: AgendaWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySponsors: <T = BatchPayload>(args: { where?: SponsorWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMembers: <T = BatchPayload>(args: { where?: MemberWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRegions: <T = BatchPayload>(args: { where?: RegionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMemberLevels: <T = BatchPayload>(args: { where?: MemberLevelWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySpeakers: <T = BatchPayload>(args: { where?: SpeakerWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySectors: <T = BatchPayload>(args: { where?: SectorWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    applicant: <T = ApplicantSubscriptionPayload | null>(args: { where?: ApplicantSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    booking: <T = BookingSubscriptionPayload | null>(args: { where?: BookingSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    event: <T = EventSubscriptionPayload | null>(args: { where?: EventSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    membership: <T = MembershipSubscriptionPayload | null>(args: { where?: MembershipSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    subscriber: <T = SubscriberSubscriptionPayload | null>(args: { where?: SubscriberSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    agenda: <T = AgendaSubscriptionPayload | null>(args: { where?: AgendaSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    sponsor: <T = SponsorSubscriptionPayload | null>(args: { where?: SponsorSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    member: <T = MemberSubscriptionPayload | null>(args: { where?: MemberSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    region: <T = RegionSubscriptionPayload | null>(args: { where?: RegionSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    memberLevel: <T = MemberLevelSubscriptionPayload | null>(args: { where?: MemberLevelSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    speaker: <T = SpeakerSubscriptionPayload | null>(args: { where?: SpeakerSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    sector: <T = SectorSubscriptionPayload | null>(args: { where?: SectorSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Applicant: (where?: ApplicantWhereInput) => Promise<boolean>
  Booking: (where?: BookingWhereInput) => Promise<boolean>
  Event: (where?: EventWhereInput) => Promise<boolean>
  Membership: (where?: MembershipWhereInput) => Promise<boolean>
  Subscriber: (where?: SubscriberWhereInput) => Promise<boolean>
  Agenda: (where?: AgendaWhereInput) => Promise<boolean>
  Sponsor: (where?: SponsorWhereInput) => Promise<boolean>
  Member: (where?: MemberWhereInput) => Promise<boolean>
  Region: (where?: RegionWhereInput) => Promise<boolean>
  MemberLevel: (where?: MemberLevelWhereInput) => Promise<boolean>
  Speaker: (where?: SpeakerWhereInput) => Promise<boolean>
  Sector: (where?: SectorWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
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
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type AgendaOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'description_ASC' |
  'description_DESC' |
  'image_ASC' |
  'image_DESC' |
  'name_ASC' |
  'name_DESC'

export type ApplicantOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'type_ASC' |
  'type_DESC' |
  'companyName_ASC' |
  'companyName_DESC' |
  'email_ASC' |
  'email_DESC' |
  'jobTitle_ASC' |
  'jobTitle_DESC' |
  'name_ASC' |
  'name_DESC' |
  'phoneNumber_ASC' |
  'phoneNumber_DESC'

export type BookingOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type EventOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'communityTag_ASC' |
  'communityTag_DESC' |
  'date_ASC' |
  'date_DESC' |
  'description_ASC' |
  'description_DESC' |
  'name_ASC' |
  'name_DESC' |
  'time_ASC' |
  'time_DESC' |
  'coordinator_ASC' |
  'coordinator_DESC' |
  'type_ASC' |
  'type_DESC'

export type EventType =   'MEMBER_EVENT' |
  'CORPORATE_EVENT' |
  'RESEARCH_EVENT' |
  'CONFERENCE' |
  'SPECIAL_EVENT'

export type LevelName =   'MEMBER' |
  'ASSOCIATE' |
  'PARTNER' |
  'STRATEGIC_PARTNER'

export type MemberLevelOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'subscription_ASC' |
  'subscription_DESC'

export type MemberOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'type_ASC' |
  'type_DESC' |
  'companyName_ASC' |
  'companyName_DESC' |
  'email_ASC' |
  'email_DESC' |
  'isAdmin_ASC' |
  'isAdmin_DESC' |
  'jobTitle_ASC' |
  'jobTitle_DESC' |
  'name_ASC' |
  'name_DESC' |
  'password_ASC' |
  'password_DESC' |
  'phoneNumber_ASC' |
  'phoneNumber_DESC' |
  'profilePicture_ASC' |
  'profilePicture_DESC'

export type MembershipOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'type_ASC' |
  'type_DESC'

export type MemberType =   'INDIVIDUAL' |
  'INSTITUTIONAL'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type RegionOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC'

export type SectorOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'description_ASC' |
  'description_DESC' |
  'name_ASC' |
  'name_DESC'

export type SpeakerOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'jobTitle_ASC' |
  'jobTitle_DESC' |
  'avatar_ASC' |
  'avatar_DESC' |
  'name_ASC' |
  'name_DESC'

export type SponsorOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'avatar_ASC' |
  'avatar_DESC' |
  'name_ASC' |
  'name_DESC'

export type SubscriberOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'email_ASC' |
  'email_DESC'

export interface AgendaCreateInput {
  description?: String | null
  image?: String | null
  name: String
}

export interface AgendaCreateOneInput {
  create?: AgendaCreateInput | null
  connect?: AgendaWhereUniqueInput | null
}

export interface AgendaSubscriptionWhereInput {
  AND?: AgendaSubscriptionWhereInput[] | AgendaSubscriptionWhereInput | null
  OR?: AgendaSubscriptionWhereInput[] | AgendaSubscriptionWhereInput | null
  NOT?: AgendaSubscriptionWhereInput[] | AgendaSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: AgendaWhereInput | null
}

export interface AgendaUpdateDataInput {
  description?: String | null
  image?: String | null
  name?: String | null
}

export interface AgendaUpdateInput {
  description?: String | null
  image?: String | null
  name?: String | null
}

export interface AgendaUpdateManyMutationInput {
  description?: String | null
  image?: String | null
  name?: String | null
}

export interface AgendaUpdateOneInput {
  create?: AgendaCreateInput | null
  connect?: AgendaWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: AgendaUpdateDataInput | null
  upsert?: AgendaUpsertNestedInput | null
}

export interface AgendaUpsertNestedInput {
  update: AgendaUpdateDataInput
  create: AgendaCreateInput
}

export interface AgendaWhereInput {
  AND?: AgendaWhereInput[] | AgendaWhereInput | null
  OR?: AgendaWhereInput[] | AgendaWhereInput | null
  NOT?: AgendaWhereInput[] | AgendaWhereInput | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  image?: String | null
  image_not?: String | null
  image_in?: String[] | String | null
  image_not_in?: String[] | String | null
  image_lt?: String | null
  image_lte?: String | null
  image_gt?: String | null
  image_gte?: String | null
  image_contains?: String | null
  image_not_contains?: String | null
  image_starts_with?: String | null
  image_not_starts_with?: String | null
  image_ends_with?: String | null
  image_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
}

export interface AgendaWhereUniqueInput {
  id?: ID_Input | null
}

export interface ApplicantCreateInput {
  type?: MemberType | null
  companyName?: String | null
  email: String
  jobTitle?: String | null
  name?: String | null
  phoneNumber?: String | null
}

export interface ApplicantSubscriptionWhereInput {
  AND?: ApplicantSubscriptionWhereInput[] | ApplicantSubscriptionWhereInput | null
  OR?: ApplicantSubscriptionWhereInput[] | ApplicantSubscriptionWhereInput | null
  NOT?: ApplicantSubscriptionWhereInput[] | ApplicantSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ApplicantWhereInput | null
}

export interface ApplicantUpdateInput {
  type?: MemberType | null
  companyName?: String | null
  email?: String | null
  jobTitle?: String | null
  name?: String | null
  phoneNumber?: String | null
}

export interface ApplicantUpdateManyMutationInput {
  type?: MemberType | null
  companyName?: String | null
  email?: String | null
  jobTitle?: String | null
  name?: String | null
  phoneNumber?: String | null
}

export interface ApplicantWhereInput {
  AND?: ApplicantWhereInput[] | ApplicantWhereInput | null
  OR?: ApplicantWhereInput[] | ApplicantWhereInput | null
  NOT?: ApplicantWhereInput[] | ApplicantWhereInput | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  type?: MemberType | null
  type_not?: MemberType | null
  type_in?: MemberType[] | MemberType | null
  type_not_in?: MemberType[] | MemberType | null
  companyName?: String | null
  companyName_not?: String | null
  companyName_in?: String[] | String | null
  companyName_not_in?: String[] | String | null
  companyName_lt?: String | null
  companyName_lte?: String | null
  companyName_gt?: String | null
  companyName_gte?: String | null
  companyName_contains?: String | null
  companyName_not_contains?: String | null
  companyName_starts_with?: String | null
  companyName_not_starts_with?: String | null
  companyName_ends_with?: String | null
  companyName_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  jobTitle?: String | null
  jobTitle_not?: String | null
  jobTitle_in?: String[] | String | null
  jobTitle_not_in?: String[] | String | null
  jobTitle_lt?: String | null
  jobTitle_lte?: String | null
  jobTitle_gt?: String | null
  jobTitle_gte?: String | null
  jobTitle_contains?: String | null
  jobTitle_not_contains?: String | null
  jobTitle_starts_with?: String | null
  jobTitle_not_starts_with?: String | null
  jobTitle_ends_with?: String | null
  jobTitle_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  phoneNumber?: String | null
  phoneNumber_not?: String | null
  phoneNumber_in?: String[] | String | null
  phoneNumber_not_in?: String[] | String | null
  phoneNumber_lt?: String | null
  phoneNumber_lte?: String | null
  phoneNumber_gt?: String | null
  phoneNumber_gte?: String | null
  phoneNumber_contains?: String | null
  phoneNumber_not_contains?: String | null
  phoneNumber_starts_with?: String | null
  phoneNumber_not_starts_with?: String | null
  phoneNumber_ends_with?: String | null
  phoneNumber_not_ends_with?: String | null
}

export interface ApplicantWhereUniqueInput {
  id?: ID_Input | null
  email?: String | null
}

export interface BookingCreateInput {
  event?: EventCreateOneWithoutBookingsInput | null
  member?: MemberCreateOneInput | null
}

export interface BookingCreateManyWithoutEventInput {
  create?: BookingCreateWithoutEventInput[] | BookingCreateWithoutEventInput | null
  connect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput | null
}

export interface BookingCreateWithoutEventInput {
  member?: MemberCreateOneInput | null
}

export interface BookingScalarWhereInput {
  AND?: BookingScalarWhereInput[] | BookingScalarWhereInput | null
  OR?: BookingScalarWhereInput[] | BookingScalarWhereInput | null
  NOT?: BookingScalarWhereInput[] | BookingScalarWhereInput | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
}

export interface BookingSubscriptionWhereInput {
  AND?: BookingSubscriptionWhereInput[] | BookingSubscriptionWhereInput | null
  OR?: BookingSubscriptionWhereInput[] | BookingSubscriptionWhereInput | null
  NOT?: BookingSubscriptionWhereInput[] | BookingSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: BookingWhereInput | null
}

export interface BookingUpdateInput {
  event?: EventUpdateOneWithoutBookingsInput | null
  member?: MemberUpdateOneInput | null
}

export interface BookingUpdateManyWithoutEventInput {
  create?: BookingCreateWithoutEventInput[] | BookingCreateWithoutEventInput | null
  connect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput | null
  set?: BookingWhereUniqueInput[] | BookingWhereUniqueInput | null
  disconnect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput | null
  delete?: BookingWhereUniqueInput[] | BookingWhereUniqueInput | null
  update?: BookingUpdateWithWhereUniqueWithoutEventInput[] | BookingUpdateWithWhereUniqueWithoutEventInput | null
  deleteMany?: BookingScalarWhereInput[] | BookingScalarWhereInput | null
  upsert?: BookingUpsertWithWhereUniqueWithoutEventInput[] | BookingUpsertWithWhereUniqueWithoutEventInput | null
}

export interface BookingUpdateWithoutEventDataInput {
  member?: MemberUpdateOneInput | null
}

export interface BookingUpdateWithWhereUniqueWithoutEventInput {
  where: BookingWhereUniqueInput
  data: BookingUpdateWithoutEventDataInput
}

export interface BookingUpsertWithWhereUniqueWithoutEventInput {
  where: BookingWhereUniqueInput
  update: BookingUpdateWithoutEventDataInput
  create: BookingCreateWithoutEventInput
}

export interface BookingWhereInput {
  AND?: BookingWhereInput[] | BookingWhereInput | null
  OR?: BookingWhereInput[] | BookingWhereInput | null
  NOT?: BookingWhereInput[] | BookingWhereInput | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  event?: EventWhereInput | null
  member?: MemberWhereInput | null
}

export interface BookingWhereUniqueInput {
  id?: ID_Input | null
}

export interface EventCreateInput {
  communityTag?: String | null
  date?: String | null
  description?: String | null
  name: String
  time?: String | null
  coordinator?: String | null
  type?: EventType | null
  agenda?: AgendaCreateOneInput | null
  bookings?: BookingCreateManyWithoutEventInput | null
  memberLevel?: MemberLevelCreateManyWithoutEventInput | null
  region?: RegionCreateOneInput | null
  sector?: SectorCreateOneInput | null
  speakers?: SpeakerCreateManyInput | null
  sponsors?: SponsorCreateManyInput | null
}

export interface EventCreateManyWithoutMemberLevelInput {
  create?: EventCreateWithoutMemberLevelInput[] | EventCreateWithoutMemberLevelInput | null
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput | null
}

export interface EventCreateOneWithoutBookingsInput {
  create?: EventCreateWithoutBookingsInput | null
  connect?: EventWhereUniqueInput | null
}

export interface EventCreateWithoutBookingsInput {
  communityTag?: String | null
  date?: String | null
  description?: String | null
  name: String
  time?: String | null
  coordinator?: String | null
  type?: EventType | null
  agenda?: AgendaCreateOneInput | null
  memberLevel?: MemberLevelCreateManyWithoutEventInput | null
  region?: RegionCreateOneInput | null
  sector?: SectorCreateOneInput | null
  speakers?: SpeakerCreateManyInput | null
  sponsors?: SponsorCreateManyInput | null
}

export interface EventCreateWithoutMemberLevelInput {
  communityTag?: String | null
  date?: String | null
  description?: String | null
  name: String
  time?: String | null
  coordinator?: String | null
  type?: EventType | null
  agenda?: AgendaCreateOneInput | null
  bookings?: BookingCreateManyWithoutEventInput | null
  region?: RegionCreateOneInput | null
  sector?: SectorCreateOneInput | null
  speakers?: SpeakerCreateManyInput | null
  sponsors?: SponsorCreateManyInput | null
}

export interface EventScalarWhereInput {
  AND?: EventScalarWhereInput[] | EventScalarWhereInput | null
  OR?: EventScalarWhereInput[] | EventScalarWhereInput | null
  NOT?: EventScalarWhereInput[] | EventScalarWhereInput | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  communityTag?: String | null
  communityTag_not?: String | null
  communityTag_in?: String[] | String | null
  communityTag_not_in?: String[] | String | null
  communityTag_lt?: String | null
  communityTag_lte?: String | null
  communityTag_gt?: String | null
  communityTag_gte?: String | null
  communityTag_contains?: String | null
  communityTag_not_contains?: String | null
  communityTag_starts_with?: String | null
  communityTag_not_starts_with?: String | null
  communityTag_ends_with?: String | null
  communityTag_not_ends_with?: String | null
  date?: String | null
  date_not?: String | null
  date_in?: String[] | String | null
  date_not_in?: String[] | String | null
  date_lt?: String | null
  date_lte?: String | null
  date_gt?: String | null
  date_gte?: String | null
  date_contains?: String | null
  date_not_contains?: String | null
  date_starts_with?: String | null
  date_not_starts_with?: String | null
  date_ends_with?: String | null
  date_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  time?: String | null
  time_not?: String | null
  time_in?: String[] | String | null
  time_not_in?: String[] | String | null
  time_lt?: String | null
  time_lte?: String | null
  time_gt?: String | null
  time_gte?: String | null
  time_contains?: String | null
  time_not_contains?: String | null
  time_starts_with?: String | null
  time_not_starts_with?: String | null
  time_ends_with?: String | null
  time_not_ends_with?: String | null
  coordinator?: String | null
  coordinator_not?: String | null
  coordinator_in?: String[] | String | null
  coordinator_not_in?: String[] | String | null
  coordinator_lt?: String | null
  coordinator_lte?: String | null
  coordinator_gt?: String | null
  coordinator_gte?: String | null
  coordinator_contains?: String | null
  coordinator_not_contains?: String | null
  coordinator_starts_with?: String | null
  coordinator_not_starts_with?: String | null
  coordinator_ends_with?: String | null
  coordinator_not_ends_with?: String | null
  type?: EventType | null
  type_not?: EventType | null
  type_in?: EventType[] | EventType | null
  type_not_in?: EventType[] | EventType | null
}

export interface EventSubscriptionWhereInput {
  AND?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput | null
  OR?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput | null
  NOT?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: EventWhereInput | null
}

export interface EventUpdateInput {
  communityTag?: String | null
  date?: String | null
  description?: String | null
  name?: String | null
  time?: String | null
  coordinator?: String | null
  type?: EventType | null
  agenda?: AgendaUpdateOneInput | null
  bookings?: BookingUpdateManyWithoutEventInput | null
  memberLevel?: MemberLevelUpdateManyWithoutEventInput | null
  region?: RegionUpdateOneInput | null
  sector?: SectorUpdateOneInput | null
  speakers?: SpeakerUpdateManyInput | null
  sponsors?: SponsorUpdateManyInput | null
}

export interface EventUpdateManyDataInput {
  communityTag?: String | null
  date?: String | null
  description?: String | null
  name?: String | null
  time?: String | null
  coordinator?: String | null
  type?: EventType | null
}

export interface EventUpdateManyMutationInput {
  communityTag?: String | null
  date?: String | null
  description?: String | null
  name?: String | null
  time?: String | null
  coordinator?: String | null
  type?: EventType | null
}

export interface EventUpdateManyWithoutMemberLevelInput {
  create?: EventCreateWithoutMemberLevelInput[] | EventCreateWithoutMemberLevelInput | null
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput | null
  set?: EventWhereUniqueInput[] | EventWhereUniqueInput | null
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput | null
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput | null
  update?: EventUpdateWithWhereUniqueWithoutMemberLevelInput[] | EventUpdateWithWhereUniqueWithoutMemberLevelInput | null
  updateMany?: EventUpdateManyWithWhereNestedInput[] | EventUpdateManyWithWhereNestedInput | null
  deleteMany?: EventScalarWhereInput[] | EventScalarWhereInput | null
  upsert?: EventUpsertWithWhereUniqueWithoutMemberLevelInput[] | EventUpsertWithWhereUniqueWithoutMemberLevelInput | null
}

export interface EventUpdateManyWithWhereNestedInput {
  where: EventScalarWhereInput
  data: EventUpdateManyDataInput
}

export interface EventUpdateOneWithoutBookingsInput {
  create?: EventCreateWithoutBookingsInput | null
  connect?: EventWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: EventUpdateWithoutBookingsDataInput | null
  upsert?: EventUpsertWithoutBookingsInput | null
}

export interface EventUpdateWithoutBookingsDataInput {
  communityTag?: String | null
  date?: String | null
  description?: String | null
  name?: String | null
  time?: String | null
  coordinator?: String | null
  type?: EventType | null
  agenda?: AgendaUpdateOneInput | null
  memberLevel?: MemberLevelUpdateManyWithoutEventInput | null
  region?: RegionUpdateOneInput | null
  sector?: SectorUpdateOneInput | null
  speakers?: SpeakerUpdateManyInput | null
  sponsors?: SponsorUpdateManyInput | null
}

export interface EventUpdateWithoutMemberLevelDataInput {
  communityTag?: String | null
  date?: String | null
  description?: String | null
  name?: String | null
  time?: String | null
  coordinator?: String | null
  type?: EventType | null
  agenda?: AgendaUpdateOneInput | null
  bookings?: BookingUpdateManyWithoutEventInput | null
  region?: RegionUpdateOneInput | null
  sector?: SectorUpdateOneInput | null
  speakers?: SpeakerUpdateManyInput | null
  sponsors?: SponsorUpdateManyInput | null
}

export interface EventUpdateWithWhereUniqueWithoutMemberLevelInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutMemberLevelDataInput
}

export interface EventUpsertWithoutBookingsInput {
  update: EventUpdateWithoutBookingsDataInput
  create: EventCreateWithoutBookingsInput
}

export interface EventUpsertWithWhereUniqueWithoutMemberLevelInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutMemberLevelDataInput
  create: EventCreateWithoutMemberLevelInput
}

export interface EventWhereInput {
  AND?: EventWhereInput[] | EventWhereInput | null
  OR?: EventWhereInput[] | EventWhereInput | null
  NOT?: EventWhereInput[] | EventWhereInput | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  communityTag?: String | null
  communityTag_not?: String | null
  communityTag_in?: String[] | String | null
  communityTag_not_in?: String[] | String | null
  communityTag_lt?: String | null
  communityTag_lte?: String | null
  communityTag_gt?: String | null
  communityTag_gte?: String | null
  communityTag_contains?: String | null
  communityTag_not_contains?: String | null
  communityTag_starts_with?: String | null
  communityTag_not_starts_with?: String | null
  communityTag_ends_with?: String | null
  communityTag_not_ends_with?: String | null
  date?: String | null
  date_not?: String | null
  date_in?: String[] | String | null
  date_not_in?: String[] | String | null
  date_lt?: String | null
  date_lte?: String | null
  date_gt?: String | null
  date_gte?: String | null
  date_contains?: String | null
  date_not_contains?: String | null
  date_starts_with?: String | null
  date_not_starts_with?: String | null
  date_ends_with?: String | null
  date_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  time?: String | null
  time_not?: String | null
  time_in?: String[] | String | null
  time_not_in?: String[] | String | null
  time_lt?: String | null
  time_lte?: String | null
  time_gt?: String | null
  time_gte?: String | null
  time_contains?: String | null
  time_not_contains?: String | null
  time_starts_with?: String | null
  time_not_starts_with?: String | null
  time_ends_with?: String | null
  time_not_ends_with?: String | null
  coordinator?: String | null
  coordinator_not?: String | null
  coordinator_in?: String[] | String | null
  coordinator_not_in?: String[] | String | null
  coordinator_lt?: String | null
  coordinator_lte?: String | null
  coordinator_gt?: String | null
  coordinator_gte?: String | null
  coordinator_contains?: String | null
  coordinator_not_contains?: String | null
  coordinator_starts_with?: String | null
  coordinator_not_starts_with?: String | null
  coordinator_ends_with?: String | null
  coordinator_not_ends_with?: String | null
  type?: EventType | null
  type_not?: EventType | null
  type_in?: EventType[] | EventType | null
  type_not_in?: EventType[] | EventType | null
  agenda?: AgendaWhereInput | null
  bookings_every?: BookingWhereInput | null
  bookings_some?: BookingWhereInput | null
  bookings_none?: BookingWhereInput | null
  memberLevel_every?: MemberLevelWhereInput | null
  memberLevel_some?: MemberLevelWhereInput | null
  memberLevel_none?: MemberLevelWhereInput | null
  region?: RegionWhereInput | null
  sector?: SectorWhereInput | null
  speakers_every?: SpeakerWhereInput | null
  speakers_some?: SpeakerWhereInput | null
  speakers_none?: SpeakerWhereInput | null
  sponsors_every?: SponsorWhereInput | null
  sponsors_some?: SponsorWhereInput | null
  sponsors_none?: SponsorWhereInput | null
}

export interface EventWhereUniqueInput {
  id?: ID_Input | null
}

export interface MemberCreateInput {
  type?: MemberType | null
  companyName?: String | null
  email: String
  isAdmin?: Boolean | null
  jobTitle?: String | null
  name?: String | null
  password?: String | null
  phoneNumber?: String | null
  profilePicture?: String | null
  membership?: MembershipCreateOneWithoutMemberInput | null
}

export interface MemberCreateOneInput {
  create?: MemberCreateInput | null
  connect?: MemberWhereUniqueInput | null
}

export interface MemberCreateOneWithoutMembershipInput {
  create?: MemberCreateWithoutMembershipInput | null
  connect?: MemberWhereUniqueInput | null
}

export interface MemberCreateWithoutMembershipInput {
  type?: MemberType | null
  companyName?: String | null
  email: String
  isAdmin?: Boolean | null
  jobTitle?: String | null
  name?: String | null
  password?: String | null
  phoneNumber?: String | null
  profilePicture?: String | null
}

export interface MemberLevelCreateInput {
  name?: LevelName | null
  subscription?: String | null
  event?: EventCreateManyWithoutMemberLevelInput | null
}

export interface MemberLevelCreateManyWithoutEventInput {
  create?: MemberLevelCreateWithoutEventInput[] | MemberLevelCreateWithoutEventInput | null
  connect?: MemberLevelWhereUniqueInput[] | MemberLevelWhereUniqueInput | null
}

export interface MemberLevelCreateOneInput {
  create?: MemberLevelCreateInput | null
  connect?: MemberLevelWhereUniqueInput | null
}

export interface MemberLevelCreateWithoutEventInput {
  name?: LevelName | null
  subscription?: String | null
}

export interface MemberLevelScalarWhereInput {
  AND?: MemberLevelScalarWhereInput[] | MemberLevelScalarWhereInput | null
  OR?: MemberLevelScalarWhereInput[] | MemberLevelScalarWhereInput | null
  NOT?: MemberLevelScalarWhereInput[] | MemberLevelScalarWhereInput | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: LevelName | null
  name_not?: LevelName | null
  name_in?: LevelName[] | LevelName | null
  name_not_in?: LevelName[] | LevelName | null
  subscription?: String | null
  subscription_not?: String | null
  subscription_in?: String[] | String | null
  subscription_not_in?: String[] | String | null
  subscription_lt?: String | null
  subscription_lte?: String | null
  subscription_gt?: String | null
  subscription_gte?: String | null
  subscription_contains?: String | null
  subscription_not_contains?: String | null
  subscription_starts_with?: String | null
  subscription_not_starts_with?: String | null
  subscription_ends_with?: String | null
  subscription_not_ends_with?: String | null
}

export interface MemberLevelSubscriptionWhereInput {
  AND?: MemberLevelSubscriptionWhereInput[] | MemberLevelSubscriptionWhereInput | null
  OR?: MemberLevelSubscriptionWhereInput[] | MemberLevelSubscriptionWhereInput | null
  NOT?: MemberLevelSubscriptionWhereInput[] | MemberLevelSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: MemberLevelWhereInput | null
}

export interface MemberLevelUpdateDataInput {
  name?: LevelName | null
  subscription?: String | null
  event?: EventUpdateManyWithoutMemberLevelInput | null
}

export interface MemberLevelUpdateInput {
  name?: LevelName | null
  subscription?: String | null
  event?: EventUpdateManyWithoutMemberLevelInput | null
}

export interface MemberLevelUpdateManyDataInput {
  name?: LevelName | null
  subscription?: String | null
}

export interface MemberLevelUpdateManyMutationInput {
  name?: LevelName | null
  subscription?: String | null
}

export interface MemberLevelUpdateManyWithoutEventInput {
  create?: MemberLevelCreateWithoutEventInput[] | MemberLevelCreateWithoutEventInput | null
  connect?: MemberLevelWhereUniqueInput[] | MemberLevelWhereUniqueInput | null
  set?: MemberLevelWhereUniqueInput[] | MemberLevelWhereUniqueInput | null
  disconnect?: MemberLevelWhereUniqueInput[] | MemberLevelWhereUniqueInput | null
  delete?: MemberLevelWhereUniqueInput[] | MemberLevelWhereUniqueInput | null
  update?: MemberLevelUpdateWithWhereUniqueWithoutEventInput[] | MemberLevelUpdateWithWhereUniqueWithoutEventInput | null
  updateMany?: MemberLevelUpdateManyWithWhereNestedInput[] | MemberLevelUpdateManyWithWhereNestedInput | null
  deleteMany?: MemberLevelScalarWhereInput[] | MemberLevelScalarWhereInput | null
  upsert?: MemberLevelUpsertWithWhereUniqueWithoutEventInput[] | MemberLevelUpsertWithWhereUniqueWithoutEventInput | null
}

export interface MemberLevelUpdateManyWithWhereNestedInput {
  where: MemberLevelScalarWhereInput
  data: MemberLevelUpdateManyDataInput
}

export interface MemberLevelUpdateOneInput {
  create?: MemberLevelCreateInput | null
  connect?: MemberLevelWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: MemberLevelUpdateDataInput | null
  upsert?: MemberLevelUpsertNestedInput | null
}

export interface MemberLevelUpdateWithoutEventDataInput {
  name?: LevelName | null
  subscription?: String | null
}

export interface MemberLevelUpdateWithWhereUniqueWithoutEventInput {
  where: MemberLevelWhereUniqueInput
  data: MemberLevelUpdateWithoutEventDataInput
}

export interface MemberLevelUpsertNestedInput {
  update: MemberLevelUpdateDataInput
  create: MemberLevelCreateInput
}

export interface MemberLevelUpsertWithWhereUniqueWithoutEventInput {
  where: MemberLevelWhereUniqueInput
  update: MemberLevelUpdateWithoutEventDataInput
  create: MemberLevelCreateWithoutEventInput
}

export interface MemberLevelWhereInput {
  AND?: MemberLevelWhereInput[] | MemberLevelWhereInput | null
  OR?: MemberLevelWhereInput[] | MemberLevelWhereInput | null
  NOT?: MemberLevelWhereInput[] | MemberLevelWhereInput | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: LevelName | null
  name_not?: LevelName | null
  name_in?: LevelName[] | LevelName | null
  name_not_in?: LevelName[] | LevelName | null
  subscription?: String | null
  subscription_not?: String | null
  subscription_in?: String[] | String | null
  subscription_not_in?: String[] | String | null
  subscription_lt?: String | null
  subscription_lte?: String | null
  subscription_gt?: String | null
  subscription_gte?: String | null
  subscription_contains?: String | null
  subscription_not_contains?: String | null
  subscription_starts_with?: String | null
  subscription_not_starts_with?: String | null
  subscription_ends_with?: String | null
  subscription_not_ends_with?: String | null
  event_every?: EventWhereInput | null
  event_some?: EventWhereInput | null
  event_none?: EventWhereInput | null
}

export interface MemberLevelWhereUniqueInput {
  id?: ID_Input | null
}

export interface MembershipCreateInput {
  type?: MemberType | null
  level?: MemberLevelCreateOneInput | null
  member?: MemberCreateOneWithoutMembershipInput | null
}

export interface MembershipCreateOneWithoutMemberInput {
  create?: MembershipCreateWithoutMemberInput | null
  connect?: MembershipWhereUniqueInput | null
}

export interface MembershipCreateWithoutMemberInput {
  type?: MemberType | null
  level?: MemberLevelCreateOneInput | null
}

export interface MembershipSubscriptionWhereInput {
  AND?: MembershipSubscriptionWhereInput[] | MembershipSubscriptionWhereInput | null
  OR?: MembershipSubscriptionWhereInput[] | MembershipSubscriptionWhereInput | null
  NOT?: MembershipSubscriptionWhereInput[] | MembershipSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: MembershipWhereInput | null
}

export interface MembershipUpdateInput {
  type?: MemberType | null
  level?: MemberLevelUpdateOneInput | null
  member?: MemberUpdateOneWithoutMembershipInput | null
}

export interface MembershipUpdateManyMutationInput {
  type?: MemberType | null
}

export interface MembershipUpdateOneWithoutMemberInput {
  create?: MembershipCreateWithoutMemberInput | null
  connect?: MembershipWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: MembershipUpdateWithoutMemberDataInput | null
  upsert?: MembershipUpsertWithoutMemberInput | null
}

export interface MembershipUpdateWithoutMemberDataInput {
  type?: MemberType | null
  level?: MemberLevelUpdateOneInput | null
}

export interface MembershipUpsertWithoutMemberInput {
  update: MembershipUpdateWithoutMemberDataInput
  create: MembershipCreateWithoutMemberInput
}

export interface MembershipWhereInput {
  AND?: MembershipWhereInput[] | MembershipWhereInput | null
  OR?: MembershipWhereInput[] | MembershipWhereInput | null
  NOT?: MembershipWhereInput[] | MembershipWhereInput | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  type?: MemberType | null
  type_not?: MemberType | null
  type_in?: MemberType[] | MemberType | null
  type_not_in?: MemberType[] | MemberType | null
  level?: MemberLevelWhereInput | null
  member?: MemberWhereInput | null
}

export interface MembershipWhereUniqueInput {
  id?: ID_Input | null
}

export interface MemberSubscriptionWhereInput {
  AND?: MemberSubscriptionWhereInput[] | MemberSubscriptionWhereInput | null
  OR?: MemberSubscriptionWhereInput[] | MemberSubscriptionWhereInput | null
  NOT?: MemberSubscriptionWhereInput[] | MemberSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: MemberWhereInput | null
}

export interface MemberUpdateDataInput {
  type?: MemberType | null
  companyName?: String | null
  email?: String | null
  isAdmin?: Boolean | null
  jobTitle?: String | null
  name?: String | null
  password?: String | null
  phoneNumber?: String | null
  profilePicture?: String | null
  membership?: MembershipUpdateOneWithoutMemberInput | null
}

export interface MemberUpdateInput {
  type?: MemberType | null
  companyName?: String | null
  email?: String | null
  isAdmin?: Boolean | null
  jobTitle?: String | null
  name?: String | null
  password?: String | null
  phoneNumber?: String | null
  profilePicture?: String | null
  membership?: MembershipUpdateOneWithoutMemberInput | null
}

export interface MemberUpdateManyMutationInput {
  type?: MemberType | null
  companyName?: String | null
  email?: String | null
  isAdmin?: Boolean | null
  jobTitle?: String | null
  name?: String | null
  password?: String | null
  phoneNumber?: String | null
  profilePicture?: String | null
}

export interface MemberUpdateOneInput {
  create?: MemberCreateInput | null
  connect?: MemberWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: MemberUpdateDataInput | null
  upsert?: MemberUpsertNestedInput | null
}

export interface MemberUpdateOneWithoutMembershipInput {
  create?: MemberCreateWithoutMembershipInput | null
  connect?: MemberWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: MemberUpdateWithoutMembershipDataInput | null
  upsert?: MemberUpsertWithoutMembershipInput | null
}

export interface MemberUpdateWithoutMembershipDataInput {
  type?: MemberType | null
  companyName?: String | null
  email?: String | null
  isAdmin?: Boolean | null
  jobTitle?: String | null
  name?: String | null
  password?: String | null
  phoneNumber?: String | null
  profilePicture?: String | null
}

export interface MemberUpsertNestedInput {
  update: MemberUpdateDataInput
  create: MemberCreateInput
}

export interface MemberUpsertWithoutMembershipInput {
  update: MemberUpdateWithoutMembershipDataInput
  create: MemberCreateWithoutMembershipInput
}

export interface MemberWhereInput {
  AND?: MemberWhereInput[] | MemberWhereInput | null
  OR?: MemberWhereInput[] | MemberWhereInput | null
  NOT?: MemberWhereInput[] | MemberWhereInput | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  type?: MemberType | null
  type_not?: MemberType | null
  type_in?: MemberType[] | MemberType | null
  type_not_in?: MemberType[] | MemberType | null
  companyName?: String | null
  companyName_not?: String | null
  companyName_in?: String[] | String | null
  companyName_not_in?: String[] | String | null
  companyName_lt?: String | null
  companyName_lte?: String | null
  companyName_gt?: String | null
  companyName_gte?: String | null
  companyName_contains?: String | null
  companyName_not_contains?: String | null
  companyName_starts_with?: String | null
  companyName_not_starts_with?: String | null
  companyName_ends_with?: String | null
  companyName_not_ends_with?: String | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  isAdmin?: Boolean | null
  isAdmin_not?: Boolean | null
  jobTitle?: String | null
  jobTitle_not?: String | null
  jobTitle_in?: String[] | String | null
  jobTitle_not_in?: String[] | String | null
  jobTitle_lt?: String | null
  jobTitle_lte?: String | null
  jobTitle_gt?: String | null
  jobTitle_gte?: String | null
  jobTitle_contains?: String | null
  jobTitle_not_contains?: String | null
  jobTitle_starts_with?: String | null
  jobTitle_not_starts_with?: String | null
  jobTitle_ends_with?: String | null
  jobTitle_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  phoneNumber?: String | null
  phoneNumber_not?: String | null
  phoneNumber_in?: String[] | String | null
  phoneNumber_not_in?: String[] | String | null
  phoneNumber_lt?: String | null
  phoneNumber_lte?: String | null
  phoneNumber_gt?: String | null
  phoneNumber_gte?: String | null
  phoneNumber_contains?: String | null
  phoneNumber_not_contains?: String | null
  phoneNumber_starts_with?: String | null
  phoneNumber_not_starts_with?: String | null
  phoneNumber_ends_with?: String | null
  phoneNumber_not_ends_with?: String | null
  profilePicture?: String | null
  profilePicture_not?: String | null
  profilePicture_in?: String[] | String | null
  profilePicture_not_in?: String[] | String | null
  profilePicture_lt?: String | null
  profilePicture_lte?: String | null
  profilePicture_gt?: String | null
  profilePicture_gte?: String | null
  profilePicture_contains?: String | null
  profilePicture_not_contains?: String | null
  profilePicture_starts_with?: String | null
  profilePicture_not_starts_with?: String | null
  profilePicture_ends_with?: String | null
  profilePicture_not_ends_with?: String | null
  membership?: MembershipWhereInput | null
}

export interface MemberWhereUniqueInput {
  id?: ID_Input | null
  email?: String | null
}

export interface RegionCreateInput {
  name?: String | null
}

export interface RegionCreateOneInput {
  create?: RegionCreateInput | null
  connect?: RegionWhereUniqueInput | null
}

export interface RegionSubscriptionWhereInput {
  AND?: RegionSubscriptionWhereInput[] | RegionSubscriptionWhereInput | null
  OR?: RegionSubscriptionWhereInput[] | RegionSubscriptionWhereInput | null
  NOT?: RegionSubscriptionWhereInput[] | RegionSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: RegionWhereInput | null
}

export interface RegionUpdateDataInput {
  name?: String | null
}

export interface RegionUpdateInput {
  name?: String | null
}

export interface RegionUpdateManyMutationInput {
  name?: String | null
}

export interface RegionUpdateOneInput {
  create?: RegionCreateInput | null
  connect?: RegionWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: RegionUpdateDataInput | null
  upsert?: RegionUpsertNestedInput | null
}

export interface RegionUpsertNestedInput {
  update: RegionUpdateDataInput
  create: RegionCreateInput
}

export interface RegionWhereInput {
  AND?: RegionWhereInput[] | RegionWhereInput | null
  OR?: RegionWhereInput[] | RegionWhereInput | null
  NOT?: RegionWhereInput[] | RegionWhereInput | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
}

export interface RegionWhereUniqueInput {
  id?: ID_Input | null
}

export interface SectorCreateInput {
  description?: String | null
  name: String
}

export interface SectorCreateOneInput {
  create?: SectorCreateInput | null
  connect?: SectorWhereUniqueInput | null
}

export interface SectorSubscriptionWhereInput {
  AND?: SectorSubscriptionWhereInput[] | SectorSubscriptionWhereInput | null
  OR?: SectorSubscriptionWhereInput[] | SectorSubscriptionWhereInput | null
  NOT?: SectorSubscriptionWhereInput[] | SectorSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: SectorWhereInput | null
}

export interface SectorUpdateDataInput {
  description?: String | null
  name?: String | null
}

export interface SectorUpdateInput {
  description?: String | null
  name?: String | null
}

export interface SectorUpdateManyMutationInput {
  description?: String | null
  name?: String | null
}

export interface SectorUpdateOneInput {
  create?: SectorCreateInput | null
  connect?: SectorWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: SectorUpdateDataInput | null
  upsert?: SectorUpsertNestedInput | null
}

export interface SectorUpsertNestedInput {
  update: SectorUpdateDataInput
  create: SectorCreateInput
}

export interface SectorWhereInput {
  AND?: SectorWhereInput[] | SectorWhereInput | null
  OR?: SectorWhereInput[] | SectorWhereInput | null
  NOT?: SectorWhereInput[] | SectorWhereInput | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
}

export interface SectorWhereUniqueInput {
  id?: ID_Input | null
}

export interface SpeakerCreateInput {
  jobTitle?: String | null
  avatar?: String | null
  name: String
}

export interface SpeakerCreateManyInput {
  create?: SpeakerCreateInput[] | SpeakerCreateInput | null
  connect?: SpeakerWhereUniqueInput[] | SpeakerWhereUniqueInput | null
}

export interface SpeakerScalarWhereInput {
  AND?: SpeakerScalarWhereInput[] | SpeakerScalarWhereInput | null
  OR?: SpeakerScalarWhereInput[] | SpeakerScalarWhereInput | null
  NOT?: SpeakerScalarWhereInput[] | SpeakerScalarWhereInput | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  jobTitle?: String | null
  jobTitle_not?: String | null
  jobTitle_in?: String[] | String | null
  jobTitle_not_in?: String[] | String | null
  jobTitle_lt?: String | null
  jobTitle_lte?: String | null
  jobTitle_gt?: String | null
  jobTitle_gte?: String | null
  jobTitle_contains?: String | null
  jobTitle_not_contains?: String | null
  jobTitle_starts_with?: String | null
  jobTitle_not_starts_with?: String | null
  jobTitle_ends_with?: String | null
  jobTitle_not_ends_with?: String | null
  avatar?: String | null
  avatar_not?: String | null
  avatar_in?: String[] | String | null
  avatar_not_in?: String[] | String | null
  avatar_lt?: String | null
  avatar_lte?: String | null
  avatar_gt?: String | null
  avatar_gte?: String | null
  avatar_contains?: String | null
  avatar_not_contains?: String | null
  avatar_starts_with?: String | null
  avatar_not_starts_with?: String | null
  avatar_ends_with?: String | null
  avatar_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
}

export interface SpeakerSubscriptionWhereInput {
  AND?: SpeakerSubscriptionWhereInput[] | SpeakerSubscriptionWhereInput | null
  OR?: SpeakerSubscriptionWhereInput[] | SpeakerSubscriptionWhereInput | null
  NOT?: SpeakerSubscriptionWhereInput[] | SpeakerSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: SpeakerWhereInput | null
}

export interface SpeakerUpdateDataInput {
  jobTitle?: String | null
  avatar?: String | null
  name?: String | null
}

export interface SpeakerUpdateInput {
  jobTitle?: String | null
  avatar?: String | null
  name?: String | null
}

export interface SpeakerUpdateManyDataInput {
  jobTitle?: String | null
  avatar?: String | null
  name?: String | null
}

export interface SpeakerUpdateManyInput {
  create?: SpeakerCreateInput[] | SpeakerCreateInput | null
  connect?: SpeakerWhereUniqueInput[] | SpeakerWhereUniqueInput | null
  set?: SpeakerWhereUniqueInput[] | SpeakerWhereUniqueInput | null
  disconnect?: SpeakerWhereUniqueInput[] | SpeakerWhereUniqueInput | null
  delete?: SpeakerWhereUniqueInput[] | SpeakerWhereUniqueInput | null
  update?: SpeakerUpdateWithWhereUniqueNestedInput[] | SpeakerUpdateWithWhereUniqueNestedInput | null
  updateMany?: SpeakerUpdateManyWithWhereNestedInput[] | SpeakerUpdateManyWithWhereNestedInput | null
  deleteMany?: SpeakerScalarWhereInput[] | SpeakerScalarWhereInput | null
  upsert?: SpeakerUpsertWithWhereUniqueNestedInput[] | SpeakerUpsertWithWhereUniqueNestedInput | null
}

export interface SpeakerUpdateManyMutationInput {
  jobTitle?: String | null
  avatar?: String | null
  name?: String | null
}

export interface SpeakerUpdateManyWithWhereNestedInput {
  where: SpeakerScalarWhereInput
  data: SpeakerUpdateManyDataInput
}

export interface SpeakerUpdateWithWhereUniqueNestedInput {
  where: SpeakerWhereUniqueInput
  data: SpeakerUpdateDataInput
}

export interface SpeakerUpsertWithWhereUniqueNestedInput {
  where: SpeakerWhereUniqueInput
  update: SpeakerUpdateDataInput
  create: SpeakerCreateInput
}

export interface SpeakerWhereInput {
  AND?: SpeakerWhereInput[] | SpeakerWhereInput | null
  OR?: SpeakerWhereInput[] | SpeakerWhereInput | null
  NOT?: SpeakerWhereInput[] | SpeakerWhereInput | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  jobTitle?: String | null
  jobTitle_not?: String | null
  jobTitle_in?: String[] | String | null
  jobTitle_not_in?: String[] | String | null
  jobTitle_lt?: String | null
  jobTitle_lte?: String | null
  jobTitle_gt?: String | null
  jobTitle_gte?: String | null
  jobTitle_contains?: String | null
  jobTitle_not_contains?: String | null
  jobTitle_starts_with?: String | null
  jobTitle_not_starts_with?: String | null
  jobTitle_ends_with?: String | null
  jobTitle_not_ends_with?: String | null
  avatar?: String | null
  avatar_not?: String | null
  avatar_in?: String[] | String | null
  avatar_not_in?: String[] | String | null
  avatar_lt?: String | null
  avatar_lte?: String | null
  avatar_gt?: String | null
  avatar_gte?: String | null
  avatar_contains?: String | null
  avatar_not_contains?: String | null
  avatar_starts_with?: String | null
  avatar_not_starts_with?: String | null
  avatar_ends_with?: String | null
  avatar_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
}

export interface SpeakerWhereUniqueInput {
  id?: ID_Input | null
}

export interface SponsorCreateInput {
  avatar?: String | null
  name: String
}

export interface SponsorCreateManyInput {
  create?: SponsorCreateInput[] | SponsorCreateInput | null
  connect?: SponsorWhereUniqueInput[] | SponsorWhereUniqueInput | null
}

export interface SponsorScalarWhereInput {
  AND?: SponsorScalarWhereInput[] | SponsorScalarWhereInput | null
  OR?: SponsorScalarWhereInput[] | SponsorScalarWhereInput | null
  NOT?: SponsorScalarWhereInput[] | SponsorScalarWhereInput | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  avatar?: String | null
  avatar_not?: String | null
  avatar_in?: String[] | String | null
  avatar_not_in?: String[] | String | null
  avatar_lt?: String | null
  avatar_lte?: String | null
  avatar_gt?: String | null
  avatar_gte?: String | null
  avatar_contains?: String | null
  avatar_not_contains?: String | null
  avatar_starts_with?: String | null
  avatar_not_starts_with?: String | null
  avatar_ends_with?: String | null
  avatar_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
}

export interface SponsorSubscriptionWhereInput {
  AND?: SponsorSubscriptionWhereInput[] | SponsorSubscriptionWhereInput | null
  OR?: SponsorSubscriptionWhereInput[] | SponsorSubscriptionWhereInput | null
  NOT?: SponsorSubscriptionWhereInput[] | SponsorSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: SponsorWhereInput | null
}

export interface SponsorUpdateDataInput {
  avatar?: String | null
  name?: String | null
}

export interface SponsorUpdateInput {
  avatar?: String | null
  name?: String | null
}

export interface SponsorUpdateManyDataInput {
  avatar?: String | null
  name?: String | null
}

export interface SponsorUpdateManyInput {
  create?: SponsorCreateInput[] | SponsorCreateInput | null
  connect?: SponsorWhereUniqueInput[] | SponsorWhereUniqueInput | null
  set?: SponsorWhereUniqueInput[] | SponsorWhereUniqueInput | null
  disconnect?: SponsorWhereUniqueInput[] | SponsorWhereUniqueInput | null
  delete?: SponsorWhereUniqueInput[] | SponsorWhereUniqueInput | null
  update?: SponsorUpdateWithWhereUniqueNestedInput[] | SponsorUpdateWithWhereUniqueNestedInput | null
  updateMany?: SponsorUpdateManyWithWhereNestedInput[] | SponsorUpdateManyWithWhereNestedInput | null
  deleteMany?: SponsorScalarWhereInput[] | SponsorScalarWhereInput | null
  upsert?: SponsorUpsertWithWhereUniqueNestedInput[] | SponsorUpsertWithWhereUniqueNestedInput | null
}

export interface SponsorUpdateManyMutationInput {
  avatar?: String | null
  name?: String | null
}

export interface SponsorUpdateManyWithWhereNestedInput {
  where: SponsorScalarWhereInput
  data: SponsorUpdateManyDataInput
}

export interface SponsorUpdateWithWhereUniqueNestedInput {
  where: SponsorWhereUniqueInput
  data: SponsorUpdateDataInput
}

export interface SponsorUpsertWithWhereUniqueNestedInput {
  where: SponsorWhereUniqueInput
  update: SponsorUpdateDataInput
  create: SponsorCreateInput
}

export interface SponsorWhereInput {
  AND?: SponsorWhereInput[] | SponsorWhereInput | null
  OR?: SponsorWhereInput[] | SponsorWhereInput | null
  NOT?: SponsorWhereInput[] | SponsorWhereInput | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  avatar?: String | null
  avatar_not?: String | null
  avatar_in?: String[] | String | null
  avatar_not_in?: String[] | String | null
  avatar_lt?: String | null
  avatar_lte?: String | null
  avatar_gt?: String | null
  avatar_gte?: String | null
  avatar_contains?: String | null
  avatar_not_contains?: String | null
  avatar_starts_with?: String | null
  avatar_not_starts_with?: String | null
  avatar_ends_with?: String | null
  avatar_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
}

export interface SponsorWhereUniqueInput {
  id?: ID_Input | null
}

export interface SubscriberCreateInput {
  email: String
}

export interface SubscriberSubscriptionWhereInput {
  AND?: SubscriberSubscriptionWhereInput[] | SubscriberSubscriptionWhereInput | null
  OR?: SubscriberSubscriptionWhereInput[] | SubscriberSubscriptionWhereInput | null
  NOT?: SubscriberSubscriptionWhereInput[] | SubscriberSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: SubscriberWhereInput | null
}

export interface SubscriberUpdateInput {
  email?: String | null
}

export interface SubscriberUpdateManyMutationInput {
  email?: String | null
}

export interface SubscriberWhereInput {
  AND?: SubscriberWhereInput[] | SubscriberWhereInput | null
  OR?: SubscriberWhereInput[] | SubscriberWhereInput | null
  NOT?: SubscriberWhereInput[] | SubscriberWhereInput | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
}

export interface SubscriberWhereUniqueInput {
  id?: ID_Input | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface Agenda extends Node {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  description?: String | null
  image?: String | null
  name: String
}

/*
 * A connection to a list of items.

 */
export interface AgendaConnection {
  pageInfo: PageInfo
  edges: Array<AgendaEdge | null>
  aggregate: AggregateAgenda
}

/*
 * An edge in a connection.

 */
export interface AgendaEdge {
  node: Agenda
  cursor: String
}

export interface AgendaPreviousValues {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  description?: String | null
  image?: String | null
  name: String
}

export interface AgendaSubscriptionPayload {
  mutation: MutationType
  node?: Agenda | null
  updatedFields?: Array<String> | null
  previousValues?: AgendaPreviousValues | null
}

export interface AggregateAgenda {
  count: Int
}

export interface AggregateApplicant {
  count: Int
}

export interface AggregateBooking {
  count: Int
}

export interface AggregateEvent {
  count: Int
}

export interface AggregateMember {
  count: Int
}

export interface AggregateMemberLevel {
  count: Int
}

export interface AggregateMembership {
  count: Int
}

export interface AggregateRegion {
  count: Int
}

export interface AggregateSector {
  count: Int
}

export interface AggregateSpeaker {
  count: Int
}

export interface AggregateSponsor {
  count: Int
}

export interface AggregateSubscriber {
  count: Int
}

export interface Applicant extends Node {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  type?: MemberType | null
  companyName?: String | null
  email: String
  jobTitle?: String | null
  name?: String | null
  phoneNumber?: String | null
}

/*
 * A connection to a list of items.

 */
export interface ApplicantConnection {
  pageInfo: PageInfo
  edges: Array<ApplicantEdge | null>
  aggregate: AggregateApplicant
}

/*
 * An edge in a connection.

 */
export interface ApplicantEdge {
  node: Applicant
  cursor: String
}

export interface ApplicantPreviousValues {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  type?: MemberType | null
  companyName?: String | null
  email: String
  jobTitle?: String | null
  name?: String | null
  phoneNumber?: String | null
}

export interface ApplicantSubscriptionPayload {
  mutation: MutationType
  node?: Applicant | null
  updatedFields?: Array<String> | null
  previousValues?: ApplicantPreviousValues | null
}

export interface BatchPayload {
  count: Long
}

export interface Booking extends Node {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  event?: Event | null
  member?: Member | null
}

/*
 * A connection to a list of items.

 */
export interface BookingConnection {
  pageInfo: PageInfo
  edges: Array<BookingEdge | null>
  aggregate: AggregateBooking
}

/*
 * An edge in a connection.

 */
export interface BookingEdge {
  node: Booking
  cursor: String
}

export interface BookingPreviousValues {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
}

export interface BookingSubscriptionPayload {
  mutation: MutationType
  node?: Booking | null
  updatedFields?: Array<String> | null
  previousValues?: BookingPreviousValues | null
}

export interface Event extends Node {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  communityTag?: String | null
  date?: String | null
  description?: String | null
  name: String
  time?: String | null
  agenda?: Agenda | null
  bookings?: Array<Booking> | null
  coordinator?: String | null
  memberLevel?: Array<MemberLevel> | null
  region?: Region | null
  sector?: Sector | null
  speakers?: Array<Speaker> | null
  sponsors?: Array<Sponsor> | null
  type?: EventType | null
}

/*
 * A connection to a list of items.

 */
export interface EventConnection {
  pageInfo: PageInfo
  edges: Array<EventEdge | null>
  aggregate: AggregateEvent
}

/*
 * An edge in a connection.

 */
export interface EventEdge {
  node: Event
  cursor: String
}

export interface EventPreviousValues {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  communityTag?: String | null
  date?: String | null
  description?: String | null
  name: String
  time?: String | null
  coordinator?: String | null
  type?: EventType | null
}

export interface EventSubscriptionPayload {
  mutation: MutationType
  node?: Event | null
  updatedFields?: Array<String> | null
  previousValues?: EventPreviousValues | null
}

export interface Member extends Node {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  type?: MemberType | null
  membership?: Membership | null
  companyName?: String | null
  email: String
  isAdmin?: Boolean | null
  jobTitle?: String | null
  name?: String | null
  password?: String | null
  phoneNumber?: String | null
  profilePicture?: String | null
}

/*
 * A connection to a list of items.

 */
export interface MemberConnection {
  pageInfo: PageInfo
  edges: Array<MemberEdge | null>
  aggregate: AggregateMember
}

/*
 * An edge in a connection.

 */
export interface MemberEdge {
  node: Member
  cursor: String
}

export interface MemberLevel extends Node {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  name?: LevelName | null
  subscription?: String | null
  event?: Array<Event> | null
}

/*
 * A connection to a list of items.

 */
export interface MemberLevelConnection {
  pageInfo: PageInfo
  edges: Array<MemberLevelEdge | null>
  aggregate: AggregateMemberLevel
}

/*
 * An edge in a connection.

 */
export interface MemberLevelEdge {
  node: MemberLevel
  cursor: String
}

export interface MemberLevelPreviousValues {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  name?: LevelName | null
  subscription?: String | null
}

export interface MemberLevelSubscriptionPayload {
  mutation: MutationType
  node?: MemberLevel | null
  updatedFields?: Array<String> | null
  previousValues?: MemberLevelPreviousValues | null
}

export interface MemberPreviousValues {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  type?: MemberType | null
  companyName?: String | null
  email: String
  isAdmin?: Boolean | null
  jobTitle?: String | null
  name?: String | null
  password?: String | null
  phoneNumber?: String | null
  profilePicture?: String | null
}

export interface Membership extends Node {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  type?: MemberType | null
  level?: MemberLevel | null
  member?: Member | null
}

/*
 * A connection to a list of items.

 */
export interface MembershipConnection {
  pageInfo: PageInfo
  edges: Array<MembershipEdge | null>
  aggregate: AggregateMembership
}

/*
 * An edge in a connection.

 */
export interface MembershipEdge {
  node: Membership
  cursor: String
}

export interface MembershipPreviousValues {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  type?: MemberType | null
}

export interface MembershipSubscriptionPayload {
  mutation: MutationType
  node?: Membership | null
  updatedFields?: Array<String> | null
  previousValues?: MembershipPreviousValues | null
}

export interface MemberSubscriptionPayload {
  mutation: MutationType
  node?: Member | null
  updatedFields?: Array<String> | null
  previousValues?: MemberPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Region extends Node {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  name?: String | null
}

/*
 * A connection to a list of items.

 */
export interface RegionConnection {
  pageInfo: PageInfo
  edges: Array<RegionEdge | null>
  aggregate: AggregateRegion
}

/*
 * An edge in a connection.

 */
export interface RegionEdge {
  node: Region
  cursor: String
}

export interface RegionPreviousValues {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  name?: String | null
}

export interface RegionSubscriptionPayload {
  mutation: MutationType
  node?: Region | null
  updatedFields?: Array<String> | null
  previousValues?: RegionPreviousValues | null
}

export interface Sector extends Node {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  description?: String | null
  name: String
}

/*
 * A connection to a list of items.

 */
export interface SectorConnection {
  pageInfo: PageInfo
  edges: Array<SectorEdge | null>
  aggregate: AggregateSector
}

/*
 * An edge in a connection.

 */
export interface SectorEdge {
  node: Sector
  cursor: String
}

export interface SectorPreviousValues {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  description?: String | null
  name: String
}

export interface SectorSubscriptionPayload {
  mutation: MutationType
  node?: Sector | null
  updatedFields?: Array<String> | null
  previousValues?: SectorPreviousValues | null
}

export interface Speaker extends Node {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  jobTitle?: String | null
  avatar?: String | null
  name: String
}

/*
 * A connection to a list of items.

 */
export interface SpeakerConnection {
  pageInfo: PageInfo
  edges: Array<SpeakerEdge | null>
  aggregate: AggregateSpeaker
}

/*
 * An edge in a connection.

 */
export interface SpeakerEdge {
  node: Speaker
  cursor: String
}

export interface SpeakerPreviousValues {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  jobTitle?: String | null
  avatar?: String | null
  name: String
}

export interface SpeakerSubscriptionPayload {
  mutation: MutationType
  node?: Speaker | null
  updatedFields?: Array<String> | null
  previousValues?: SpeakerPreviousValues | null
}

export interface Sponsor extends Node {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  avatar?: String | null
  name: String
}

/*
 * A connection to a list of items.

 */
export interface SponsorConnection {
  pageInfo: PageInfo
  edges: Array<SponsorEdge | null>
  aggregate: AggregateSponsor
}

/*
 * An edge in a connection.

 */
export interface SponsorEdge {
  node: Sponsor
  cursor: String
}

export interface SponsorPreviousValues {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  avatar?: String | null
  name: String
}

export interface SponsorSubscriptionPayload {
  mutation: MutationType
  node?: Sponsor | null
  updatedFields?: Array<String> | null
  previousValues?: SponsorPreviousValues | null
}

export interface Subscriber extends Node {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  email: String
}

/*
 * A connection to a list of items.

 */
export interface SubscriberConnection {
  pageInfo: PageInfo
  edges: Array<SubscriberEdge | null>
  aggregate: AggregateSubscriber
}

/*
 * An edge in a connection.

 */
export interface SubscriberEdge {
  node: Subscriber
  cursor: String
}

export interface SubscriberPreviousValues {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  email: String
}

export interface SubscriberSubscriptionPayload {
  mutation: MutationType
  node?: Subscriber | null
  updatedFields?: Array<String> | null
  previousValues?: SubscriberPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string