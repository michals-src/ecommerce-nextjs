import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const Hero_alpha = () => {
  return (
    <>
      <div>
        <div className='container mx-auto lg:px-2'>
          <div className='flex flex-row flex-nowrap'>
            <div className='w-1/2 p-10 lg:p-20 xl:p-32 flex flex-col justify-center items-center bg-gray-100'>
              <div>
                <div className='mb-4'>
                  <h6 className='text-sm lg:text-lg text-gray-800'>
                    Odkrywaj nowe smaki
                  </h6>
                </div>
                <div className='mb-16'>
                  <h3 className='text-gray-800 text-xl md:text-4xl xl:text-6xl font-medium leading-tight lg:leading-[1.1]'>
                    Wyposaż swoją kolekcję w nowe akcesoria
                  </h3>
                </div>
                <Link href='#' passHref>
                  <a className='rounded-sm border border-black px-5 py-2 rounded-3 font-medium text-sm  hover:text-gray-500 hover:border-gray-500'>
                    Odkryj więcej
                  </a>
                </Link>
              </div>
            </div>
            <div className='w-1/2 bg-gray-100 overflow-hidden relative'>
              <div className='absolute top-0 left-0 overflow-hidden w-full h-full'>
                <img
                  className='max-w-none translate-x-[-50%] translate-y-[-50%]'
                  src='https://images.unsplash.com/photo-1619066400673-c973159d4e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1827&q=80'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <>
      <div className='container mx-auto'>
        <div className='p-0'>
          <div className='flex flex-row flex-nowrap'>
            <div className='w-5/12 px-10 flex flex-col justify-center items-center'>
              <div>
                <div className='mb-4'>
                  <h6 className='text-sm lg:text-lg text-gray-800'>
                    Odkrywaj nowe smaki
                  </h6>
                </div>
                <div className='mb-16'>
                  <div className='text-xl md:text-4xl xl:text-5xl'>
                    <p className='text-gray-800 leading-[1.15] font-medium uppercase tracking-[.5rem]'>
                      Wyposaż swoją <span className='underline'>kolekcję</span>{" "}
                      w nowe akcesoria
                    </p>
                  </div>
                </div>
                <Link href='#' passHref>
                  <a className='rounded-sm border border-black px-5 py-2 rounded-3 font-medium text-sm  hover:text-gray-500 hover:border-gray-500'>
                    Odkryj więcej
                  </a>
                </Link>
              </div>
            </div>
            <div className='w-7/12 mt-12 overflow-hidden relative'>
              <div className='p-10 h-full'>
                <div className='flex flex-row flex-wrap items-end h-full -m-2'>
                  <div className='w-4/12 p-2 h-auto'>
                    <div className='bg-white'>
                      <div className='overflow-hidden w-full h-80 object-cover rounded-sm'>
                        <img
                          src='https://images.unsplash.com/photo-1617027185542-e87f1bce9091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
                          alt='Mockup'
                        />
                      </div>
                    </div>
                    <div className='p-4 mb-3'>
                      <div className='text-xl'>
                        <h6 className='truncate font-normal tracking-wide'>
                          Lorem ipsum dolor sit amet consectetur
                        </h6>
                      </div>
                      <div className='flex flex-row flex-nowrap items-end mt-2'>
                        <p className='text-md font-medium leading-4'>49 zł</p>
                        <p className='text-sm text-gray-500 ml-3 leading-4'>
                          / szt.
                        </p>
                      </div>
                    </div>
                    <Link href='#' passHref>
                      <a className='block rounded-sm border px-5 py-2 rounded-3 font-medium text-sm text-white  bg-black hover:bg-slate-800'>
                        <div className='flex flex-row flex-nowrap items-center'>
                          <div className='py-1 px-3 w-auto'>
                            <ShoppingCartIcon className='text-white w-4 h-4' />
                          </div>
                          <div className='flex-auto text-center'>
                            <p className='py-1'>do koszyka</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className='w-4/12 p-2 h-auto'>
                    <div className='bg-white'>
                      <div className='overflow-hidden w-full h-80 object-cover rounded-sm'>
                        <img
                          src='https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1604&q=80'
                          alt='Mockup'
                        />
                      </div>
                    </div>
                    <div className='p-4 mb-3'>
                      <div className='text-xl'>
                        <h6 className='truncate font-normal tracking-wide'>
                          Lorem ipsum dolor sit amet consectetur
                        </h6>
                      </div>
                      <div className='flex flex-row flex-nowrap items-end mt-2'>
                        <p className='text-md font-medium leading-4'>49 zł</p>
                        <p className='text-sm text-gray-500 ml-3 leading-4'>
                          / szt.
                        </p>
                      </div>
                    </div>
                    <Link href='#' passHref>
                      <a className='block rounded-sm border px-5 py-2 rounded-3 font-medium text-sm text-white  bg-black hover:bg-slate-800'>
                        <div className='flex flex-row flex-nowrap items-center'>
                          <div className='py-1 px-3 w-auto'>
                            <ShoppingCartIcon className='text-white w-4 h-4' />
                          </div>
                          <div className='flex-auto text-center'>
                            <p className='py-1'>do koszyka</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className='w-4/12 p-2 h-auto'>
                    <div className='bg-white'>
                      <div className='overflow-hidden w-full h-80 object-cover rounded-sm'>
                        <img
                          src='https://images.unsplash.com/photo-1628794397139-a45fc3286892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
                          alt='Mockup'
                        />
                      </div>
                    </div>
                    <div className='p-4 mb-3'>
                      <div className='text-xl'>
                        <h6 className='truncate font-normal tracking-wide'>
                          Lorem ipsum dolor sit amet consectetur
                        </h6>
                      </div>

                      <div className='flex flex-row flex-nowrap items-end mt-2'>
                        <p className='text-md font-medium leading-4'>49 zł</p>
                        <p className='text-sm text-gray-500 ml-3 leading-4'>
                          / szt.
                        </p>
                      </div>
                    </div>
                    <Link href='#' passHref>
                      <a className='block rounded-sm border px-5 py-2 rounded-3 font-medium text-sm text-white  bg-black hover:bg-slate-800'>
                        <div className='flex flex-row flex-nowrap items-center'>
                          <div className='py-1 px-3 w-auto'>
                            <ShoppingCartIcon className='text-white w-4 h-4' />
                          </div>
                          <div className='flex-auto text-center'>
                            <p className='py-1'>do koszyka</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
