import { ValidationError, ApolloError } from 'apollo-server';
import { Context } from '../../utils';

const bookingResolvers = {
  Query: {
    async bookings(parent: any, args: any, { prisma }: Context, info: any) {
      try {
        return await prisma.bookings()
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    async booking(_: null, { id }: any, { prisma }: Context) {
      try {
        const booking = await prisma.booking({ id })
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
