import { ValidationError, ApolloError } from 'apollo-server';
import { Context } from '../../utils';

const bookingResolvers = {
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
    async addBooking(_: any, { input }: any, { prisma }: Context, info: any) {
      try {
        const { eventId, memberId } = input
        const booking = await prisma.createBooking({
          event: { connect: { id: eventId } },
          member: { connect: { id: memberId } }
        })

        return { success: true, error: null, booking };
      } catch (error) {
        return { success: false, error: error, booking: null };
      }
    },
  },
};

export default bookingResolvers;
