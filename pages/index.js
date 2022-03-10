import Layout from "../src/components/layout";

import Hero from "../src/sections/home/hero";
import Newest from "../src/sections/home/newest";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Newest />
        <div>NEWEST ITEMS</div>
      </Layout>
    </>
  );
}
