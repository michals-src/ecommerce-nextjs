import Link from "next/link";

import Layout from "../src/components/layout";

import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

import products from "../fakeData/products.json";

const categories = ["Liście", "urządzenia", "akcesoria"];

import { useDispatch } from "react-redux";
import { productsUpdate } from "../src/slice/productsSlice";
import { innerModal } from "../src/slice/modalSlice";

import Login from "../src/modal-content/login";
import { useEffect } from "react";

// const Text = () => <p>lol</p>;

// const Abc = () => {
//   const dispatch = useDispatch();

//   return (
//     <>
//       <button onClick={() => dispatch(innerModal(<Login />))}>Klik</button>
//     </>
//   );
// };

export async function getServerSideProps({ req, res }) {
  // This value is considered fresh for ten seconds (s-maxage=10).
  // If a request is repeated within the next 10 seconds, the previously
  // cached value will still be fresh. If the request is repeated before 59 seconds,
  // the cached value will be stale but still render (stale-while-revalidate=59).
  //
  // In the background, a revalidation request will be made to populate the cache
  // with a fresh value. If you refresh the page, you will see the new value.
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=30, stale-while-revalidate=59"
  );

  const response = await fetch(`http://localhost:3000/api/products`);
  const products = await response.json();

  //console.log(products)

  return {
    props: {
      products,
    },
  };
}

export default function Home({ products }) {
  const dispatch = useDispatch();

  useEffect(() => {

    const products_to_memo = {};

    if (products.length > 0) {
      products.map(product => {
        products_to_memo[product.slug] = product;
      });
    }

    dispatch(productsUpdate(products_to_memo));
    console.log(products)

  }, [products]);

  if (products === undefined || Object.keys(products).length <= 0) {
    return (
      <>
        <ProductsEmpty />
      </>
    );
  }

  return (
    <>
      <Layout>
        {/* <Abc /> */}
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
                          <li key={k} className='mb-2 uppercase'>
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
                    {/**
                     * todo fix
                     * code: "woocommerce_rest_cannot_view"
data: {status: 401}
message: "Sorry, you cannot list resources."
                     */}
                    {products.map((product, k) => {
                      return (
                        <>
                          <li key={k} className='mb-32 w-4/12 px-4'>
                            <Product item={product} />
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

const ProductsEmpty = () => {
  return (
    <>
      <h5>Nie wczytano produktów</h5>
    </>
  );
};

const Product = ({ item }) => {
  return (
    <>
      <div className='relative'>
        <Link href={`/product/` + item.slug} passHref>
          <a className='absolute top-0 left-0 z-10 h-full w-full text-transparent'>
            {item.name}
          </a>
        </Link>
        <div className='relative h-80 w-full overflow-hidden'>
          <img
            className='object-fit'
            src={item.images[0].src.replace("https", "http")}
          />
        </div>
      </div>
      <div className='mt-8'>
        <span className='text-gray-400'></span>
        <p className='mt-3 mb-1 text-lg'>{item.name}</p>
        <p className='text-lg'>{item.price} zł</p>
      </div>
    </>
  );
};
