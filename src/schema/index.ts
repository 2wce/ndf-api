import { gql, makeExecutableSchema } from 'apollo-server';
import { merge } from 'lodash';

import { agendaResolvers, agendaTypeDefs } from './agendas';
import { bookingResolvers, bookingTypeDefs } from './bookings';
import { eventResolvers, eventTypeDefs } from './events';
import { memberResolvers, memberTypeDefs } from './members';
import { memberLevelResolvers, memberLevelTypeDefs } from './memberLevels';
import { regionResolvers, regionTypeDefs } from './regions';
import { sectorResolvers, sectorTypeDefs } from './sectors';

const init = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty(nothing: String): String
  }

  type Error {
    status: String
    message: String
  }

  interface Response {
    success: Boolean
    error: Error
  }
`;

const typeDefs = [
  init,
  agendaTypeDefs,
  bookingTypeDefs,
  eventTypeDefs,
  memberTypeDefs,
  memberLevelTypeDefs,
  regionTypeDefs,
  sectorTypeDefs
];

const resolvers = merge(
  {},
  agendaResolvers,
  bookingResolvers,
  eventResolvers,
  memberResolvers,
  memberLevelResolvers,
  regionResolvers,
  sectorResolvers
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
});

export default schema;