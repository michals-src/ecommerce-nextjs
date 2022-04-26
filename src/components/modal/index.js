import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeModal } from "../../slice/modalSlice";

import { XIcon } from "@heroicons/react/outline";

export default function Modal({ children, ...props }) {
  const dispatch = useDispatch();

  return (
    <div className='fixed top-0 left-0 z-50 h-full w-full overflow-y-scroll bg-[rgb(0,0,0,.8)] p-4 lg:p-12'>
      <div className='relative mx-auto flex h-auto min-h-full max-w-[800px] flex-col overflow-hidden rounded-md bg-white'>
        <div className='flex h-auto w-full flex-row flex-nowrap items-center justify-end '>
          <div className='p-3'>
            <button onClick={() => dispatch(removeModal())}>
              <XIcon className='h-6 w-6' />
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
