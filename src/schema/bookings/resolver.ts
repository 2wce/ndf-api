import { ValidationError, ApolloError } from 'apollo-server';
import { Context } from '../../utils';

export default {
  Query: {
    async bookings(parent: any, args: any, { db }: Context, info: any) {
      try {
        return await db.query.bookings({}, info)
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    async booking(_: null, { id }: any, { db }: Context, info: any) {
      try {
        const booking = await db.query.booking({ where: { id } }, info)
        return booking || new ValidationError('Booking ID not found');
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
  Mutation: {
    async addBooking(_: any, { eventId }: any, { prisma, memberId }: Context, info: any) {
      try {
        const isEvent = await prisma.$exists.event({ id: eventId})

        if (!isEvent) {
          throw new ValidationError('Event ID not found')
        }

        const booking = await prisma.createBooking({
          event: { connect: { id: eventId } },
          member: { connect: { id: memberId } }
        })

        return { booking, success: true, error: null };
      } catch (error) {
        return { error, success: false, booking: null };
      }
    },
  },
};

