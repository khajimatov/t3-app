// import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleStocksRouter = createTRPCRouter({
    getAll: publicProcedure.query(async ({ ctx }) => {
        // commented for now
        //
        // const exampleStocksSymbols = await ctx.prisma.exampleStock.findMany({
        //     select: {
        //         symbol: true,
        //     },
        // }).then((stocks) => {
        //     return stocks.map((stock) => stock.symbol);
        // });
        //
        const response = await fetch(`https://query1.finance.yahoo.com/v7/finance/quote?symbols=SNAP,AAPL,NVDA,TSM,BNB-USD`);
        const res = await response.json() as { quoteResponse: { result: { symbol: string, regularMarketPrice: number }[] } };
        return res.quoteResponse.result;
    }),
});
