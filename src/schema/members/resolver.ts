import { ValidationError, ApolloError } from 'apollo-server';
import * as bcrypt from 'bcryptjs';
import { Context } from '../../utils';
import { Member, Membership } from '../../generated/prisma-client';

const memberResolvers = {
  Query: {
    async members(parent: any, args: any, { db }: Context, info: any) {
      try {
        return await db.query.members({}, info) as Member[];
      } catch (error) {
        throw new ApolloError(error);
      }

    },
    async member(_: null, { id }: any, { db }: Context, info: any) {
      try {
        const member = await db.query.member({ where: { id } }, info) as Member
        return member || new ValidationError('Member ID not found');
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
  Mutation: {
    async addMember(_: any, { input }: any, { db }: Context, info: any) {
      try {
        const { levelId, ...rest } = input
        // Hash password
        const password = await bcrypt.hash('ashdshjhjsd', 10);
        const member = await db.mutation.createMember({
          data: {
            ...rest,
            password,
            membership: { connect: { id: levelId }}
          }
        }, info) as Member

        return { success: true, error: null, member };
      } catch (error) {
        return { success: false, error: error, member: null };
      }
    },
    async addMembership(_: any, { input }: any, { db }: Context, info: any) {
      try {
        const { memberId, levelId, type } = input
        const membership = await db.mutation.createMembership({
          data: {
            level: { connect: { id: levelId }},
            member: { connect: { id: memberId }},
            type
          }
        }, info) as Membership

        return { success: true, error: null, membership };
      } catch (error) {
        return { success: false, error: error, membership: null };
      }
    },
  },
};

export default memberResolvers;
