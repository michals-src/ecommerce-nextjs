import Link from "next/link";
import Layout from "../src/components/layout";

import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

import products from "../fakeData/products.json";

const categories = ["Liście", "urządzenia", "akcesoria"];

import { useDispatch } from "react-redux";
import { innerModal } from "../src/slice/modalSlice";

import Login from "../src/modal-content/login";

const Text = () => <p>lol</p>;

const Abc = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(innerModal(<Login />))}>Klik</button>
    </>
  );
};

export default function Home() {
  return (
    <>
      <Layout>
        <Abc />
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
                  <ul className='m-0 list-none p-0'>
                    {categories.map((cat, k) => {
                      return (
                        <>
                          <li className='mb-2 uppercase'>
                            <Link href='/product' passHref>
                              <a className='block w-full pb-2 text-lg'>
                                <div className='flex flex-row flex-nowrap items-center'>
                                  <div>{cat}</div>
                                  <div className='ml-6'>
                                    <ArrowNarrowRightIcon className='h-4 w-4' />
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
                  <ul className='m-0 flex list-none flex-row flex-wrap p-0'>
                    {products.map((product, k) => {
                      return (
                        <>
                          <li className='mb-32 w-4/12 px-4'>
                            <div className='relative'>
                              <Link href='/product' passHref>
                                <a className='absolute top-0 left-0 z-10 h-full w-full text-transparent'>
                                  Produkt
                                </a>
                              </Link>
                              <div className='relative h-80 w-full overflow-hidden'>
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
                              <p className='mt-3 mb-1 text-lg'>
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
