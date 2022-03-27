import { useEffect } from "react";
import Link from "next/link";
import Layout from "../src/components/layout";

import products from "../fakeData/products.json";

import {
    UserIcon,
    LockClosedIcon,
    ArrowNarrowRightIcon,
    XIcon
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
                <main id='main' className='mb-16 w-full h-screen'>
                    <div className="bg-[rgb(0,0,0,.8)] fixed top-0 left-0 z-50 overflow-y-scroll w-full h-full p-4 lg:p-12">
                        <div className="max-w-[800px] flex flex-col bg-white min-h-full h-auto relative mx-auto rounded-md overflow-hidden">
                            <div className="w-full h-auto flex flex-row flex-nowrap items-center justify-end border-b border-gray-300">
                                <div className="p-3"><XIcon className="w-6 h-6" /></div>
                            </div>
                            <div className="w-full flex flex-row flex-wrap">
                                <div className="w-7/12">
                                    <div className="w-full max-w-[930px] ml-auto p-16">
                                        <div className="max-w-[600px] mr-auto">
                                            <h1 className="uppercase mb-8">Logowanie</h1>
                                            <form action="#">
                                                <div className="mb-8 flex flex-col flex-nowrap">
                                                    <label htmlFor="" className="text-lg mb-3">Adres e-mail</label>
                                                    <div className="flex flex-row flex-nowrap items-center border-2 border-black">
                                                        <div className="px-5"><UserIcon className="w-5 h-4" /></div>
                                                        <div className="flex-auto"><input type="text" className="w-full py-3 pr-5 outline-none" placeholder="Adres e-mail" /></div>
                                                    </div>
                                                </div>
                                                <div className="mb-8 flex flex-col flex-nowrap">
                                                    <label htmlFor="" className="text-lg mb-3">Hasło</label>
                                                    <div className="flex flex-row flex-nowrap items-center border-2 border-black">
                                                        <div className="px-5"><LockClosedIcon className="w-5 h-4" /></div>
                                                        <div className="flex-auto"><input type="passowrd" className="w-full py-3 pr-5 outline-none" placeholder="Hasło" /></div>
                                                    </div>
                                                </div>
                                                <button className='text-sm py-3 px-6 uppercase font-bold border-2 border-black bg-black text-white'>
                                                    Zaloguj
                                                </button>
                                            </form>
                                            <div className="mt-8">
                                                <Link href="/lost_password" passHref>
                                                    <a className="text-blue-600 font-bold">Nie pamietasz hasła ?</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga alias non quis perferendis minima consequatur, magni id reprehenderit accusantium dolorem itaque labore unde debitis dolorum obcaecati sed natus ea laudantium?
                                        Itaque repudiandae alias nemo est libero dolore velit iusto perferendis accusamus in totam deleniti enim modi inventore amet provident, doloribus distinctio voluptatibus impedit aspernatur maiores corrupti porro sunt. Vitae, quidem.
                                        Voluptate ipsum, excepturi non animi rem expedita reprehenderit, aliquam perferendis totam nemo saepe? Repudiandae cupiditate odio minima. Asperiores minus tempore dolore. Esse sapiente sed tempore unde enim perferendis blanditiis adipisci!
                                        Quas magnam iste cupiditate autem aperiam expedita quibusdam saepe ex, animi quam, molestias perspiciatis eos at dignissimos soluta et, porro sunt. Ipsum nesciunt repellat explicabo! Nisi corporis ea quos similique.
                                        Molestiae nam, nulla quam nisi illum natus ipsam voluptates praesentium ullam est minima corporis totam quae veritatis, exercitationem officia ut! Consequuntur nemo placeat necessitatibus soluta quae! Consequatur incidunt repudiandae doloremque.
                                        Officia, nisi eligendi minima dolore quod debitis mollitia cum dignissimos reprehenderit officiis, minus in impedit? Eos aliquid ipsum veritatis at dignissimos natus vel unde ut, tenetur nihil, ea, pariatur aspernatur!
                                        Deleniti tempora ipsam ipsum repellat voluptates nostrum, voluptatum porro qui doloremque, quam fuga? Consequuntur vitae enim magnam assumenda possimus nemo dignissimos facilis ratione, esse qui. Quasi doloremque repudiandae velit adipisci?
                                        Ratione aperiam illo tempora sapiente, omnis, nihil quas dolorem aliquid sit repellendus harum culpa tempore eius! Eum esse tenetur rerum velit et odio ducimus deleniti doloribus eveniet, saepe possimus provident.
                                        Voluptate ex inventore quasi possimus voluptatem corrupti officiis illum laboriosam repellat quia, quod sequi reiciendis magnam minima repudiandae, praesentium doloribus accusantium excepturi vitae quo. Similique amet asperiores quo in officiis!
                                        Praesentium, cumque molestias? Vel veniam enim accusamus praesentium, tempore culpa neque porro! Reiciendis esse optio ab quaerat ut, sequi quibusdam ea et cumque, veniam, sunt quod reprehenderit pariatur porro. Rerum?</p>
                                </div>
                                <div className="w-5/12 bg-gray-100 h-auto">
                                    <div className="w-full max-w-[600px] mr-auto p-16">
                                        <div className="w-full mb-10 mx-auto">
                                            <UserGroupIcon className="w-16 h-16"></UserGroupIcon>
                                        </div>
                                        <h5 className="text-lg">Nie masz jeszcze <span>konta ?</span></h5>
                                        <h5 className="text-sm mt-1 mb-8">Zarejestruj się za darmo</h5>


                                        <Link href="/register" passHref>
                                            <a className='block w-autotext-lg pb-2'>
                                                <div className='flex flex-row flex-nowrap items-center pb-1 border-b border-black'>
                                                    <div className="uppercase">Załóż konto</div>
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
                </main>
            </Layout>
        </>
    );
}
