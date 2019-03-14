import { Prisma } from '../generated/prisma-client';
import { Prisma as Binding } from "../generated/prisma";

export interface Context {
  res: any
  req: any
  prisma: Prisma
  db: Binding
  memberId?: string
}
