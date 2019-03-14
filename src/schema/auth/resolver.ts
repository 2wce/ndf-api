import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Context } from '../../utils';

export default {
  Mutation: {
    async login(parent: any, { input }: any, { prisma }: Context, info: any) {
      try {
        // destructure credentials from argument data
        const { email, password } = input;

        // get member by email
        const member = await prisma.member({ email });

        // no member with this email
        if (!member) {
          throw Error('Invalid email or password!');
        }

        // check password
        const passwordIsCorrect = await bcrypt.compare(password, member.password);
        if (!passwordIsCorrect) {
          throw Error('Invalid username or password!');
        }

        // generate node token for existing User node
        const token = jwt.sign({ memberId: member.id, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7 }, 'jkdksdjkdskjsdkjd');

        // return the signed jwt
        return { token };
      } catch (error) {
        throw error;
      }
    }
  }
};
