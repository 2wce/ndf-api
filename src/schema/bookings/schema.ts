import { gql } from 'apollo-server';

const bookingTypeDefs = gql`
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

export default bookingTypeDefs;
