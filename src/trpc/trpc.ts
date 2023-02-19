import { initTRPC } from "@trpc/server";
import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

export function createContext({ req, res }: CreateExpressContextOptions) {
  return {};
}

const tr = initTRPC.context().create();

export const router = tr.router;
export const middleWare = tr.middleware;
export const publicProc = tr.procedure;