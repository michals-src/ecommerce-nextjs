import { useState } from "react";
import Layout from "../../src/components/layout";

import {
  HeartIcon,
  StarIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/outline";
import {
  HeartIcon as HeartSolidIcon,
  StarIcon as StarIconSolid,
} from "@heroicons/react/solid";

import { useDispatch } from "react-redux";
import { innerModal } from "../../src/slice/modalSlice";
import _m_ProductComments from "../../src/modal-content/product-comments";

const Rating = () => {
  const dispatch = useDispatch();

  const stars = Array(5).fill("");
  const rate = Math.round(2.1);

  const [starHover, _starHover] = useState(false);
  const [starHoverID, _starHoverID] = useState(-1);

  return (
    <div className='flex flex-row flex-nowrap items-center'>
      <div>
        <div
          className='flex flex-row flex-nowrap items-center'
          onMouseEnter={() => _starHover(true)}
          onMouseLeave={() => _starHover(false)}>
          {stars.map((_, key) => {
            return (
              <>
                <div
                  className='pr-1'
                  onClick={() => alert(key)}
                  onMouseEnter={() => _starHoverID(key)}
                  onMouseLeave={() => _starHoverID(-1)}>
                  {starHover && (
                    <>
                      {key <= starHoverID && (
                        <StarIconSolid
                          className='h-6 w-6 cursor-pointer text-black'
                          key={key}
                        />
                      )}
                      {key > starHoverID && (
                        <StarIcon className='h-6 w-6 text-black' key={key} />
                      )}
                    </>
                  )}
                  {!starHover && (
                    <>
                      {key <= rate && (
                        <StarIconSolid
                          className='h-6 w-6 cursor-pointer text-black'
                          key={key}
                        />
                      )}
                      {key > rate && (
                        <StarIcon
                          className='h-6 w-6 cursor-pointer text-black text-black'
                          key={key}
                        />
                      )}
                    </>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className='ml-4'>
        <button
          onClick={() => dispatch(innerModal(<_m_ProductComments id={0} />))}>
          <span className='p-1 text-black hover:underline'>(0)</span>
        </button>
      </div>
    </div>
  );
};

const _btn_opinions = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(innerModal(<_m_ProductComments id={0} />))}
      className='flex flex-row flex-nowrap items-center p-1 hover:underline'>
      <div className='mr-1'>
        <div className='font-bold'>
          <h5>Wszytkie opinie</h5>
        </div>
      </div>
      <div className='ml-1'>
        <ArrowNarrowRightIcon className='h-4 w-4' />
      </div>
    </button>
  );
};

export default function Product({ post }) {
  const data = post[0];

  return (
    <>
      <Layout>
        <main id='main' className='my-16'>
          <div className='container mx-auto px-16'>
            <div className='my-32'>
              <div className='flex flex-row flex-wrap '>
                <div className='h-full w-7/12  pr-16'>
                  <div className='-mx-5 flex flex-row flex-wrap'>
                    <div className='w-1/2 px-5'>
                      <div className='h-auto w-full'>
                        <img src={data.image} alt={data.title} />
                      </div>
                    </div>
                    <div className='w-1/2 px-5'>
                      <div className='h-auto w-full'>
                        <img src={data.image} alt={data.title} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='h-auto w-5/12 pl-20'>
                  <div className='space-between flex h-full w-full flex-col'>
                    <div className='flex-auto'>
                      <div className='mb-4'>
                        <p className='text-normal'>{data.category}</p>
                      </div>
                      <div className='mb-4'>
                        <Rating />
                      </div>
                      <div className='my-8'>
                        <h3 className='uppercase'>{data.title}</h3>
                      </div>
                      <p className='text-lg'>{data.description}</p>
                      <div className='mt-32 mb-16'>
                        <div className='flex flex-row flex-wrap items-center'>
                          <div className='mr-8'>
                            <h3>{data.price} zł</h3>
                          </div>
                          <div className='flex flex-auto items-center'>
                            <p className='mr-4 text-lg'>Ilość</p>
                            <input
                              type='number'
                              className='rounded-sm border-2 border-black px-3 py-1'
                              min='0'
                              max='99'
                              value='0'
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className='flex flex-row flex-wrap items-center'>
                          <div className='mt-4 w-full 2xl:mr-4 2xl:w-auto'>
                            <button className='border-2 border-black bg-black py-3 px-6 font-bold uppercase text-white'>
                              Dodaj do koszyka
                            </button>
                          </div>
                          <div className='mt-4 w-full 2xl:ml-4 2xl:w-auto'>
                            <button className='border-2 border-black py-3 px-6 font-bold uppercase'>
                              <div className='flex flex-row flex-nowrap items-center'>
                                <div className='mr-6'>
                                  <HeartIcon className='h-4 w-4' />
                                </div>
                                <div>
                                  <span>Ulubione</span>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='my-8'>
                      <_btn_opinions />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3000/api/products");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map(post => ({
    params: { id: post.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const res = await fetch(`http://localhost:3000/api/products/${params.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
