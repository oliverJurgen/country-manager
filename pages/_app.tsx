import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import TokenProvider from "context/TokenContext";
import MsalWrapperProvider from "context/MsalWrapperContext";
import NProgress from "nprogress";

import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    const nprogressStart = () => NProgress.start();
    const nprogressDone = () => {
      NProgress.done();
    };
    router.events.on("routeChangeStart", nprogressStart);
    router.events.on("routeChangeComplete", nprogressDone);
    router.events.on("routeChangeError", nprogressDone);

    return () => {
      router.events.off("routeChangeStart", nprogressStart);
      router.events.off("routeChangeComplete", nprogressDone);
      router.events.off("routeChangeError", nprogressDone);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Swapoo Identities</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MsalWrapperProvider>
        <TokenProvider>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </TokenProvider>
      </MsalWrapperProvider>
    </>
  );
}
export default MyApp;
