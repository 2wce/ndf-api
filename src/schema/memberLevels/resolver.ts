import { ValidationError, ApolloError } from 'apollo-server';
import { Context } from '../../utils';
import { MemberLevel } from '../../generated/prisma-client';

const memberLevelResolvers = {
  Query: {
    async memberLevels(parent: any, args: any, { db }: Context, info: any) {
      try {
        return await db.query.memberLevels({}, info) as MemberLevel[];
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    async memberLevel(_: null, { id }: any, { db }: Context, info: any) {
      try {
        const memberLevel = await db.query.memberLevel({ where: { id } }, info)
        return memberLevel || new ValidationError('MemberLevel ID not found');
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
  Mutation: {
    async addMemberLevel(_: any, { input }: any, { prisma }: Context, info: any) {
      try {
        const memberLevel = await prisma.createMemberLevel({
          ...input,
        })

        return { success: true, error: null, memberLevel };
      } catch (error) {
        return { success: false, error: error, memberLevel: null };
      }
    },
  },
};

export default memberLevelResolvers;
