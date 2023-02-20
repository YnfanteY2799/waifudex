import { publicProc, router } from "../trpc/trpc";

const get = publicProc.query((_) => "Hola ahi kk".split(" "));

export const waifuRouter = router({
  get,
});
