import { AuthenticationError } from 'apollo-server-errors';
import * as jwt from 'jsonwebtoken';
import { Context } from "./context";

export const getUserId = (ctx: Context) => {
  if (Boolean(ctx.req.session.memberId)) {
    return ctx.req.session.memberId;
  }
};

export const validateToken = async (authToken: string) => {
  if (authToken.length < 1) undefined;

  try {
    // const { env: { APP_SECRET }} = process
    const APP_SECRET = process.env.APP_SECRET
    if (APP_SECRET) {
      const { memberId } = await jwt.verify(authToken, APP_SECRET) as { memberId: string };
      return memberId;
    }
    return undefined
  } catch (error) {
    throw new AuthenticationError('Invalid Token')
  }
};