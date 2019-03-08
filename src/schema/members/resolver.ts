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
    async addMember(_: any, { input }: any, { prisma, db }: Context, info: any) {
      try {
        const { levelId, ...rest } = input
        // Hash password
        const password = await bcrypt.hash('ashdshjhjsd', 10);
        const member = await prisma.createMember({
             ...rest,
            password,
            membership: { create: {
              level: { connect: { id: levelId }},
              type: rest.type
            }}
        }) as Member

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
  Member: {
    membership: ({ id }: any, args: any, { prisma }: Context, info: any) => {
      return prisma.member({ id }).membership()
    }
  },
  Membership: {
    level: ({ id }: any, args: any, { prisma }: Context, info: any) => {
      console.log({ id })
      return prisma.membership({ id }).level()
    }
  }
};

export default memberResolvers;
