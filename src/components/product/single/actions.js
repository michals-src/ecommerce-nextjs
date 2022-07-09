import {
    HeartIcon,
    ArrowNarrowRightIcon,
} from "@heroicons/react/outline";

import { useDispatch } from "react-redux";
import { innerModal } from "../../..//slice/modalSlice";
import _m_ProductComments from "../../..//modal-content/product-comments";

const Actions = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <div className='flex flex-row flex-wrap items-center'>
                    <div className='mt-4 w-full 2xl:mr-4 2xl:w-auto'>
                        <button className='border-2 border-black bg-black py-3 px-6 font-bold uppercase text-white'>
                            Dodaj do koszyka
                        </button>
                    </div>
                    <div className='mt-4 w-full 2xl:ml-4 2xl:w-auto'>
                        <button className='border-2 border-black py-3 px-6 font-bold uppercase'>
                            <div className='flex flex-row flex-nowrap items-center'>
                                <div className='mr-6'>
                                    <HeartIcon className='h-4 w-4' />
                                </div>
                                <div>
                                    <span>Ulubione</span>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className='my-8'>
                <button
                    onClick={() => dispatch(innerModal(<_m_ProductComments id={0} />))}
                    className='flex flex-row flex-nowrap items-center p-1 hover:underline'>
                    <div className='mr-1'>
                        <div className='font-bold'>
                            <h5>Wszytkie opinie</h5>
                        </div>
                    </div>
                    <div className='ml-1'>
                        <ArrowNarrowRightIcon className='h-4 w-4' />
                    </div>
                </button>
            </div>
        </>
    );
};

export default Actions