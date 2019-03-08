import { ValidationError, ApolloError } from 'apollo-server';
import { Context } from '../../utils';

export default {
  Query: {
    async agendas(parent: any, args: any, { prisma }: Context, info: any) {
      try {
        return await prisma.agendas({ orderBy: "name_ASC" })
      } catch (error) {
        throw new ApolloError(error);
      }

    },
    async agenda(_: null, { id }: any, { prisma }: Context) {
      try {
        const agenda = await prisma.agenda({ id })
        return agenda || new ValidationError('Agenda ID not found');
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
  Mutation: {
    async addAgenda(_: any, { input }: any, { prisma }: Context, info: any) {
      try {
        const agenda = await prisma.createAgenda({
          ...input
        })

        return { success: true, error: null, agenda };
      } catch (error) {
        return { success: false, error: error, agenda: null };
      }
    },
  },
};

