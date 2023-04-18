import { type AppType } from "next/app";

import { Toaster } from "react-hot-toast";
import { api } from "~/utils/api";

import "~/styles/globals.css";

import Nav from "~/components/Nav";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main>
      <Toaster />
      <Nav />
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
