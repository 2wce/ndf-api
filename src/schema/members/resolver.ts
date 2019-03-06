import { ValidationError, ApolloError } from 'apollo-server';
import * as bcrypt from 'bcryptjs';
import { Context } from '../../utils';
import { Member, Membership } from '../../generated/prisma-client';

const memberResolvers = {
  Query: {
    async members(parent: any, args: any, { prisma }: Context, info: any) {
      try {
        return await prisma.members().$fragment(info) as Member[];
      } catch (error) {
        throw new ApolloError(error);
      }

    },
    async member(_: null, { id }: any, { prisma }: Context, info: any) {
      try {
        const member = await prisma.member({ id }).$fragment(info) as Member
        return member || new ValidationError('Member ID not found');
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
  Mutation: {
    async addMember(_: any, { input }: any, { prisma }: Context, info: any) {
      try {
        // Hash password
        const password = await bcrypt.hash('ashdshjhjsd', 10);
        const member = await prisma.createMember({
          ...input,
          password
        }).$fragment(info) as Member

        return { success: true, error: null, member };
      } catch (error) {
        return { success: false, error: error, member: null };
      }
    },
    async addMembership(_: any, { input }: any, { prisma }: Context, info: any) {
      try {
        const { memberId, levelId, type } = input
        const membership = await prisma.createMembership({
          level: { connect: { id: levelId }},
          member: { connect: { id: memberId }},
          type
        }).$fragment(info) as Membership

        return { success: true, error: null, membership };
      } catch (error) {
        return { success: false, error: error, membership: null };
      }
    },
  },
};

export default memberResolvers;
