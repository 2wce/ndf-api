"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const bookingTypeDefs = apollo_server_1.gql `
  # A  User
  type Booking {
    id: ID!

    event: Event
    member: Member
  }

  input AddBookingInput {
    memberId: ID!
    eventId: ID!
  }

  type AddBookingResponse implements Response {
    success: Boolean
    booking: Booking
    error: Error
  }

  extend type Query {
    booking(id: ID!): Booking
    bookings: [Booking]
  }

  extend type Mutation {
    addBooking(input: AddBookingInput!): AddBookingResponse
  }
`;
exports.default = bookingTypeDefs;
//# sourceMappingURL=schema.js.map