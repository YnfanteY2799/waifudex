import { publicProc, router } from "../trpc/trpc";
import dbwrapper from "../database/functions/dbwrapper";
import { PrismaClient } from "@prisma/client";

const get = publicProc.query((_) => {
  const turnable: Array<string> = "Hola ahi kk".split(" ");

  dbwrapper((bd: PrismaClient) => {
    console.log(bd);
  });

  return turnable;
});

export const waifuRouter = router({
  get,
});
