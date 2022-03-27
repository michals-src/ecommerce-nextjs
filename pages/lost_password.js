import { useEffect } from "react";
import Link from "next/link";
import Layout from "../src/components/layout";

import products from "../fakeData/products.json";

import {
    MailIcon,
    ArrowNarrowLeftIcon,
    XIcon
} from "@heroicons/react/outline";

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
                <main id='main' className='mb-16 w-full h-screen'>
                    <div className="bg-[rgb(0,0,0,.8)] top-0 absolute z-50 overflow-y-scroll w-full h-full p-4 lg:p-12">
                        <div className="max-w-[800px] bg-white min-h-full h-auto relative mx-auto rounded-md overflow-hidden">
                            <div>


                                <div className="mr-auto h-auto flex flex-col justify-between">
                                    <div className="w-full h-auto flex flex-row flex-nowrap items-center justify-between border-b border-gray-300">
                                        <div className="p-3">
                                            <Link href="/login" passHref>
                                                <a className='block w-auto text-sm text-gray-500'>
                                                    <div className='flex flex-row flex-nowrap items-center pb-1'>
                                                        <div className='mr-6'>
                                                            <ArrowNarrowLeftIcon className='w-4 h-4' />
                                                        </div>
                                                        <div className="uppercase">Powrót do logowania</div>

                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="p-3"><XIcon className="w-6 h-6" /></div>
                                    </div>
                                    <div className="w-full p-16">
                                        <h1 className="uppercase">Zapomniane hasło</h1>
                                        <p className="mt-3 mb-6 text-lg">Wpisz nazwę Twojego e-mail, jeżeli konto istnieje, zostanie wysłana wiadomość z przyponieniem hasła.</p>
                                        <form action="#">
                                            <div className="mb-8 flex flex-col flex-nowrap">
                                                <label htmlFor="" className="text-lg mb-3">Adres e-mail</label>
                                                <div className="flex flex-row flex-nowrap items-center border-2 border-black">
                                                    <div className="px-5"><MailIcon className="w-5 h-4" /></div>
                                                    <div className="flex-auto"><input type="text" className="w-full py-3 pr-5 outline-none" placeholder="Adres e-mail" /></div>
                                                </div>
                                            </div>
                                            <button className='text-sm py-3 px-6 uppercase font-bold border-2 border-black bg-black text-white'>
                                                Przypomnij hasło
                                            </button>
                                        </form>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}
