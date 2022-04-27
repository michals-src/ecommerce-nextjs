import { useEffect } from "react";
import Link from "next/link";

import { MailIcon, ArrowNarrowLeftIcon, XIcon } from "@heroicons/react/outline";

import { useDispatch } from "react-redux";
import { innerModal } from "../slice/modalSlice";

import _m_Login from "./login";

export default function _m_LostPsswd() {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className='mr-auto flex h-auto flex-col justify-between'>
          <div className='flex h-auto w-full flex-row flex-nowrap items-center justify-between border-b border-gray-300'>
            <div className='p-3'>
              <button
                className='block w-auto text-sm text-gray-500'
                onClick={() => dispatch(innerModal(<_m_Login />))}>
                <div className='flex flex-row flex-nowrap items-center pb-1'>
                  <div className='mr-6'>
                    <ArrowNarrowLeftIcon className='h-4 w-4' />
                  </div>
                  <div className='uppercase'>Powrót do logowania</div>
                </div>
              </button>
            </div>
            <div className='p-3'>
              <XIcon className='h-6 w-6' />
            </div>
          </div>
          <div className='w-full p-16'>
            <h1 className='uppercase'>Zapomniane hasło</h1>
            <p className='mt-3 mb-6 text-lg'>
              Wpisz nazwę Twojego e-mail, jeżeli konto istnieje, zostanie
              wysłana wiadomość z przyponieniem hasła.
            </p>
            <form action='#'>
              <div className='mb-8 flex flex-col flex-nowrap'>
                <label htmlFor='' className='mb-3 text-lg'>
                  Adres e-mail
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
              <button className='border-2 border-black bg-black py-3 px-6 text-sm font-bold uppercase text-white'>
                Przypomnij hasło
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
