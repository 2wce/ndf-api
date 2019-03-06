import { ValidationError, ApolloError } from 'apollo-server';
import { Context } from '../../utils';
import { Event } from '../../generated/prisma-client'

const eventResolvers = {
  Query: {
    async events(parent: any, args: any, { prisma }: Context, info: any) {
      try {
        return await prisma.events().$fragment(info) as Event[]
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    async event(_: null, { id }: any, { prisma }: Context, info: any) {
      try {
        const event = await prisma.event({ id }).$fragment(info) as Event
        return event || new ValidationError('Event ID not found');
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
  Mutation: {
    async addEvent(parent: any, { input }: any, { prisma }: Context, info: any) {
      try {
        const { agendaId, regionId, memberLevelId, ...rest} = input
        const event = await prisma.createEvent({
          ...rest,
          agenda: { connect: { id: agendaId }},
          region: { connect: { id: regionId }},
          memberLevel: { connect: { id: memberLevelId }}
        })

        return { success: true, error: null, event };
      } catch (error) {
        return { success: false, error: error, event: null };
      }
    },
  }
};

export default eventResolvers;
