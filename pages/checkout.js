import Link from "next/link";
import classNames from "classnames";

import products from "../fakeData/products.json";

import {
  HeartIcon,
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  TrashIcon,
  CreditCardIcon,
  CashIcon,
} from "@heroicons/react/outline";

const steps_list = {
  // True -> current
  // False -> active
  // null -> future
  Koszyk: { url: "/cart", state: false },
  "Informacje do dostawy": { url: "/cart", state: true },
  "Wybór dostawy": { url: "/cart", state: null },
  Płatność: { url: "/cart", state: null },
  Finalizacja: { url: "/cart", state: null },
};

const Step = ({ url, num, name, isLast, isActive }) => {
  const cn_number = classNames(
    "text-sm font-bold py-1 px-2 rounded-full border ",
    {
      //Następny
      "border-gray-400 text-gray-400": isActive === null ? true : false,
      //Zaliczony
      "border-primary-300 text-primary-300":
        isActive !== null ? !isActive : false,
      //Aktywny
      "border-complement-200 bg-complement-200 text-complement-800": isActive,
    }
  );

  const cn_link = classNames("block h-full", {
    "text-complement-600": isActive,
    "text-primary-400": isActive === false,
    "hover:underline": isActive === false,
    "text-black": isActive === null,
  });

  const cn_label = classNames("flex-auto px-3", {
    "w-3/12": !isLast,
    "w-11/12": isLast,
  });

  const cn_indicator = classNames("flex-auto h-[1.5px]", {
    "bg-gray-400": isActive === null || isActive === true ? true : false,
    "bg-primary-300": isActive === false ? !isActive : false,
  });

  return (
    <li className='mr-8 flex w-auto flex-auto flex-row flex-nowrap items-center'>
      <div className='mr-3 w-1/12'>
        <span className={cn_number}>{num}</span>
      </div>
      <div className={cn_label}>
        {isActive === false && (
          <Link href={url} passHref>
            <a className={cn_link}>{name}</a>
          </Link>
        )}
        {(isActive === true || isActive === null) && (
          <span className={cn_link}>{name}</span>
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
  return (
    <>
      <form>
        <div className='space-y-8'>
          <div className='flex flex-row flex-wrap'>
            <div className='w-6/12 pr-4'>
              <div className='mb-3'>
                <label htmlFor=''>Imię</label>
              </div>
              <input
                type='text'
                className='box-border block w-full rounded-md border border-black py-3 px-5 outline-none hover:bg-gray-100 focus:border-primary focus:bg-primary-100'
                placeholder='Imię'
              />
            </div>
            <div className='p;-4 w-6/12'>
              <div className='mb-3'>
                <label htmlFor=''>Nazwisko</label>
              </div>
              <input
                type='text'
                className='block w-full rounded-md border border-black py-3 px-5 outline-none'
                placeholder='Nazwisko'
              />
            </div>
          </div>
          <div className='flex flex-row flex-wrap'>
            <div className='w-9/12 pr-4'>
              <div className='mb-3'>
                <label htmlFor=''>Ulica</label>
              </div>
              <input
                type='text'
                className='block w-full rounded-md border border-black py-3 px-5 outline-none'
                placeholder='Ulica'
              />
              <div className='mt-3 text-sm'>
                <p className='text-gray-500'>Np. Piaskowa 3</p>
              </div>
            </div>
            <div className='w-3/12 pl-4'>
              <div className='mb-3'>
                <label htmlFor=''>Numer lokalu</label>
              </div>
              <input
                type='text'
                className='block w-full rounded-md border border-black py-3 px-5 outline-none'
                placeholder='Numer'
              />
              <div className='mt-3 text-sm'>
                <p className='text-gray-500'>
                  Numer mieszkania, domu bądź lokalu
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-row flex-wrap items-start'>
            <div className='w-8/12 pr-4'>
              <div className='mb-3'>
                <label htmlFor=''>Miejscowość</label>
              </div>
              <input
                type='text'
                className='block w-full rounded-md border border-black py-3 px-5 outline-none'
                placeholder='Miejscowość'
              />
            </div>
            <div className='p;-4 w-4/12'>
              <div className='mb-3'>
                <label htmlFor=''>Kod pocztowy</label>
              </div>
              <input
                type='text'
                className='block w-full rounded-md border border-black py-3 px-5 outline-none'
                placeholder='Kod pocztowy'
              />
            </div>
          </div>
          <div className='flex flex-row flex-wrap items-center'>
            <div className='mr-4'>
              <input
                type='checkbox'
                name=''
                id='save-infomations'
                className='rounded-sm border border-black'
              />
            </div>
            <div className='flex-auto p-1'>
              <label htmlFor='save-infomations'>Zachowaj dane</label>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default function Checkout() {
  const product = products[0];

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
                  <h1 className='uppercase'>Dane do wysłki</h1>
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
                      <Link href='/checkout/delivery' passHref>
                        <a className='block border-2 border-primary-400 bg-primary-400 py-3 px-6 text-sm font-bold uppercase text-white'>
                          <div className='flex w-full flex-row flex-nowrap items-center'>
                            <div className='flex-auto'>
                              <span>Rodzaj dostawy</span>
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
