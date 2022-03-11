import Layout from "../src/components/layout";

import Hero from "../src/sections/home/hero";
import Newest from "../src/sections/home/newest";
import Categories from "../src/sections/home/categories";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Newest />
        <Categories />
      </Layout>
    </>
  );
}
