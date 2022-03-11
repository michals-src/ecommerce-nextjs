import Link from "next/link";

const Hero = () => {
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

export default Hero;
