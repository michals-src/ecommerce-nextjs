import Link from "next/link";
import Layout from "../src/components/layout";

import products from "../fakeData/products.json";

import {
  HeartIcon,
  ArrowNarrowRightIcon,
  TrashIcon,
  CreditCardIcon,
  CashIcon,
} from "@heroicons/react/outline";

export default function Cart() {
  const product = products[0];

  return (
    <>
      <Layout>
        <main id='main' className='my-16'>
          <div className='container mx-auto px-16'>
            <div>
              <div className='flex flex-row flex-wrap '>
                <div className='h-auto w-7/12 pr-16'>
                  <div className='mb-8 pb-12'>
                    <h1 className='uppercase'>Koszyk</h1>
                    <h5 className='mt-3'>1 produkt</h5>
                  </div>
                  <div className='flex flex-col flex-nowrap space-y-1'>
                    {/* Cart product */}
                    <div className='border-grey-600 border-b p-5'>
                      <div className='flex flex-row flex-nowrap'>
                        <div className='h-auto w-1/12'>
                          <img
                            className='w-full'
                            src={product.image}
                            alt={product.title}
                          />
                        </div>
                        <div className='w-11/12 pl-10'>
                          <h6 className='text-lg'>{product.title}</h6>
                          <div className='my-2 flex flex-row items-center'>
                            <p className='text-normal mr-4'>Ilość</p>
                            <input
                              type='number'
                              className='rounded-sm border-2 border-black px-3 py-1 text-sm'
                              min='0'
                              max='99'
                              value='0'
                            />
                          </div>
                          <div className='mt-6 flex flex-row flex-wrap items-center'>
                            <div className='flex-auto'>
                              <p>{product.price} zł</p>
                            </div>
                            <div className='flex flex-row flex-nowrap space-x-6'>
                              <button className='flex flex-row flex-nowrap items-center text-sm text-gray-600 hover:underline'>
                                <div className='mr-2'>
                                  <TrashIcon className='h-3 w-3' />
                                </div>
                                <div>
                                  <span>Usuń</span>
                                </div>
                              </button>
                              <button className='flex flex-row flex-nowrap items-center text-sm text-complement-800 hover:underline'>
                                <div className='mr-2'>
                                  <HeartIcon className='h-3 w-3' />
                                </div>
                                <div>
                                  <span>Przenieś do listy życzeń</span>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Cart product */}
                  </div>
                </div>
                <div className='h-auto w-5/12 bg-gray-100 p-16'>
                  <div>
                    <div>
                      <div className='mb-4'>
                        <h4 className='uppercase'>Podsumowanie</h4>
                      </div>
                      <div className='space-y-4'>
                        <div className='space-between flex flex-row flex-nowrap'>
                          <div className='flex-auto'>
                            <p>Suma produktów</p>
                          </div>
                          <div>
                            <p>{product.price} zł</p>
                          </div>
                        </div>
                        <div className='space-between flex flex-row flex-nowrap'>
                          <div className='flex-auto'>
                            <p>Dostawa</p>
                          </div>
                          <div>
                            <p>0,00 zł</p>
                          </div>
                        </div>
                      </div>
                      <div className='space-between mt-8 flex flex-row flex-nowrap'>
                        <div className='flex-auto'>
                          <p className='text-lg'>Łącznie (w tym VAT)</p>
                        </div>
                        <div>
                          <p className='text-lg'>300,00 zł</p>
                        </div>
                      </div>
                      <div className='mt-4'>
                        <Link href='/checkout' passHref>
                          <a className='block w-full border-2 border-primary bg-primary py-3 px-6 text-sm font-bold uppercase text-white '>
                            <div className='flex w-full flex-row flex-nowrap items-center'>
                              <div className='flex-auto'>
                                <span>Przejdź do kasy</span>
                              </div>
                              <div className='ml-6'>
                                <ArrowNarrowRightIcon className='h-6 w-6' />
                              </div>
                            </div>
                          </a>
                        </Link>
                      </div>

                      <div className='mt-16 mb-4'>
                        <h4 className='uppercase'>Akceptowalne płatności</h4>
                      </div>
                      <div className='flex flex-row flex-nowrap items-center'>
                        <div className='mr-6'>
                          <CreditCardIcon className='h-4 w-4' />
                        </div>
                        <p className='text-lg'>Online</p>
                      </div>
                      <div className='mt-3 mb-6'>
                        Rodzaje płatności online ... zdjęcia
                      </div>
                      <div className='flex flex-row flex-nowrap items-center'>
                        <div className='mr-6'>
                          <CashIcon className='h-4 w-4' />
                        </div>
                        <p className='text-lg'>Przy odbiorze</p>
                      </div>
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
