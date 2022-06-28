import { SessionProvider } from "next-auth/react";

import dynamic from "next/dynamic";

import "nprogress/nprogress.css";
import "../styles/globals.css";

const TopProgressBar = dynamic(
  () => {
    return import("../src/components/SiteProgressbar");
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopProgressBar />
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
