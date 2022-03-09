import Layout from "../src/components/layout";

import Hero from "../src/sections/home/hero";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <div className='h-screen'>CATEGORIES</div>
        <div>NEWEST ITEMS</div>
      </Layout>
    </>
  );
}
