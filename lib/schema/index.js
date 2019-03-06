"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const lodash_1 = require("lodash");
const agendas_1 = require("./agendas");
const bookings_1 = require("./bookings");
const events_1 = require("./events");
const members_1 = require("./members");
const memberLevels_1 = require("./memberLevels");
const regions_1 = require("./regions");
const sectors_1 = require("./sectors");
const init = apollo_server_1.gql `
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
    agendas_1.agendaTypeDefs,
    bookings_1.bookingTypeDefs,
    events_1.eventTypeDefs,
    members_1.memberTypeDefs,
    memberLevels_1.memberLevelTypeDefs,
    regions_1.regionTypeDefs,
    sectors_1.sectorTypeDefs
];
const resolvers = lodash_1.merge({}, agendas_1.agendaResolvers, bookings_1.bookingResolvers, events_1.eventResolvers, members_1.memberResolvers, memberLevels_1.memberLevelResolvers, regions_1.regionResolvers, sectors_1.sectorResolvers);
const schema = apollo_server_1.makeExecutableSchema({
    typeDefs,
    resolvers,
    resolverValidationOptions: {
        requireResolversForResolveType: false
    }
});
exports.default = schema;
//# sourceMappingURL=index.js.map