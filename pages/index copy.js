import Layout from "../src/components/layout";

import Hero from "../src/sections/home/hero";
import Newest from "../src/sections/home/Newest";
import Categories from "../src/sections/home/categories";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Newest />
        <div className='container mx-auto px-2 my-32 px-20'>
          <div className='text-4xl'>
            <h1 className='mb-16 tracking-[0.5rem] font-medium'>Czym jest</h1>
          </div>
          <p className='text-lg tracking-wide'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At dolorum
            labore voluptas! Fugiat eos, aliquid repellat, consequatur pariatur
            maiores, sint vel non atque harum aspernatur illo sequi. Temporibus,
            ipsa doloremque. Hic, obcaecati quidem! Tenetur, excepturi quis ut
            accusamus quisquam ipsam vitae esse? Ducimus distinctio ullam, velit
            illo tenetur dolores? Voluptatum ex porro magnam suscipit iste unde
            odit blanditiis, vero ducimus! Provident cupiditate beatae
            blanditiis exercitationem? Eveniet ipsum illo nostrum vitae.
            Voluptas excepturi numquam ea eius distinctio eaque id beatae nisi
            commodi eos tempore assumenda hic, nostrum, libero nemo rem velit?
          </p>
          <div className='mt-10 flex flex-row flex-wrap'>
            <div className='w-5/12 pr-20'>
              <p className='text-2xl font-medium tracking-[0.3rem]'>
                Korzysci z korzystania
              </p>
            </div>
            <div className='w-7/12 tracking-wide'>
              <p className='text-lg'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis quasi voluptate recusandae qui consequatur atque
                mollitia dicta quaerat, quod tempore, et, corrupti rerum
                accusamus laboriosam blanditiis deserunt tenetur tempora eos.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
