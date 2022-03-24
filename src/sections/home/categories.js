import Link from "next/link";

function Categories() {
  return (
    <>
      <div>
        <h2 className='my-28 mx-auto text-center text-4xl font-medium'>
          Zobacz więcej produktów.
        </h2>
        <div className='container mx-auto'>
          <div className='bg-slate-50 p-10'>
            <div className='flex flex-row flex-wrap'>
              <div className='w-6/12'>
                <div className='flex flex-row flex-wrap'>
                  <div className='w-6/12 pr-1'>
                    <div className='bg-slate-200 w-full h-full'>
                      <div className='p-16'>
                        <h6 className='text-lg font-medium'>Liście i olejki</h6>
                      </div>
                    </div>
                  </div>
                  <div className='w-6/12 pl-1'>
                    <div className='flex flex-col flex-nowrap'>
                      <div className='w-full bg-slate-200 p-16 mb-1'>
                        <h6 className='text-lg font-medium'>Urządzenia</h6>
                      </div>
                      <div className='w-full bg-slate-200 p-16 mt-1'>
                        <h6 className='text-lg font-medium'>Akcesoria</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-6/12'></div>
            </div>
          </div>
        </div>
        <div className='container mx-auto px-6 lg:px-2'>
          <div className='flex flex-row flex-wrap flex-1 border-box mx-[-6px]'>
            <div className='h-[600px] w-4/12 relative text-center px-6'>
              <Link href='#' passHref>
                <a className='absolute w-full h-full top-0 left-0'></a>
              </Link>
              <div className='bg-green-100 flex flex-col relative z-10'>
                <div className='p-12'>
                  <div className='my-10'>
                    <h6 className='font-bold text-4xl tracking-wide'>
                      Olejki i liście
                    </h6>
                    <div className='mt-3'>
                      <p>Wypełnij miejsce w sprzecie</p>
                    </div>
                  </div>
                  <div className='mb-10'>
                    <Link href='#' passHref>
                      <a className='bg-gray-700 text-white px-5 py-2 font-medium text-sm hover:bg-gray-900'>
                        Odkryj więcej
                      </a>
                    </Link>
                  </div>
                </div>
                <div>
                  {/* <img src="https://images.unsplash.com/flagged/photo-1564833125683-b9fde4516274?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80" /> */}
                </div>
              </div>
            </div>
            <div className='h-[600px] w-4/12 relative flex flex-col justify-start text-center px-6'>
              <div className='w-full h-full overflow-hidden'>
                <div className='w-full h-full overflow-hidden absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
                  <img src='https://images.unsplash.com/photo-1571380401583-72ca84994796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80' />
                </div>
              </div>
              <div className='flex flex-col p-6 relative z-10'>
                <div className='my-10'>
                  <h6 className='font-bold text-5xl text-white tracking-wide'>
                    Urządzenia
                  </h6>
                </div>
                <div className='mb-10'>
                  <Link href='#' passHref>
                    <a className='bg-gray-600 border-2 border-gray-600 text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-gray-700 hover:border-gray-700'>
                      Odkryj więcej
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='h-[600px] w-4/12 relative flex flex-col justify-start text-center px-6'>
              <div className='w-full h-full overflow-hidden'>
                <div className='w-full h-full overflow-hidden absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
                  <img src='https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' />
                </div>
              </div>
              <div className='flex flex-col p-6 relative z-10'>
                <div className='my-10'>
                  <h6 className='font-bold text-5xl text-white tracking-wide'>
                    Akcesoria
                  </h6>
                </div>
                <div className='mb-10'>
                  <Link href='#' passHref>
                    <a className='bg-gray-600 border-2 border-gray-600 text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-gray-700 hover:border-gray-700'>
                      Odkryj więcej
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
