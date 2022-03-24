import Link from "next/link";
import {
  ShoppingCartIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/outline";

const products = [
  "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1585652757141-8837d676fac8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1597931752949-98c74b5b159f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80",
  "https://images.unsplash.com/photo-1585652757173-57de5e9fab42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1563804447971-6e113ab80713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
];

function Newest() {
  return (
    <>
      <div className='flex flex-row flex-wrap mt-12 '>
        <div className='w-4/12 pl-20 pr-10 flex flex-col justify-start items-start'>
          <div className='py-10 w-full'>
            <div className='flex flex-col flex-nowrap'>
              <div className='mb-12'>
                <p className='mb-5 text-slate-500'>
                  Wypełnij miejsce w sprzecie
                </p>
                <div className='text-3xl uppercase'>
                  <p className='tracking-[.3rem]'>OLEJKI I LIŚCIE</p>
                </div>
                <div className='mt-3'>
                  <Link href='#' passHref>
                    <a className='font-medium text-sm'>
                      <div className='flex flex-row flex-nowrap items-center'>
                        <div className='py-1'>
                          <p>Odkryj więcej</p>
                        </div>
                        <div className='py-1 px-3'>
                          <ArrowNarrowRightIcon className='w-4 h-4' />
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>

              <div className='mb-12 border-y border-slate-300 py-8'>
                <p className='mb-5 text-slate-500'>Wyposaż się w v-rytor</p>
                <div className='text-3xl uppercase'>
                  <p className='tracking-[.3rem]'>urządzenia</p>
                </div>
                <div className='mt-3'>
                  <Link href='#' passHref>
                    <a className='font-medium text-sm'>
                      <div className='flex flex-row flex-nowrap items-center'>
                        <div className='py-1'>
                          <p>Odkryj więcej</p>
                        </div>
                        <div className='py-1 px-3'>
                          <ArrowNarrowRightIcon className='w-4 h-4' />
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>

              <div className='mb-12'>
                <p className='mb-5 text-slate-500'>Dodatkowy asortyment</p>
                <div className='text-3xl uppercase'>
                  <p className='tracking-[.3rem]'>Akcesoria</p>
                </div>
                <div className='mt-3'>
                  <Link href='#' passHref>
                    <a className='font-medium text-sm'>
                      <div className='flex flex-row flex-nowrap items-center'>
                        <div className='py-1'>
                          <p>Odkryj więcej</p>
                        </div>
                        <div className='py-1 px-3'>
                          <ArrowNarrowRightIcon className='w-4 h-4' />
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-8/12 overflow-hidden relative'>
          <div className='p-10 h-full'>
            <div className='mb-5'>
              <div className='text-4xl'>
                <h1 className=' font-medium uppercase tracking-[.5rem]'>
                  Nowości
                </h1>
              </div>
            </div>
            <div className='flex flex-row flex-wrap items-end h-full -m-2'>
              {products.map((p, k) => {
                return (
                  <>
                    <div className='w-3/12 p-2 h-auto ' key={k}>
                      <div className='bg-white  h-full'>
                        <div className='overflow-hidden w-full h-64 object-cover'>
                          <img className='w-full h-full' src={p} alt='Mockup' />
                        </div>
                      </div>
                      <div className='p-4'>
                        <h6 className='font-normal tracking-wide text-sm'>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </h6>
                        <div className='flex flex-row flex-nowrap items-end mt-5'>
                          <p className='text-xl leading-4'>49,99 zł</p>
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
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newest;
