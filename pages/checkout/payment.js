import { useState } from "react";
import Link from "next/link";
import classNames from "classnames";

import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/outline";

import { Thumbnail } from "../../src/components/form";

const steps_list = {
  // True -> current
  // False -> active
  // null -> future
  Koszyk: { url: "/cart", state: false },
  "Informacje do dostawy": { url: "/cart", state: false },
  "Wybór dostawy": { url: "/checkout/delivery", state: false },
  Płatność: { url: "/checkout/payment", state: true },
  Finalizacja: { url: "/cart", state: null },
};

const Step = ({ url, num, name, isLast, isActive }) => {
  const cn_number = classNames(
    "text-sm font-bold py-1 px-2 rounded-full border ",
    {
      "border-gray-400 text-gray-400": isActive === null ? true : false,
      "border-black text-black": isActive !== null ? !isActive : false,
      "border-black bg-black text-white": isActive,
    }
  );

  const cn_label = classNames("flex-auto px-3", {
    "w-3/12": !isLast,
    "w-11/12": isLast,
  });

  const cn_indicator = classNames("flex-auto bg-black h-[1.5px]", {
    "bg-gray-400": isActive === null || isActive === true ? true : false,
    "bg-black": isActive === false ? !isActive : false,
  });

  return (
    <li className='mr-8 flex w-auto flex-auto flex-row flex-nowrap items-center'>
      <div className='mr-3 w-1/12'>
        <span className={cn_number}>{num}</span>
      </div>
      <div className={cn_label}>
        {isActive === false && (
          <Link href={url} passHref>
            <a className='block h-full hover:underline'>{name}</a>
          </Link>
        )}
        {(isActive === true || isActive === null) && (
          <span className='block h-full'>{name}</span>
        )}
      </div>
      {!isLast && <div className={cn_indicator}></div>}
    </li>
  );
};

const Steps = () => {
  return (
    <>
      <ul className='flex-row-flex-nowrap m-0 flex w-full list-none p-0'>
        {Object.keys(steps_list).map((process, key) => {
          let state = steps_list[process].state;
          let url = steps_list[process].url;
          let isLast =
            key === Object.keys(steps_list).length - 1 ? true : false;
          return (
            <Step
              url={url}
              key={key}
              num={key + 1}
              name={process}
              isActive={state}
              isLast={isLast}
            />
          );
        })}
      </ul>
    </>
  );
};

const Form = () => {
  const [selectedIndex, _selectedIndex] = useState(0);

  return (
    <>
      <div className='flex flex-col space-y-4'>
        <Thumbnail
          key={0}
          onClick={() => _selectedIndex(0)}
          selected={selectedIndex === 0 ? true : false}>
          <div className='flex-auto'>
            <div className='mb-1'>
              <h5>Przelewy24 (Szybki przelew online / BLIK)</h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              iure, praesentium veritatis a, animi porro debitis in quae
              assumenda voluptate suscipit sit ipsa vitae quos earum recusandae
              reprehenderit voluptas ut.
            </p>
          </div>
          <div className='w-4/12 flex-auto text-right'>
            <p>za darmo</p>
          </div>
        </Thumbnail>

        <Thumbnail
          key={0}
          onClick={() => _selectedIndex(1)}
          selected={selectedIndex === 1 ? true : false}>
          <div className='flex-auto'>
            <div className='mb-1'>
              <h5>Paypal</h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              iure, praesentium veritatis.
            </p>
          </div>
          <div className='w-4/12 flex-auto text-right'>
            <p>za darmo</p>
          </div>
        </Thumbnail>

        <Thumbnail
          key={0}
          onClick={() => _selectedIndex(2)}
          selected={selectedIndex === 2 ? true : false}>
          <div className='flex-auto'>
            <div className='mb-1'>
              <h5>Płatność przy odbiorze</h5>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className='w-4/12 flex-auto text-right'>
            <p>za darmo</p>
          </div>
        </Thumbnail>
      </div>
    </>
  );
};

export default function Payment() {
  return (
    <>
      <>
        <div>
          <div className='container mx-auto px-16 text-center'>
            <div className='mt-8'>
              <h4 className='font-bold'>Sklepshop</h4>
            </div>
          </div>
        </div>
        <main id='main' className='my-16'>
          <div className='my-20'>
            <div className='container mx-auto px-16'>
              <Steps />
            </div>
          </div>
          <div className='container mx-auto px-16'>
            <div className='flex flex-row flex-wrap '>
              <div className='h-auto w-7/12 pr-16'>
                <div className='mb-8 pb-12'>
                  <h1 className='uppercase'>Wybór metody płatności</h1>
                </div>
                <div>
                  {/* Cart product */}
                  <Form />
                  {/* Cart product */}
                </div>
              </div>
              <div className='h-auto w-5/12 p-16'>
                <div>
                  <div>
                    <div className='mb-4'>
                      <h4 className='uppercase'>następny kork</h4>
                    </div>
                    <div className='mt-8 mb-16'>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quasi vero vitae eveniet rerum ipsum magni odit
                        culpa illum facere, explicabo amet temporibus soluta
                        neque repellendus distinctio enim quis debitis commodi.
                      </p>
                    </div>
                    <div className='mt-4'>
                      <Link href='/checkout/summary' passHref>
                        <a className='block border-2 border-black bg-black py-3 px-6 text-sm font-bold uppercase text-white'>
                          <div className='flex w-full flex-row flex-nowrap items-center'>
                            <div className='flex-auto'>
                              <span>Przejdź do podsumowania</span>
                            </div>
                            <div className='ml-6'>
                              <ArrowNarrowRightIcon className='h-6 w-6' />
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className='mt-32 h-auto w-full bg-gray-100 pb-10'>
          <div className='bnrder-gray-200 border-y bg-gray-100 py-4'>
            <div className='container mx-auto px-16'>
              <Link href='/' passHref>
                <a className='block uppercase hover:underline'>
                  <div className='flex w-full flex-row flex-nowrap items-center'>
                    <div className='mr-6'>
                      <ArrowNarrowLeftIcon className='h-4 w-4' />
                    </div>
                    <div className='flex-auto'>
                      <span>Powrót do sklepu</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className='container mx-auto px-16'>
            <div className='flex flex-row flex-wrap space-x-8 pt-10'>
              <Link href='#' passHref>
                <a className='hover:underline'>Regulamin</a>
              </Link>
              <Link href='#' passHref>
                <a className='hover:underline'>Polityka prywatności</a>
              </Link>
              <Link href='#' passHref>
                <a className='hover:underline'>Regulamin</a>
              </Link>
            </div>
            <div className='my-10 uppercase'>
              <p className='text-sm'>&copy; 2022 Sklepshop</p>
            </div>
          </div>
        </footer>
      </>
    </>
  );
}
