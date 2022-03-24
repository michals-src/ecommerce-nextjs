import Link from "next/link";
import { Facebook } from "react-bootstrap-icons";

const siteMap = [
  "Liście",
  "Urządzenia",
  "Akcesoria",
  "Czyta",
  "Dostawa i zwrot",
  "Kontakt",
];

export default function Footer() {
  return (
    <>
      <div className='container mx-auto px-16'>
        <div className='flex flex-row flex-wrap'>
          <div className='w-4/12'>
            <h1 className='uppercase'>
              <h3>SKLEPSHOP KLUB</h3>
            </h1>
            <div className='mt-5 mb-2'>
              <h4 className='uppercase'>
                zapisz się do newslettera <br />i otrzymaj rabat <br />
                na pierwsze zakupy
              </h4>
            </div>
            <form></form>
          </div>
          <div className='w-8/12'>
            <div className='flex flex-row flex-wrap'>
              <div className='w-1/3 pl-20'>
                <div className='flex flex-col flex-nowrap'>
                  <div className='mb-5'>
                    <p className='font-normal text-gray-400'>Strona</p>
                  </div>
                  <ul className='list-none p-0 m-0'>
                    {siteMap.map((itm, k) => {
                      return (
                        <>
                          <li className='mb-1 uppercase'>
                            <Link href='/' passHref>
                              <a className='py-1 block w-full text-lg'>{itm}</a>
                            </Link>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className='w-1/3 pl-20'>
                <div className='flex flex-col flex-nowrap'>
                  <div className='mb-5'>
                    <p className='font-normal text-gray-400'>Społeczność</p>
                  </div>
                  <ul className='list-none p-0 m-0'>
                    <li className='mb-1 uppercase'>
                      <Link href='/' passHref>
                        <a className='py-1 w-full text-lg flex flex-row flex-nowrap items-center'>
                          <div>
                            <Facebook className='w-5 h-5' />
                          </div>
                          <p className='ml-4'>Facebook</p>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='w-1/3 pl-20 flex-none'>
                <div className='flex flex-col flex-nowrap'>
                  <div className='mb-5'>
                    <p className='font-normal text-gray-400'>
                      Skontakuj się z Nami
                    </p>
                  </div>
                  <div className='mb-1'>
                    <h5>nazwa@sklepsho.pl</h5>
                  </div>

                  <div className='mb-1'>
                    <h5>(+48) 800 493 391</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='my-12'>
          <p className='uppercase text-sm'>&copy; 2022 sklepshop</p>
        </div>
      </div>
    </>
  );
}
