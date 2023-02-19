import { publicProc, router } from "../trpc/trpc";

const get = publicProc.query((_) => []);

export const indexRoute = router({
  get,
});
