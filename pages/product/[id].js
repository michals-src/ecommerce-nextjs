import { useEffect, useState, useContext } from "react";

import { useQuery, gql } from "@apollo/client";
import useSWR from "swr";

import Layout from "../../src/components/layout";

import ProductContext from "../../src/context/ProductContext";

import Rating from "../../src/components/product/single/rating";
import Actions from "../../src/components/product/single/actions";
import Reviews from "../../src/components/product/single/reviews";

import { XIcon } from "@heroicons/react/outline";

import { productGet } from "../../src/slice/productsSlice";
import { useDispatch } from "react-redux";

// const GET_LOCATIONS = gql`
//   query NewQuery {
//     posts {
//       nodes {
//         title
//       }
//     }
//   }
// `;

// export async function getServerSideProps(context) {
//   const {
//     params: { id },
//   } = context;
//   const res = await fetch(`http://localhost:3000/api/products/${id}`);
//   const post = await res.json();

//   return {
//     props: {
//       post,
//     },
//   };
// }

const Product = () => {
  const [product_count, set_product_count] = useState(1);
  const { product } = useContext(ProductContext);
  const { average_rating, rating_count } = product;
  const categories = product.categories
    ? product.categories
        .map(category => {
          return category.name;
        })
        .join(" ")
    : "";

  console.log(categories);

  return (
    <div className='flex flex-row flex-wrap '>
      <div className='h-full w-6/12  pr-16'>
        <div className='-mx-5 flex flex-row flex-wrap'>
          <div className='w-full px-5'>
            <div className='h-auto w-full'>
              <img
                src={product.images[0].src.replace("https", "http")}
                alt={product.name}
              />
            </div>
          </div>
          {/* <div className='w-1/2 px-5'>
          <div className='h-auto w-full'>
            <img src={data.image} alt={data.title} />
          </div>
        </div> */}
        </div>
      </div>
      <div className='h-auto w-6/12 pl-32'>
        <div className='space-between flex h-full w-full flex-col'>
          <div className='flex-auto'>
            <div className='mb-4'>
              <p className='text-normal'>{categories}</p>
            </div>
            <div className='mb-4'>
              <Rating average={average_rating} count={rating_count} />
            </div>
            <div className='my-8'>
              <h3 className='uppercase'>{product.name}</h3>
            </div>
            <p className='text-lg'>
              {product.description.replace(/<[^>]*>?/gm, "")}
            </p>
            <div className='mt-32 mb-16'>
              <div className='flex flex-row flex-wrap items-center'>
                <div className='mr-8'>
                  <h3>{product.price} zł</h3>
                </div>
                <div className='flex flex-auto items-center'>
                  <p className='mr-4 text-lg'>Ilość</p>
                  <input
                    type='number'
                    className='rounded-sm border-2 border-black px-3 py-1'
                    min='1'
                    max='99'
                    value={product_count}
                    onChange={e => {
                      set_product_count(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <Actions />
        </div>
      </div>
    </div>
  );
};

const ReviewsPreview = () => {
  const { product } = useContext(ProductContext);

  return (
    <>
      <div className='fixed top-0 left-0 z-50 h-full w-full overflow-y-scroll bg-[rgb(0,0,0,.8)] p-4 lg:p-12'>
        <div className='relative mx-auto flex h-auto min-h-full max-w-[800px] flex-col overflow-hidden rounded-md bg-white'>
          <div className='flex h-auto w-full flex-row flex-nowrap items-center justify-end '>
            <div className='p-3'>
              <button onClick={() => product.reviewsPreview(false)}>
                <XIcon className='h-6 w-6' />
              </button>
            </div>
          </div>
          <Reviews />
        </div>
      </div>
    </>
  );
};

const fetcher = url => fetch(url).then(res => res.json());

export default function Index({ slug }) {
  // useEffect(() => {
  //   console.log(post);
  // }, [post])

  // const data = post[0];

  const disptach = useDispatch();

  // const { dataa, err } = useSWR(`/api/products/${productID}`, fetcher);

  useEffect(() => {
    const productID = disptach(productGet(slug));
    console.log(slug);
  }, []);

  return (
    <>
      <p>ABC</p>
    </>
  );

  const [reviewsActive, setReviewsActive] = useState(false);

  const data = {
    product: { ...post, reviewsPreview: setReviewsActive },
  };

  return (
    <>
      {dataa == "undefined" && <p>Ładuje się</p>}
      <Layout>
        <main id='main' className='my-16'>
          <div className='container mx-auto px-16'>
            <div className='my-32'>
              <ProductContext.Provider value={data}>
                <Product />
                {reviewsActive && <ReviewsPreview />}
              </ProductContext.Provider>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

// export async function getServerSideProps(context) {
//   const {
//     params: { id },
//   } = context;
//   const res = await fetch(`http://localhost:3000/api/products/${id}`);
//   const post = await res.json();

//   return {
//     props: {
//       post,
//     },
//   };
// }

Index.getInitialProps = async context => {
  const {
    query: { id },
  } = context;

  return {
    slug: id,
  };
};
