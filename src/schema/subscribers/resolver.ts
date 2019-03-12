import { ValidationError, ApolloError } from 'apollo-server';
import { Context } from '../../utils';

export default {
  Query: {
    async subscribers(parent: any, args: any, { prisma }: Context, info: any) {
      try {
        return await prisma.subscribers({ orderBy: "email_ASC" })
      } catch (error) {
        throw new ApolloError(error);
      }

    },
    async subscriber(_: null, { id }: any, { prisma }: Context) {
      try {
        const subscriber = await prisma.subscriber({ id })
        return subscriber || new ValidationError('Subscriber ID not found');
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
  Mutation: {
    async addSubscriber(_: any, { email }: any, { prisma }: Context, info: any) {
      try {
        const subscriber = await prisma.createSubscriber({
          email
        })

        return { success: true, error: null, subscriber };
      } catch (error) {
        return { success: false, error: error, subscriber: null };
      }
    },
  },
};

