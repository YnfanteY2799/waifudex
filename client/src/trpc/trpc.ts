import { createTRPCReact } from "@trpc/react-query";
import { WaifuRoutes } from "../../../src/app/backend";

export const trpc = createTRPCReact<WaifuRoutes>();
