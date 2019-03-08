import { ValidationError, ApolloError } from 'apollo-server';
import { Context } from '../../utils';
import { Region } from '../../generated/prisma-client';

export default {
  Query: {
    async regions(parent: any, args: any, { prisma }: Context, info: any) {
      try {
        return await prisma.regions() as Region[];
      } catch (error) {
        throw new ApolloError(error);
      }

    },
    async region(_: null, { id }: any, { prisma }: Context) {
      try {
        const region = await prisma.region({ id }) as Region
        return region || new ValidationError('Region ID not found');
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
  Mutation: {
    async addRegion(_: any, { input }: any, { prisma }: Context, info: any) {
      try {
        const region = await prisma.createRegion({
          ...input
        })

        return { success: true, error: null, region };
      } catch (error) {
        return { success: false, error: error, region: null };
      }
    },
  },
};

