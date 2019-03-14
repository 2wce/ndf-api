import { ValidationError, ApolloError } from 'apollo-server';
import * as bcrypt from 'bcryptjs';
import { Context } from '../../utils';
import { Member, Membership } from '../../generated/prisma-client';

export default {
  Query: {
    async members(parent: any, args: any, { prisma }: Context, info: any) {
      try {
        return await prisma.members() as Member[];
      } catch (error) {
        throw new ApolloError(error);
      }

    },
    async member(_: null, { id }: any, { prisma }: Context, info: any) {
      try {
        const member = await prisma.member({ id }) as Member
        return member || new ValidationError('Member ID not found');
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
  Mutation: {
    async deleteManyMembers(parent: any, args: any, { prisma }: Context, info: any) {
      return await prisma.deleteManyMembers()
    },
    async deleteManyMemberships(parent: any, args: any, { prisma }: Context, info: any) {
      return await prisma.deleteManyMemberships()
    },
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

        return { member, success: true, error: null };
      } catch (error) {
        return { error, success: false, member: null };
      }
    },
    async updateMember(_: any, { input }: any, { prisma, db }: Context, info: any) {
      try {
        const { memberId, levelId, type } = input

        const member = await prisma.updateMember({
          where: { id: memberId },
          data: {
            type,
            ...(levelId && { membership: {
                update: { level: { connect: { id: levelId }}}
              }
            })
          }
        })

        return { member, success: true, error: null };
      } catch (error) {
        return { error, success: false, member: null };
      }
    },
    async addMembership(_: any, { input }: any, { db }: Context, info: any) {
      try {
        const { memberId, levelId, type } = input
        const membership = await db.mutation.createMembership({
          data: {
            type,
            level: { connect: { id: levelId }},
            member: { connect: { id: memberId }},
          }
        }, info) as Membership

        return { membership, success: true, error: null };
      } catch (error) {
        return { error, success: false, membership: null };
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
      return prisma.membership({ id }).level()
    }
  }
};

