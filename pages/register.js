import { useEffect } from "react";
import Link from "next/link";
import Layout from "../src/components/layout";

import products from "../fakeData/products.json";

import {
    UserIcon,
    LockClosedIcon,
    ArrowNarrowRightIcon,
    MailIcon
} from "@heroicons/react/outline";

import {
    UserGroupIcon
} from "@heroicons/react/solid";

export default function Login() {

    useEffect(() => {
        document.body.classList.add('overflow-y-hidden');
        return () => {
            document.body.classList.remove('overflow-y-hidden');
        }
    }, [])

    return (
        <>
            <Layout>

                <div className="bg-[rgb(0,0,0,.8)] fixed left-0 top-0 z-50 overflow-y-scroll w-full h-full p-4 lg:p-12">
                    <div className="max-w-[800px] bg-white min-h-full h-auto relative mx-auto rounded-md overflow-hidden">
                        <div className="flex flex-row flex-wrap ">
                            <div className="w-7/12">
                                <div className="w-full max-w-[930px] ml-auto p-16">
                                    <div className="max-w-[600px] mr-auto">
                                        <h1 className="uppercase mb-8">Rejestracja</h1>
                                        <form action="#">
                                            <div className="mb-8 flex flex-col flex-nowrap">
                                                <label htmlFor="" className="text-lg mb-3">Imię*</label>
                                                <div className="flex flex-row flex-nowrap items-center border-2 border-black">
                                                    <div className="px-5"><UserIcon className="w-5 h-4" /></div>
                                                    <div className="flex-auto"><input type="text" className="w-full py-3 pr-5 outline-none" placeholder="Adres e-mail" /></div>
                                                </div>
                                            </div>
                                            <div className="mb-8 flex flex-col flex-nowrap">
                                                <label htmlFor="" className="text-lg mb-3">Nazwisko*</label>
                                                <div className="flex flex-row flex-nowrap items-center border-2 border-black">
                                                    <div className="px-5"><UserIcon className="w-5 h-4" /></div>
                                                    <div className="flex-auto"><input type="text" className="w-full py-3 pr-5 outline-none" placeholder="Adres e-mail" /></div>
                                                </div>
                                            </div>
                                            <div className="mb-8 flex flex-col flex-nowrap">
                                                <label htmlFor="" className="text-lg mb-3">Adres e-mail*</label>
                                                <div className="flex flex-row flex-nowrap items-center border-2 border-black">
                                                    <div className="px-5"><MailIcon className="w-5 h-4" /></div>
                                                    <div className="flex-auto"><input type="text" className="w-full py-3 pr-5 outline-none" placeholder="Adres e-mail" /></div>
                                                </div>
                                            </div>
                                            <div className="mb-8 flex flex-col flex-nowrap">
                                                <label htmlFor="" className="text-lg mb-3">Hasło*</label>
                                                <div className="flex flex-row flex-nowrap items-center border-2 border-black">
                                                    <div className="px-5"><LockClosedIcon className="w-5 h-4" /></div>
                                                    <div className="flex-auto"><input type="passowrd" className="w-full py-3 pr-5 outline-none" placeholder="Hasło" /></div>
                                                </div>
                                            </div>
                                            <div className="mb-8 flex flex-col flex-nowrap">
                                                <label htmlFor="" className="text-lg mb-3">Powtórz hasło*</label>
                                                <div className="flex flex-row flex-nowrap items-center border-2 border-black">
                                                    <div className="px-5"><LockClosedIcon className="w-5 h-4" /></div>
                                                    <div className="flex-auto"><input type="passowrd" className="w-full py-3 pr-5 outline-none" placeholder="Hasło" /></div>
                                                </div>
                                            </div>
                                            <button className='text-sm py-3 px-6 uppercase font-bold border-2 border-black bg-black text-white'>
                                                Załóż konto
                                            </button>
                                        </form>
                                        <div className="mt-8">
                                            <p>Rejestrując się akceptujesz nasz regulamin oraz potwierdzasz zapoznanie się polityką prywatności sklepu.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-5/12 bg-gray-100 h-auto">
                                <div className="w-full max-w-[600px] mr-auto p-16">
                                    <div className="w-full mb-10 mx-auto">
                                        <UserGroupIcon className="w-16 h-16"></UserGroupIcon>
                                    </div>
                                    <h5 className="text-xl">Masz już <span>konto ?</span></h5>
                                    <p className="mt-1 mb-8">Jesteś już czlonkiem shopsklep</p>


                                    <Link href="/login" passHref>
                                        <a className='block w-autotext-lg pb-2'>
                                            <div className='flex flex-row flex-nowrap items-center pb-1 border-b border-black'>
                                                <div className="uppercase">Zaloguj się</div>
                                                <div className='ml-6'>
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

            </Layout>
        </>
    );
}
