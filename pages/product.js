import Link from "next/link";
import Layout from "../src/components/layout";

import products from "../fakeData/products.json";

import {
  HeartIcon,
  StarIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/outline";
import {
  HeartIcon as HeartSolidIcon,
  StarIcon as StarIconSolid,
} from "@heroicons/react/solid";

const Rating = () => {
  const stars = Array(5).fill("");
  const rate = Math.round(2.1);

  return (
    <div className='flex flex-row flex-nowrap items-center'>
      <div>
        <div className='flex flex-row flex-nowrap space-x-1 items-center'>
          {stars.map((star, key) => {
            return (
              <>
                {key <= rate && (
                  <StarIconSolid className='w-6 h-6 text-black' key={key} />
                )}
                {key > rate && (
                  <StarIcon className='w-5 h-5 text-black' key={key} />
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className='ml-4'>
        <Link href='#' passHref>
          <a className='text-black hover:underline p-1'>(0)</a>
        </Link>
      </div>
    </div>
  );
};

function Product() {
  const product = products[0];

  return (
    <>
      <Layout>
        <main id='main' className='my-16'>
          <div className='container mx-auto px-16'>
            <div className='my-32'>
              <div className='flex flex-row flex-wrap '>
                <div className='w-7/12 pr-16  h-full'>
                  <div className='flex flex-row flex-wrap -mx-5'>
                    <div className='w-1/2 px-5'>
                      <div className='w-full h-auto'>
                        <img src={product.image} alt={product.title} />
                      </div>
                    </div>
                    <div className='w-1/2 px-5'>
                      <div className='w-full h-auto'>
                        <img src={product.image} alt={product.title} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-5/12 pl-20 h-auto'>
                  <div className='flex flex-col space-between h-full w-full'>
                    <div className='flex-auto'>
                      <div className='mb-4'>
                        <p className='text-normal'>{product.category}</p>
                      </div>
                      <div className='mb-4'>
                        <Rating />
                      </div>
                      <div className='my-8'>
                        <h3 className='uppercase'>{product.title}</h3>
                      </div>
                      <p className='text-lg'>{product.description}</p>
                      <div className='mt-32 mb-16'>
                        <div className='flex flex-row flex-wrap items-center'>
                          <div className='mr-8'>
                            <h3>{product.price} zł</h3>
                          </div>
                          <div className='flex-auto flex items-center'>
                            <p className='text-lg mr-4'>Ilość</p>
                            <input
                              type='number'
                              className='px-3 py-1 border-2 border-black rounded-sm'
                              min='0'
                              max='99'
                              value='0'
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className='flex flex-row flex-wrap items-center'>
                          <div className='mr-4'>
                            <button className='py-3 px-6 uppercase font-bold border-2 border-black bg-black text-white'>
                              Dodaj do koszyka
                            </button>
                          </div>
                          <div className='ml-4'>
                            <button className='py-3 px-6 uppercase font-bold border-2 border-black'>
                              <div className='flex flex-row flex-nowrap items-center'>
                                <div className='mr-6'>
                                  <HeartIcon className='w-4 h-4' />
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
                      <Link href='#' passHref>
                        <a className='flex flex-row flex-nowrap items-center p-1 hover:underline'>
                          <div className='mr-1'>
                            <div className='font-bold'>
                              <h5>Wszytkie opinie</h5>
                            </div>
                          </div>
                          <div className='ml-1'>
                            <ArrowNarrowRightIcon className='w-4 h-4' />
                          </div>
                        </a>
                      </Link>
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

export default Product;
