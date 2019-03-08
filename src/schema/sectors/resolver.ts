import { ValidationError, ApolloError } from 'apollo-server';
import { Context } from '../../utils';
import { Sector } from '../../generated/prisma-client'

export default {
  Query: {
    async sectors(parent: any, { orderBy }: any, { prisma }: Context, info: any) {
      try {
        return await prisma.sectors({ orderBy: "name_ASC" }) as Sector[];
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    async sector(_: null, { id }: any, { prisma }: Context) {
      try {
        const sector = await prisma.sector({ id })
        return sector || new ValidationError('Sector ID not found');
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
  Mutation: {
    async addSector(_: any, { input }: any, { prisma }: Context, info: any) {
      try {
        const sector = await prisma.createSector({ ...input })

        return { success: true, error: null, sector };
      } catch (error) {
        return { success: false, error: error, sector: null };
      }
    },
  },
};

