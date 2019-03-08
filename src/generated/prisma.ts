import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    agenda: <T = Agenda | null>(args: { where: AgendaWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    agendas: <T = Array<Agenda | null>>(args: { where?: AgendaWhereInput | null, orderBy?: AgendaOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    agendasConnection: <T = AgendaConnection>(args: { where?: AgendaWhereInput | null, orderBy?: AgendaOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    applicant: <T = Applicant | null>(args: { where: ApplicantWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    applicants: <T = Array<Applicant | null>>(args: { where?: ApplicantWhereInput | null, orderBy?: ApplicantOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    applicantsConnection: <T = ApplicantConnection>(args: { where?: ApplicantWhereInput | null, orderBy?: ApplicantOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    booking: <T = Booking | null>(args: { where: BookingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    bookings: <T = Array<Booking | null>>(args: { where?: BookingWhereInput | null, orderBy?: BookingOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bookingsConnection: <T = BookingConnection>(args: { where?: BookingWhereInput | null, orderBy?: BookingOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    event: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    events: <T = Array<Event | null>>(args: { where?: EventWhereInput | null, orderBy?: EventOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    eventsConnection: <T = EventConnection>(args: { where?: EventWhereInput | null, orderBy?: EventOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    member: <T = Member | null>(args: { where: MemberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    members: <T = Array<Member | null>>(args: { where?: MemberWhereInput | null, orderBy?: MemberOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    membersConnection: <T = MemberConnection>(args: { where?: MemberWhereInput | null, orderBy?: MemberOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    memberLevel: <T = MemberLevel | null>(args: { where: MemberLevelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    memberLevels: <T = Array<MemberLevel | null>>(args: { where?: MemberLevelWhereInput | null, orderBy?: MemberLevelOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    memberLevelsConnection: <T = MemberLevelConnection>(args: { where?: MemberLevelWhereInput | null, orderBy?: MemberLevelOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    membership: <T = Membership | null>(args: { where: MembershipWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    memberships: <T = Array<Membership | null>>(args: { where?: MembershipWhereInput | null, orderBy?: MembershipOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    membershipsConnection: <T = MembershipConnection>(args: { where?: MembershipWhereInput | null, orderBy?: MembershipOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    region: <T = Region | null>(args: { where: RegionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    regions: <T = Array<Region | null>>(args: { where?: RegionWhereInput | null, orderBy?: RegionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    regionsConnection: <T = RegionConnection>(args: { where?: RegionWhereInput | null, orderBy?: RegionOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sector: <T = Sector | null>(args: { where: SectorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    sectors: <T = Array<Sector | null>>(args: { where?: SectorWhereInput | null, orderBy?: SectorOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sectorsConnection: <T = SectorConnection>(args: { where?: SectorWhereInput | null, orderBy?: SectorOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    speaker: <T = Speaker | null>(args: { where: SpeakerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    speakers: <T = Array<Speaker | null>>(args: { where?: SpeakerWhereInput | null, orderBy?: SpeakerOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    speakersConnection: <T = SpeakerConnection>(args: { where?: SpeakerWhereInput | null, orderBy?: SpeakerOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sponsor: <T = Sponsor | null>(args: { where: SponsorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    sponsors: <T = Array<Sponsor | null>>(args: { where?: SponsorWhereInput | null, orderBy?: SponsorOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sponsorsConnection: <T = SponsorConnection>(args: { where?: SponsorWhereInput | null, orderBy?: SponsorOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    subscriber: <T = Subscriber | null>(args: { where: SubscriberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    subscribers: <T = Array<Subscriber | null>>(args: { where?: SubscriberWhereInput | null, orderBy?: SubscriberOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    subscribersConnection: <T = SubscriberConnection>(args: { where?: SubscriberWhereInput | null, orderBy?: SubscriberOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createAgenda: <T = Agenda>(args: { data: AgendaCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAgenda: <T = Agenda | null>(args: { data: AgendaUpdateInput, where: AgendaWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyAgendas: <T = BatchPayload>(args: { data: AgendaUpdateManyMutationInput, where?: AgendaWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAgenda: <T = Agenda>(args: { where: AgendaWhereUniqueInput, create: AgendaCreateInput, update: AgendaUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAgenda: <T = Agenda | null>(args: { where: AgendaWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyAgendas: <T = BatchPayload>(args: { where?: AgendaWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createApplicant: <T = Applicant>(args: { data: ApplicantCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateApplicant: <T = Applicant | null>(args: { data: ApplicantUpdateInput, where: ApplicantWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyApplicants: <T = BatchPayload>(args: { data: ApplicantUpdateManyMutationInput, where?: ApplicantWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertApplicant: <T = Applicant>(args: { where: ApplicantWhereUniqueInput, create: ApplicantCreateInput, update: ApplicantUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteApplicant: <T = Applicant | null>(args: { where: ApplicantWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyApplicants: <T = BatchPayload>(args: { where?: ApplicantWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBooking: <T = Booking>(args: { data: BookingCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBooking: <T = Booking | null>(args: { data: BookingUpdateInput, where: BookingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertBooking: <T = Booking>(args: { where: BookingWhereUniqueInput, create: BookingCreateInput, update: BookingUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBooking: <T = Booking | null>(args: { where: BookingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyBookings: <T = BatchPayload>(args: { where?: BookingWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEvent: <T = Event>(args: { data: EventCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEvent: <T = Event | null>(args: { data: EventUpdateInput, where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyEvents: <T = BatchPayload>(args: { data: EventUpdateManyMutationInput, where?: EventWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEvent: <T = Event>(args: { where: EventWhereUniqueInput, create: EventCreateInput, update: EventUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEvent: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyEvents: <T = BatchPayload>(args: { where?: EventWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMember: <T = Member>(args: { data: MemberCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMember: <T = Member | null>(args: { data: MemberUpdateInput, where: MemberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyMembers: <T = BatchPayload>(args: { data: MemberUpdateManyMutationInput, where?: MemberWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMember: <T = Member>(args: { where: MemberWhereUniqueInput, create: MemberCreateInput, update: MemberUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMember: <T = Member | null>(args: { where: MemberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyMembers: <T = BatchPayload>(args: { where?: MemberWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMemberLevel: <T = MemberLevel>(args: { data: MemberLevelCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMemberLevel: <T = MemberLevel | null>(args: { data: MemberLevelUpdateInput, where: MemberLevelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyMemberLevels: <T = BatchPayload>(args: { data: MemberLevelUpdateManyMutationInput, where?: MemberLevelWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMemberLevel: <T = MemberLevel>(args: { where: MemberLevelWhereUniqueInput, create: MemberLevelCreateInput, update: MemberLevelUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMemberLevel: <T = MemberLevel | null>(args: { where: MemberLevelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyMemberLevels: <T = BatchPayload>(args: { where?: MemberLevelWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMembership: <T = Membership>(args: { data: MembershipCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMembership: <T = Membership | null>(args: { data: MembershipUpdateInput, where: MembershipWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyMemberships: <T = BatchPayload>(args: { data: MembershipUpdateManyMutationInput, where?: MembershipWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMembership: <T = Membership>(args: { where: MembershipWhereUniqueInput, create: MembershipCreateInput, update: MembershipUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMembership: <T = Membership | null>(args: { where: MembershipWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyMemberships: <T = BatchPayload>(args: { where?: MembershipWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRegion: <T = Region>(args: { data: RegionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRegion: <T = Region | null>(args: { data: RegionUpdateInput, where: RegionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManyRegions: <T = BatchPayload>(args: { data: RegionUpdateManyMutationInput, where?: RegionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRegion: <T = Region>(args: { where: RegionWhereUniqueInput, create: RegionCreateInput, update: RegionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRegion: <T = Region | null>(args: { where: RegionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManyRegions: <T = BatchPayload>(args: { where?: RegionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSector: <T = Sector>(args: { data: SectorCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSector: <T = Sector | null>(args: { data: SectorUpdateInput, where: SectorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManySectors: <T = BatchPayload>(args: { data: SectorUpdateManyMutationInput, where?: SectorWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSector: <T = Sector>(args: { where: SectorWhereUniqueInput, create: SectorCreateInput, update: SectorUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSector: <T = Sector | null>(args: { where: SectorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManySectors: <T = BatchPayload>(args: { where?: SectorWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSpeaker: <T = Speaker>(args: { data: SpeakerCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSpeaker: <T = Speaker | null>(args: { data: SpeakerUpdateInput, where: SpeakerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManySpeakers: <T = BatchPayload>(args: { data: SpeakerUpdateManyMutationInput, where?: SpeakerWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSpeaker: <T = Speaker>(args: { where: SpeakerWhereUniqueInput, create: SpeakerCreateInput, update: SpeakerUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSpeaker: <T = Speaker | null>(args: { where: SpeakerWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManySpeakers: <T = BatchPayload>(args: { where?: SpeakerWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSponsor: <T = Sponsor>(args: { data: SponsorCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSponsor: <T = Sponsor | null>(args: { data: SponsorUpdateInput, where: SponsorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManySponsors: <T = BatchPayload>(args: { data: SponsorUpdateManyMutationInput, where?: SponsorWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSponsor: <T = Sponsor>(args: { where: SponsorWhereUniqueInput, create: SponsorCreateInput, update: SponsorUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSponsor: <T = Sponsor | null>(args: { where: SponsorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManySponsors: <T = BatchPayload>(args: { where?: SponsorWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSubscriber: <T = Subscriber>(args: { data: SubscriberCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSubscriber: <T = Subscriber | null>(args: { data: SubscriberUpdateInput, where: SubscriberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateManySubscribers: <T = BatchPayload>(args: { data: SubscriberUpdateManyMutationInput, where?: SubscriberWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSubscriber: <T = Subscriber>(args: { where: SubscriberWhereUniqueInput, create: SubscriberCreateInput, update: SubscriberUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSubscriber: <T = Subscriber | null>(args: { where: SubscriberWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteManySubscribers: <T = BatchPayload>(args: { where?: SubscriberWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    agenda: <T = AgendaSubscriptionPayload | null>(args: { where?: AgendaSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    applicant: <T = ApplicantSubscriptionPayload | null>(args: { where?: ApplicantSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    booking: <T = BookingSubscriptionPayload | null>(args: { where?: BookingSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    event: <T = EventSubscriptionPayload | null>(args: { where?: EventSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    member: <T = MemberSubscriptionPayload | null>(args: { where?: MemberSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    memberLevel: <T = MemberLevelSubscriptionPayload | null>(args: { where?: MemberLevelSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    membership: <T = MembershipSubscriptionPayload | null>(args: { where?: MembershipSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    region: <T = RegionSubscriptionPayload | null>(args: { where?: RegionSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    sector: <T = SectorSubscriptionPayload | null>(args: { where?: SectorSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    speaker: <T = SpeakerSubscriptionPayload | null>(args: { where?: SpeakerSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    sponsor: <T = SponsorSubscriptionPayload | null>(args: { where?: SponsorSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    subscriber: <T = SubscriberSubscriptionPayload | null>(args: { where?: SubscriberSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Agenda: (where?: AgendaWhereInput) => Promise<boolean>
  Applicant: (where?: ApplicantWhereInput) => Promise<boolean>
  Booking: (where?: BookingWhereInput) => Promise<boolean>
  Event: (where?: EventWhereInput) => Promise<boolean>
  Member: (where?: MemberWhereInput) => Promise<boolean>
  MemberLevel: (where?: MemberLevelWhereInput) => Promise<boolean>
  Membership: (where?: MembershipWhereInput) => Promise<boolean>
  Region: (where?: RegionWhereInput) => Promise<boolean>
  Sector: (where?: SectorWhereInput) => Promise<boolean>
  Speaker: (where?: SpeakerWhereInput) => Promise<boolean>
  Sponsor: (where?: SponsorWhereInput) => Promise<boolean>
  Subscriber: (where?: SubscriberWhereInput) => Promise<boolean>
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
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: AgendaWhereInput | null
  AND?: AgendaSubscriptionWhereInput[] | AgendaSubscriptionWhereInput | null
  OR?: AgendaSubscriptionWhereInput[] | AgendaSubscriptionWhereInput | null
  NOT?: AgendaSubscriptionWhereInput[] | AgendaSubscriptionWhereInput | null
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
  update?: AgendaUpdateDataInput | null
  upsert?: AgendaUpsertNestedInput | null
  delete?: Boolean | null
  disconnect?: Boolean | null
  connect?: AgendaWhereUniqueInput | null
}

export interface AgendaUpsertNestedInput {
  update: AgendaUpdateDataInput
  create: AgendaCreateInput
}

export interface AgendaWhereInput {
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
  AND?: AgendaWhereInput[] | AgendaWhereInput | null
  OR?: AgendaWhereInput[] | AgendaWhereInput | null
  NOT?: AgendaWhereInput[] | AgendaWhereInput | null
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
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ApplicantWhereInput | null
  AND?: ApplicantSubscriptionWhereInput[] | ApplicantSubscriptionWhereInput | null
  OR?: ApplicantSubscriptionWhereInput[] | ApplicantSubscriptionWhereInput | null
  NOT?: ApplicantSubscriptionWhereInput[] | ApplicantSubscriptionWhereInput | null
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
  AND?: ApplicantWhereInput[] | ApplicantWhereInput | null
  OR?: ApplicantWhereInput[] | ApplicantWhereInput | null
  NOT?: ApplicantWhereInput[] | ApplicantWhereInput | null
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
  AND?: BookingScalarWhereInput[] | BookingScalarWhereInput | null
  OR?: BookingScalarWhereInput[] | BookingScalarWhereInput | null
  NOT?: BookingScalarWhereInput[] | BookingScalarWhereInput | null
}

export interface BookingSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: BookingWhereInput | null
  AND?: BookingSubscriptionWhereInput[] | BookingSubscriptionWhereInput | null
  OR?: BookingSubscriptionWhereInput[] | BookingSubscriptionWhereInput | null
  NOT?: BookingSubscriptionWhereInput[] | BookingSubscriptionWhereInput | null
}

export interface BookingUpdateInput {
  event?: EventUpdateOneWithoutBookingsInput | null
  member?: MemberUpdateOneInput | null
}

export interface BookingUpdateManyWithoutEventInput {
  create?: BookingCreateWithoutEventInput[] | BookingCreateWithoutEventInput | null
  delete?: BookingWhereUniqueInput[] | BookingWhereUniqueInput | null
  connect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput | null
  set?: BookingWhereUniqueInput[] | BookingWhereUniqueInput | null
  disconnect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput | null
  update?: BookingUpdateWithWhereUniqueWithoutEventInput[] | BookingUpdateWithWhereUniqueWithoutEventInput | null
  upsert?: BookingUpsertWithWhereUniqueWithoutEventInput[] | BookingUpsertWithWhereUniqueWithoutEventInput | null
  deleteMany?: BookingScalarWhereInput[] | BookingScalarWhereInput | null
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
  AND?: BookingWhereInput[] | BookingWhereInput | null
  OR?: BookingWhereInput[] | BookingWhereInput | null
  NOT?: BookingWhereInput[] | BookingWhereInput | null
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
  agenda?: AgendaCreateOneInput | null
  bookings?: BookingCreateManyWithoutEventInput | null
  coordinator?: String | null
  memberLevel?: MemberLevelCreateManyWithoutEventInput | null
  region?: RegionCreateOneInput | null
  sector?: SectorCreateOneInput | null
  speakers?: SpeakerCreateManyInput | null
  sponsors?: SponsorCreateManyInput | null
  type?: EventType | null
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
  agenda?: AgendaCreateOneInput | null
  coordinator?: String | null
  memberLevel?: MemberLevelCreateManyWithoutEventInput | null
  region?: RegionCreateOneInput | null
  sector?: SectorCreateOneInput | null
  speakers?: SpeakerCreateManyInput | null
  sponsors?: SponsorCreateManyInput | null
  type?: EventType | null
}

export interface EventCreateWithoutMemberLevelInput {
  communityTag?: String | null
  date?: String | null
  description?: String | null
  name: String
  time?: String | null
  agenda?: AgendaCreateOneInput | null
  bookings?: BookingCreateManyWithoutEventInput | null
  coordinator?: String | null
  region?: RegionCreateOneInput | null
  sector?: SectorCreateOneInput | null
  speakers?: SpeakerCreateManyInput | null
  sponsors?: SponsorCreateManyInput | null
  type?: EventType | null
}

export interface EventScalarWhereInput {
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
  AND?: EventScalarWhereInput[] | EventScalarWhereInput | null
  OR?: EventScalarWhereInput[] | EventScalarWhereInput | null
  NOT?: EventScalarWhereInput[] | EventScalarWhereInput | null
}

export interface EventSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: EventWhereInput | null
  AND?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput | null
  OR?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput | null
  NOT?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput | null
}

export interface EventUpdateInput {
  communityTag?: String | null
  date?: String | null
  description?: String | null
  name?: String | null
  time?: String | null
  agenda?: AgendaUpdateOneInput | null
  bookings?: BookingUpdateManyWithoutEventInput | null
  coordinator?: String | null
  memberLevel?: MemberLevelUpdateManyWithoutEventInput | null
  region?: RegionUpdateOneInput | null
  sector?: SectorUpdateOneInput | null
  speakers?: SpeakerUpdateManyInput | null
  sponsors?: SponsorUpdateManyInput | null
  type?: EventType | null
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
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput | null
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput | null
  set?: EventWhereUniqueInput[] | EventWhereUniqueInput | null
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput | null
  update?: EventUpdateWithWhereUniqueWithoutMemberLevelInput[] | EventUpdateWithWhereUniqueWithoutMemberLevelInput | null
  upsert?: EventUpsertWithWhereUniqueWithoutMemberLevelInput[] | EventUpsertWithWhereUniqueWithoutMemberLevelInput | null
  deleteMany?: EventScalarWhereInput[] | EventScalarWhereInput | null
  updateMany?: EventUpdateManyWithWhereNestedInput[] | EventUpdateManyWithWhereNestedInput | null
}

export interface EventUpdateManyWithWhereNestedInput {
  where: EventScalarWhereInput
  data: EventUpdateManyDataInput
}

export interface EventUpdateOneWithoutBookingsInput {
  create?: EventCreateWithoutBookingsInput | null
  update?: EventUpdateWithoutBookingsDataInput | null
  upsert?: EventUpsertWithoutBookingsInput | null
  delete?: Boolean | null
  disconnect?: Boolean | null
  connect?: EventWhereUniqueInput | null
}

export interface EventUpdateWithoutBookingsDataInput {
  communityTag?: String | null
  date?: String | null
  description?: String | null
  name?: String | null
  time?: String | null
  agenda?: AgendaUpdateOneInput | null
  coordinator?: String | null
  memberLevel?: MemberLevelUpdateManyWithoutEventInput | null
  region?: RegionUpdateOneInput | null
  sector?: SectorUpdateOneInput | null
  speakers?: SpeakerUpdateManyInput | null
  sponsors?: SponsorUpdateManyInput | null
  type?: EventType | null
}

export interface EventUpdateWithoutMemberLevelDataInput {
  communityTag?: String | null
  date?: String | null
  description?: String | null
  name?: String | null
  time?: String | null
  agenda?: AgendaUpdateOneInput | null
  bookings?: BookingUpdateManyWithoutEventInput | null
  coordinator?: String | null
  region?: RegionUpdateOneInput | null
  sector?: SectorUpdateOneInput | null
  speakers?: SpeakerUpdateManyInput | null
  sponsors?: SponsorUpdateManyInput | null
  type?: EventType | null
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
  agenda?: AgendaWhereInput | null
  bookings_every?: BookingWhereInput | null
  bookings_some?: BookingWhereInput | null
  bookings_none?: BookingWhereInput | null
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
  type?: EventType | null
  type_not?: EventType | null
  type_in?: EventType[] | EventType | null
  type_not_in?: EventType[] | EventType | null
  AND?: EventWhereInput[] | EventWhereInput | null
  OR?: EventWhereInput[] | EventWhereInput | null
  NOT?: EventWhereInput[] | EventWhereInput | null
}

export interface EventWhereUniqueInput {
  id?: ID_Input | null
}

export interface MemberCreateInput {
  type?: MemberType | null
  membership?: MembershipCreateOneWithoutMemberInput | null
  companyName?: String | null
  email: String
  jobTitle?: String | null
  name?: String | null
  password?: String | null
  phoneNumber?: String | null
  profilePicture?: String | null
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
  AND?: MemberLevelScalarWhereInput[] | MemberLevelScalarWhereInput | null
  OR?: MemberLevelScalarWhereInput[] | MemberLevelScalarWhereInput | null
  NOT?: MemberLevelScalarWhereInput[] | MemberLevelScalarWhereInput | null
}

export interface MemberLevelSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: MemberLevelWhereInput | null
  AND?: MemberLevelSubscriptionWhereInput[] | MemberLevelSubscriptionWhereInput | null
  OR?: MemberLevelSubscriptionWhereInput[] | MemberLevelSubscriptionWhereInput | null
  NOT?: MemberLevelSubscriptionWhereInput[] | MemberLevelSubscriptionWhereInput | null
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
  delete?: MemberLevelWhereUniqueInput[] | MemberLevelWhereUniqueInput | null
  connect?: MemberLevelWhereUniqueInput[] | MemberLevelWhereUniqueInput | null
  set?: MemberLevelWhereUniqueInput[] | MemberLevelWhereUniqueInput | null
  disconnect?: MemberLevelWhereUniqueInput[] | MemberLevelWhereUniqueInput | null
  update?: MemberLevelUpdateWithWhereUniqueWithoutEventInput[] | MemberLevelUpdateWithWhereUniqueWithoutEventInput | null
  upsert?: MemberLevelUpsertWithWhereUniqueWithoutEventInput[] | MemberLevelUpsertWithWhereUniqueWithoutEventInput | null
  deleteMany?: MemberLevelScalarWhereInput[] | MemberLevelScalarWhereInput | null
  updateMany?: MemberLevelUpdateManyWithWhereNestedInput[] | MemberLevelUpdateManyWithWhereNestedInput | null
}

export interface MemberLevelUpdateManyWithWhereNestedInput {
  where: MemberLevelScalarWhereInput
  data: MemberLevelUpdateManyDataInput
}

export interface MemberLevelUpdateOneInput {
  create?: MemberLevelCreateInput | null
  update?: MemberLevelUpdateDataInput | null
  upsert?: MemberLevelUpsertNestedInput | null
  delete?: Boolean | null
  disconnect?: Boolean | null
  connect?: MemberLevelWhereUniqueInput | null
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
  AND?: MemberLevelWhereInput[] | MemberLevelWhereInput | null
  OR?: MemberLevelWhereInput[] | MemberLevelWhereInput | null
  NOT?: MemberLevelWhereInput[] | MemberLevelWhereInput | null
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
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: MembershipWhereInput | null
  AND?: MembershipSubscriptionWhereInput[] | MembershipSubscriptionWhereInput | null
  OR?: MembershipSubscriptionWhereInput[] | MembershipSubscriptionWhereInput | null
  NOT?: MembershipSubscriptionWhereInput[] | MembershipSubscriptionWhereInput | null
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
  update?: MembershipUpdateWithoutMemberDataInput | null
  upsert?: MembershipUpsertWithoutMemberInput | null
  delete?: Boolean | null
  disconnect?: Boolean | null
  connect?: MembershipWhereUniqueInput | null
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
  AND?: MembershipWhereInput[] | MembershipWhereInput | null
  OR?: MembershipWhereInput[] | MembershipWhereInput | null
  NOT?: MembershipWhereInput[] | MembershipWhereInput | null
}

export interface MembershipWhereUniqueInput {
  id?: ID_Input | null
}

export interface MemberSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: MemberWhereInput | null
  AND?: MemberSubscriptionWhereInput[] | MemberSubscriptionWhereInput | null
  OR?: MemberSubscriptionWhereInput[] | MemberSubscriptionWhereInput | null
  NOT?: MemberSubscriptionWhereInput[] | MemberSubscriptionWhereInput | null
}

export interface MemberUpdateDataInput {
  type?: MemberType | null
  membership?: MembershipUpdateOneWithoutMemberInput | null
  companyName?: String | null
  email?: String | null
  jobTitle?: String | null
  name?: String | null
  password?: String | null
  phoneNumber?: String | null
  profilePicture?: String | null
}

export interface MemberUpdateInput {
  type?: MemberType | null
  membership?: MembershipUpdateOneWithoutMemberInput | null
  companyName?: String | null
  email?: String | null
  jobTitle?: String | null
  name?: String | null
  password?: String | null
  phoneNumber?: String | null
  profilePicture?: String | null
}

export interface MemberUpdateManyMutationInput {
  type?: MemberType | null
  companyName?: String | null
  email?: String | null
  jobTitle?: String | null
  name?: String | null
  password?: String | null
  phoneNumber?: String | null
  profilePicture?: String | null
}

export interface MemberUpdateOneInput {
  create?: MemberCreateInput | null
  update?: MemberUpdateDataInput | null
  upsert?: MemberUpsertNestedInput | null
  delete?: Boolean | null
  disconnect?: Boolean | null
  connect?: MemberWhereUniqueInput | null
}

export interface MemberUpdateOneWithoutMembershipInput {
  create?: MemberCreateWithoutMembershipInput | null
  update?: MemberUpdateWithoutMembershipDataInput | null
  upsert?: MemberUpsertWithoutMembershipInput | null
  delete?: Boolean | null
  disconnect?: Boolean | null
  connect?: MemberWhereUniqueInput | null
}

export interface MemberUpdateWithoutMembershipDataInput {
  type?: MemberType | null
  companyName?: String | null
  email?: String | null
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
  membership?: MembershipWhereInput | null
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
  AND?: MemberWhereInput[] | MemberWhereInput | null
  OR?: MemberWhereInput[] | MemberWhereInput | null
  NOT?: MemberWhereInput[] | MemberWhereInput | null
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
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: RegionWhereInput | null
  AND?: RegionSubscriptionWhereInput[] | RegionSubscriptionWhereInput | null
  OR?: RegionSubscriptionWhereInput[] | RegionSubscriptionWhereInput | null
  NOT?: RegionSubscriptionWhereInput[] | RegionSubscriptionWhereInput | null
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
  update?: RegionUpdateDataInput | null
  upsert?: RegionUpsertNestedInput | null
  delete?: Boolean | null
  disconnect?: Boolean | null
  connect?: RegionWhereUniqueInput | null
}

export interface RegionUpsertNestedInput {
  update: RegionUpdateDataInput
  create: RegionCreateInput
}

export interface RegionWhereInput {
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
  AND?: RegionWhereInput[] | RegionWhereInput | null
  OR?: RegionWhereInput[] | RegionWhereInput | null
  NOT?: RegionWhereInput[] | RegionWhereInput | null
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
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: SectorWhereInput | null
  AND?: SectorSubscriptionWhereInput[] | SectorSubscriptionWhereInput | null
  OR?: SectorSubscriptionWhereInput[] | SectorSubscriptionWhereInput | null
  NOT?: SectorSubscriptionWhereInput[] | SectorSubscriptionWhereInput | null
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
  update?: SectorUpdateDataInput | null
  upsert?: SectorUpsertNestedInput | null
  delete?: Boolean | null
  disconnect?: Boolean | null
  connect?: SectorWhereUniqueInput | null
}

export interface SectorUpsertNestedInput {
  update: SectorUpdateDataInput
  create: SectorCreateInput
}

export interface SectorWhereInput {
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
  AND?: SectorWhereInput[] | SectorWhereInput | null
  OR?: SectorWhereInput[] | SectorWhereInput | null
  NOT?: SectorWhereInput[] | SectorWhereInput | null
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
  AND?: SpeakerScalarWhereInput[] | SpeakerScalarWhereInput | null
  OR?: SpeakerScalarWhereInput[] | SpeakerScalarWhereInput | null
  NOT?: SpeakerScalarWhereInput[] | SpeakerScalarWhereInput | null
}

export interface SpeakerSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: SpeakerWhereInput | null
  AND?: SpeakerSubscriptionWhereInput[] | SpeakerSubscriptionWhereInput | null
  OR?: SpeakerSubscriptionWhereInput[] | SpeakerSubscriptionWhereInput | null
  NOT?: SpeakerSubscriptionWhereInput[] | SpeakerSubscriptionWhereInput | null
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
  update?: SpeakerUpdateWithWhereUniqueNestedInput[] | SpeakerUpdateWithWhereUniqueNestedInput | null
  upsert?: SpeakerUpsertWithWhereUniqueNestedInput[] | SpeakerUpsertWithWhereUniqueNestedInput | null
  delete?: SpeakerWhereUniqueInput[] | SpeakerWhereUniqueInput | null
  connect?: SpeakerWhereUniqueInput[] | SpeakerWhereUniqueInput | null
  set?: SpeakerWhereUniqueInput[] | SpeakerWhereUniqueInput | null
  disconnect?: SpeakerWhereUniqueInput[] | SpeakerWhereUniqueInput | null
  deleteMany?: SpeakerScalarWhereInput[] | SpeakerScalarWhereInput | null
  updateMany?: SpeakerUpdateManyWithWhereNestedInput[] | SpeakerUpdateManyWithWhereNestedInput | null
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
  AND?: SpeakerWhereInput[] | SpeakerWhereInput | null
  OR?: SpeakerWhereInput[] | SpeakerWhereInput | null
  NOT?: SpeakerWhereInput[] | SpeakerWhereInput | null
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
  AND?: SponsorScalarWhereInput[] | SponsorScalarWhereInput | null
  OR?: SponsorScalarWhereInput[] | SponsorScalarWhereInput | null
  NOT?: SponsorScalarWhereInput[] | SponsorScalarWhereInput | null
}

export interface SponsorSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: SponsorWhereInput | null
  AND?: SponsorSubscriptionWhereInput[] | SponsorSubscriptionWhereInput | null
  OR?: SponsorSubscriptionWhereInput[] | SponsorSubscriptionWhereInput | null
  NOT?: SponsorSubscriptionWhereInput[] | SponsorSubscriptionWhereInput | null
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
  update?: SponsorUpdateWithWhereUniqueNestedInput[] | SponsorUpdateWithWhereUniqueNestedInput | null
  upsert?: SponsorUpsertWithWhereUniqueNestedInput[] | SponsorUpsertWithWhereUniqueNestedInput | null
  delete?: SponsorWhereUniqueInput[] | SponsorWhereUniqueInput | null
  connect?: SponsorWhereUniqueInput[] | SponsorWhereUniqueInput | null
  set?: SponsorWhereUniqueInput[] | SponsorWhereUniqueInput | null
  disconnect?: SponsorWhereUniqueInput[] | SponsorWhereUniqueInput | null
  deleteMany?: SponsorScalarWhereInput[] | SponsorScalarWhereInput | null
  updateMany?: SponsorUpdateManyWithWhereNestedInput[] | SponsorUpdateManyWithWhereNestedInput | null
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
  AND?: SponsorWhereInput[] | SponsorWhereInput | null
  OR?: SponsorWhereInput[] | SponsorWhereInput | null
  NOT?: SponsorWhereInput[] | SponsorWhereInput | null
}

export interface SponsorWhereUniqueInput {
  id?: ID_Input | null
}

export interface SubscriberCreateInput {
  email: String
}

export interface SubscriberSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: SubscriberWhereInput | null
  AND?: SubscriberSubscriptionWhereInput[] | SubscriberSubscriptionWhereInput | null
  OR?: SubscriberSubscriptionWhereInput[] | SubscriberSubscriptionWhereInput | null
  NOT?: SubscriberSubscriptionWhereInput[] | SubscriberSubscriptionWhereInput | null
}

export interface SubscriberUpdateInput {
  email?: String | null
}

export interface SubscriberUpdateManyMutationInput {
  email?: String | null
}

export interface SubscriberWhereInput {
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
  AND?: SubscriberWhereInput[] | SubscriberWhereInput | null
  OR?: SubscriberWhereInput[] | SubscriberWhereInput | null
  NOT?: SubscriberWhereInput[] | SubscriberWhereInput | null
}

export interface SubscriberWhereUniqueInput {
  id?: ID_Input | null
}

export interface Node {
  id: ID_Output
}

export interface Agenda {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  description?: String | null
  image?: String | null
  name: String
}

export interface AgendaConnection {
  pageInfo: PageInfo
  edges: Array<AgendaEdge | null>
  aggregate: AggregateAgenda
}

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

export interface Applicant {
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

export interface ApplicantConnection {
  pageInfo: PageInfo
  edges: Array<ApplicantEdge | null>
  aggregate: AggregateApplicant
}

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

export interface Booking {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  event?: Event | null
  member?: Member | null
}

export interface BookingConnection {
  pageInfo: PageInfo
  edges: Array<BookingEdge | null>
  aggregate: AggregateBooking
}

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

export interface Event {
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

export interface EventConnection {
  pageInfo: PageInfo
  edges: Array<EventEdge | null>
  aggregate: AggregateEvent
}

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

export interface Member {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  type?: MemberType | null
  membership?: Membership | null
  companyName?: String | null
  email: String
  jobTitle?: String | null
  name?: String | null
  password?: String | null
  phoneNumber?: String | null
  profilePicture?: String | null
}

export interface MemberConnection {
  pageInfo: PageInfo
  edges: Array<MemberEdge | null>
  aggregate: AggregateMember
}

export interface MemberEdge {
  node: Member
  cursor: String
}

export interface MemberLevel {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  name?: LevelName | null
  subscription?: String | null
  event?: Array<Event> | null
}

export interface MemberLevelConnection {
  pageInfo: PageInfo
  edges: Array<MemberLevelEdge | null>
  aggregate: AggregateMemberLevel
}

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
  jobTitle?: String | null
  name?: String | null
  password?: String | null
  phoneNumber?: String | null
  profilePicture?: String | null
}

export interface Membership {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  type?: MemberType | null
  level?: MemberLevel | null
  member?: Member | null
}

export interface MembershipConnection {
  pageInfo: PageInfo
  edges: Array<MembershipEdge | null>
  aggregate: AggregateMembership
}

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

export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Region {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  name?: String | null
}

export interface RegionConnection {
  pageInfo: PageInfo
  edges: Array<RegionEdge | null>
  aggregate: AggregateRegion
}

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

export interface Sector {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  description?: String | null
  name: String
}

export interface SectorConnection {
  pageInfo: PageInfo
  edges: Array<SectorEdge | null>
  aggregate: AggregateSector
}

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

export interface Speaker {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  jobTitle?: String | null
  avatar?: String | null
  name: String
}

export interface SpeakerConnection {
  pageInfo: PageInfo
  edges: Array<SpeakerEdge | null>
  aggregate: AggregateSpeaker
}

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

export interface Sponsor {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  avatar?: String | null
  name: String
}

export interface SponsorConnection {
  pageInfo: PageInfo
  edges: Array<SponsorEdge | null>
  aggregate: AggregateSponsor
}

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

export interface Subscriber {
  createdAt: DateTime
  id: ID_Output
  updatedAt: DateTime
  email: String
}

export interface SubscriberConnection {
  pageInfo: PageInfo
  edges: Array<SubscriberEdge | null>
  aggregate: AggregateSubscriber
}

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

export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string