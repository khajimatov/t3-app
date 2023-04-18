import React, { useEffect } from "react";

import { type NextPage } from "next";
import Head from "next/head";

import { Card, Metric, Text, Flex, Grid } from "@tremor/react";
import { toast } from "react-hot-toast";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data: exampleStocks, isLoading } = api.exampleStocks.getAll.useQuery();
  useEffect(() => {
    toast.success("Welcome to StockDash");
  }, []);
  return (
    <>
      <Head>
        <title>StockDash</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <section className="mt-10">
          <span>Here is an example of how it looks</span>
          {isLoading && <p>Loading Example Stocks</p>}
          <Grid numColsSm={2} numColsLg={3} className="mt-2 gap-6">
            {exampleStocks &&
              exampleStocks.map((s) => (
                <Card key={s.symbol}>
                  <Text>{s.symbol}</Text>
                  <Flex justifyContent="start" alignItems="baseline" className="space-x-3 truncate">
                    <Metric>$ {s.regularMarketPrice.toFixed(2)}</Metric>
                  </Flex>
                </Card>
              ))}
          </Grid>
        </section>
      </main>
    </>
  );
};

export default Home;
