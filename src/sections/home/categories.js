import Link from "next/link";

function Categories() {
  return (
    <>
      <div>
        <div className='container mx-auto px-6 lg:px-2'>
          <div className='flex flex-row flex-wrap flex-1'>
            <div className='h-96 w-1/3 relative flex flex-col justify-end'>
              <div className='w-full h-full overflow-hidden'>
                <div className='w-full h-full overflow-hidden absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
                  <img src='https://images.unsplash.com/photo-1564023162242-91b863c6dcd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' />
                </div>
              </div>
              <div className='flex flex-col p-6 relative z-10'>
                <div className='my-10'>
                  <h6 className='font-bold text-5xl text-white tracking-wide'>
                    Olejki i liście
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
            <div className='h-96 w-1/3 relative flex flex-col justify-end'>
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
            <div className='h-96 w-1/3 relative flex flex-col justify-end'>
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
