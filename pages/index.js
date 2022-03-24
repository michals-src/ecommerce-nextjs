import Link from "next/link";
import Layout from "../src/components/layout";

import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

import products from "../fakeData/products.json";

const categories = ["Liście", "urządzenia", "akcesoria"];

export default function Home() {
  return (
    <>
      <Layout>
        <div id='hero'>
          <div className='container mx-auto px-16'>
            <div className='my-8 py-12'>
              <h1 className='uppercase'>sklepshop</h1>
              <h5 className='mt-3'>Wyposaż swoją kolekcję w nowe akcesoria</h5>
            </div>
          </div>
        </div>
        <main id='main' className='my-16'>
          <div className='container mx-auto px-16'>
            <div className='flex flex-row flex-wrap items-start'>
              <div className='w-3/12'>
                <div className='pr-4'>
                  <ul className='list-none p-0 m-0'>
                    {categories.map((cat, k) => {
                      return (
                        <>
                          <li className='mb-2 uppercase'>
                            <Link href='/product' passHref>
                              <a className='block w-full text-lg pb-2'>
                                <div className='flex flex-row flex-nowrap items-center'>
                                  <div>{cat}</div>
                                  <div className='ml-6'>
                                    <ArrowNarrowRightIcon className='w-4 h-4' />
                                  </div>
                                </div>
                              </a>
                            </Link>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className='w-9/12'>
                <div className='pl-4'>
                  <ul className='list-none p-0 m-0 flex flex-row flex-wrap'>
                    {products.map((product, k) => {
                      return (
                        <>
                          <li className='w-4/12 px-4 mb-32'>
                            <div className='relative'>
                              <Link href='/product' passHref>
                                <a className='absolute z-10 w-full h-full text-transparent top-0 left-0'>
                                  Produkt
                                </a>
                              </Link>
                              <div className='h-80 w-full overflow-hidden relative'>
                                <img
                                  className='object-fit'
                                  src={product.image}
                                />
                              </div>
                            </div>
                            <div className='mt-8'>
                              <span className='text-gray-400'>
                                {product.category}
                              </span>
                              <p className='text-lg mt-3 mb-1'>
                                {product.title}
                              </p>
                              <p className='text-lg'>{product.price} zł</p>
                            </div>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
