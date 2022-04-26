import { useEffect } from "react";
import Link from "next/link";

import {
  UserIcon,
  LockClosedIcon,
  ArrowNarrowRightIcon,
  MailIcon,
} from "@heroicons/react/outline";

import { UserGroupIcon } from "@heroicons/react/solid";

export default function _m_Register() {
  useEffect(() => {
    document.body.classList.add("overflow-y-hidden");
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, []);

  return (
    <>
      <div className='flex flex-row flex-wrap '>
        <div className='w-full'>
          <div className='ml-auto w-full max-w-[930px] p-16'>
            <div className='mr-auto max-w-[600px]'>
              <h1 className='mb-8 uppercase'>Rejestracja</h1>
              <form action='#'>
                <div className='mb-8 flex flex-col flex-nowrap'>
                  <label htmlFor='' className='mb-3 text-lg'>
                    Imię*
                  </label>
                  <div className='flex flex-row flex-nowrap items-center border-2 border-black'>
                    <div className='px-5'>
                      <UserIcon className='h-4 w-5' />
                    </div>
                    <div className='flex-auto'>
                      <input
                        type='text'
                        className='w-full py-3 pr-5 outline-none'
                        placeholder='Adres e-mail'
                      />
                    </div>
                  </div>
                </div>
                <div className='mb-8 flex flex-col flex-nowrap'>
                  <label htmlFor='' className='mb-3 text-lg'>
                    Nazwisko*
                  </label>
                  <div className='flex flex-row flex-nowrap items-center border-2 border-black'>
                    <div className='px-5'>
                      <UserIcon className='h-4 w-5' />
                    </div>
                    <div className='flex-auto'>
                      <input
                        type='text'
                        className='w-full py-3 pr-5 outline-none'
                        placeholder='Adres e-mail'
                      />
                    </div>
                  </div>
                </div>
                <div className='mb-8 flex flex-col flex-nowrap'>
                  <label htmlFor='' className='mb-3 text-lg'>
                    Adres e-mail*
                  </label>
                  <div className='flex flex-row flex-nowrap items-center border-2 border-black'>
                    <div className='px-5'>
                      <MailIcon className='h-4 w-5' />
                    </div>
                    <div className='flex-auto'>
                      <input
                        type='text'
                        className='w-full py-3 pr-5 outline-none'
                        placeholder='Adres e-mail'
                      />
                    </div>
                  </div>
                </div>
                <div className='mb-8 flex flex-col flex-nowrap'>
                  <label htmlFor='' className='mb-3 text-lg'>
                    Hasło*
                  </label>
                  <div className='flex flex-row flex-nowrap items-center border-2 border-black'>
                    <div className='px-5'>
                      <LockClosedIcon className='h-4 w-5' />
                    </div>
                    <div className='flex-auto'>
                      <input
                        type='passowrd'
                        className='w-full py-3 pr-5 outline-none'
                        placeholder='Hasło'
                      />
                    </div>
                  </div>
                </div>
                <div className='mb-8 flex flex-col flex-nowrap'>
                  <label htmlFor='' className='mb-3 text-lg'>
                    Powtórz hasło*
                  </label>
                  <div className='flex flex-row flex-nowrap items-center border-2 border-black'>
                    <div className='px-5'>
                      <LockClosedIcon className='h-4 w-5' />
                    </div>
                    <div className='flex-auto'>
                      <input
                        type='passowrd'
                        className='w-full py-3 pr-5 outline-none'
                        placeholder='Hasło'
                      />
                    </div>
                  </div>
                </div>
                <button className='border-2 border-black bg-black py-3 px-6 text-sm font-bold uppercase text-white'>
                  Załóż konto
                </button>
              </form>
              <div className='mt-8'>
                <p>
                  Rejestrując się akceptujesz nasz regulamin oraz potwierdzasz
                  zapoznanie się polityką prywatności sklepu.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/**
         * 
         * <div className='h-auto w-5/12 bg-gray-100'>
          <div className='mr-auto w-full max-w-[600px] p-16'>
            <div className='mx-auto mb-10 w-full'>
              <UserGroupIcon className='h-16 w-16'></UserGroupIcon>
            </div>
            <h5 className='text-xl'>
              Masz już <span>konto ?</span>
            </h5>
            <p className='mt-1 mb-8'>Jesteś już czlonkiem shopsklep</p>

            <Link href='/login' passHref>
              <a className='w-autotext-lg block pb-2'>
                <div className='flex flex-row flex-nowrap items-center border-b border-black pb-1'>
                  <div className='uppercase'>Zaloguj się</div>
                  <div className='ml-6'>
                    <ArrowNarrowRightIcon className='h-4 w-4' />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
         * 
         */}
      </div>
    </>
  );
}
