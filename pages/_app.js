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
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
