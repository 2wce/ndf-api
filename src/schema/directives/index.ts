import { getUserId, Context, validateToken } from '../../utils';
import { AuthenticationError } from 'apollo-server';

export const directiveResolvers = {
  // Check if user is authenticated to make request
  isAuthenticated: async (next: any, source: any, args: any, ctx: Context) => {
    const authorization = ctx.req.headers.authorization || '';
    const token = authorization.slice(7)

    const memberId = await validateToken(token);

    if (memberId) {
      ctx.memberId = memberId;
      return next();
    }
    return new AuthenticationError('Unauthorized Access')
  },
  // Check if user is authenticated & admin
  isAdmin: async (next: any, source: any, args: any, ctx: Context) => {
    const userId = await getUserId(ctx);
    // console.log(userId)
    if (userId) {
      const user = await ctx.db.exists.Member({
        id: userId,
        isAdmin: true
      });

      if (user) next();
    }
  }
};
