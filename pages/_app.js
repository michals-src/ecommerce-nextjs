import { SessionProvider } from "next-auth/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import dynamic from "next/dynamic";

import "nprogress/nprogress.css";
import "../styles/globals.css";

const TopProgressBar = dynamic(
  () => {
    return import("../src/components/SiteProgressbar");
  },
  { ssr: false }
);

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <TopProgressBar />
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <Component {...pageProps} />
        </SessionProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
