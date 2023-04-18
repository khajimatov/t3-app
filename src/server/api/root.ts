import { createTRPCRouter } from "~/server/api/trpc";
import { exampleStocksRouter } from "~/server/api/routers/exampleStocks";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  exampleStocks: exampleStocksRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
