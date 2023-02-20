import morgan from "morgan";
import Cors from "cors";
import * as trExpress from "@trpc/server/adapters/express";
import express from "express";
import { router, createContext } from "../trpc/trpc";
import { waifuRouter } from "../routes/waifu";

const app = express();

const waifuRoutes = router({
  waifu: waifuRouter,
});

app.use(morgan("dev"));
app.use(Cors());
app.use(
  "/trpc",
  trExpress.createExpressMiddleware({
    router: waifuRoutes,
    createContext,
  })
);

export type WaifuRoutes = typeof waifuRoutes;

export default app;
