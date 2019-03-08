import { Prisma } from '../generated/prisma-client';
import { Prisma as Binding } from "../generated/prisma";

export interface Context {
  prisma: Prisma
  db: Binding
}
