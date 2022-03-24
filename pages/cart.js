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
                <div className='w-7/12 pr-16 h-auto'>
                  <div className='mb-8 pb-12'>
                    <h1 className='uppercase'>Koszyk</h1>
                    <h5 className='mt-3'>1 produkt</h5>
                  </div>
                  <div className='flex flex-col flex-nowrap space-y-1'>
                    {/* Cart product */}
                    <div className='border-b border-grey-600 p-5'>
                      <div className='flex flex-row flex-nowrap'>
                        <div className='w-1/12 h-auto'>
                          <img
                            className='w-full'
                            src={product.image}
                            alt={product.title}
                          />
                        </div>
                        <div className='w-11/12 pl-10'>
                          <h6 className='text-lg'>{product.title}</h6>
                          <div className='flex flex-row items-center my-2'>
                            <p className='text-normal mr-4'>Ilość</p>
                            <input
                              type='number'
                              className='text-sm px-3 py-1 border-2 border-black rounded-sm'
                              min='0'
                              max='99'
                              value='0'
                            />
                          </div>
                          <div className='flex flex-row flex-wrap items-center mt-6'>
                            <div className='flex-auto'>
                              <p>{product.price} zł</p>
                            </div>
                            <div className='flex flex-row flex-nowrap space-x-6'>
                              <button className='flex flex-row flex-nowrap items-center text-gray-600 hover:underline text-sm'>
                                <div className='mr-2'>
                                  <TrashIcon className='w-3 h-3' />
                                </div>
                                <div>
                                  <span>Usuń</span>
                                </div>
                              </button>
                              <button className='flex flex-row flex-nowrap items-center text-gray-600 hover:underline text-sm'>
                                <div className='mr-2'>
                                  <HeartIcon className='w-3 h-3' />
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
                <div className='w-5/12 p-16 h-auto bg-gray-100'>
                  <div>
                    <div>
                      <div className='mb-4'>
                        <h4 className='uppercase'>Podsumowanie</h4>
                      </div>
                      <div className='space-y-4'>
                        <div className='flex flex-row flex-nowrap space-between'>
                          <div className='flex-auto'>
                            <p>Suma produktów</p>
                          </div>
                          <div>
                            <p>{product.price} zł</p>
                          </div>
                        </div>
                        <div className='flex flex-row flex-nowrap space-between'>
                          <div className='flex-auto'>
                            <p>Dostawa</p>
                          </div>
                          <div>
                            <p>0,00 zł</p>
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-row flex-nowrap space-between mt-8'>
                        <div className='flex-auto'>
                          <p className='text-lg'>Łącznie (w tym VAT)</p>
                        </div>
                        <div>
                          <p className='text-lg'>300,00 zł</p>
                        </div>
                      </div>
                      <div className='mt-4'>
                        <button className='text-sm py-3 px-6 uppercase font-bold border-2 border-black bg-black text-white'>
                          <div className='flex flex-row flex-nowrap items-center'>
                            <div>
                              <span>Przejdź do kasy</span>
                            </div>
                            <div className='ml-6'>
                              <ArrowNarrowRightIcon className='w-6 h-6' />
                            </div>
                          </div>
                        </button>
                      </div>

                      <div className='mt-16 mb-4'>
                        <h4 className='uppercase'>Akceptowalne płatności</h4>
                      </div>
                      <div className='items-center flex flex-row flex-nowrap'>
                        <div className='mr-6'>
                          <CreditCardIcon className='w-4 h-4' />
                        </div>
                        <p className='text-lg'>Online</p>
                      </div>
                      <div className='mt-3 mb-6'>
                        Rodzaje płatności online ... zdjęcia
                      </div>
                      <div className='items-center flex flex-row flex-nowrap'>
                        <div className='mr-6'>
                          <CashIcon className='w-4 h-4' />
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
