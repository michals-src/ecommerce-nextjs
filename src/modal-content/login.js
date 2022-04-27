import { useEffect } from "react";
import Link from "next/link";

import {
  UserIcon,
  LockClosedIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/outline";

import { UserGroupIcon } from "@heroicons/react/solid";

import { useDispatch } from "react-redux";
import { innerModal } from "../slice/modalSlice";

import _m_LostPsswd from "./lost_password";
import _m_Register from "./register";

export default function _m_Login() {
  const dispatch = useDispatch();

  return (
    <>
      <div className='flex w-full flex-row flex-wrap'>
        <div className='w-7/12'>
          <div className='ml-auto w-full max-w-[930px] p-16'>
            <div className='mr-auto max-w-[600px]'>
              <h1 className='mb-8 uppercase'>Logowanie</h1>
              <form action='#'>
                <div className='mb-8 flex flex-col flex-nowrap'>
                  <label htmlFor='' className='mb-3 text-lg'>
                    Adres e-mail
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
                    Hasło
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
                  Zaloguj
                </button>
              </form>
              <div className='mt-8'>
                <button
                  href='/lost_password'
                  className='font-bold text-blue-600'
                  onClick={() => dispatch(innerModal(<_m_LostPsswd />))}>
                  Nie pamietasz hasła ?
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='h-auto w-5/12 p-4'>
          <div className='mr-auto h-auto w-full rounded-lg p-12'>
            <div className='mx-auto mb-10 w-full'>
              <UserGroupIcon className='h-16 w-16'></UserGroupIcon>
            </div>
            <h5 className='text-lg'>
              Nie masz jeszcze <span>konta ?</span>
            </h5>
            <h5 className='mt-1 mb-8 text-sm'>Zarejestruj się za darmo</h5>

            <button
              className='w-autotext-lg block pb-2'
              onClick={() => dispatch(innerModal(<_m_Register />))}>
              <div className='flex flex-row flex-nowrap items-center border-b border-black pb-1'>
                <div className='uppercase'>Załóż konto</div>
                <div className='ml-6'>
                  <ArrowNarrowRightIcon className='h-4 w-4' />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
