import Link from "next/link";
import classNames from "classnames";

import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/outline";

const steps_list = {
  // True -> current
  // False -> active
  // null -> future
  Koszyk: { url: "/cart", state: false },
  "Informacje do dostawy": { url: "/cart", state: false },
  "Wybór dostawy": { url: "/cart", state: true },
  Płatność: { url: "/cart", state: null },
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
    <li className='flex flex-row items-center flex-nowrap w-auto flex-auto mr-8'>
      <div className='w-1/12 mr-3'>
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
      <ul className='w-full list-none flex flex-row-flex-nowrap p-0 m-0'>
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
      <div className='flex flex-col space-y-6'>
        <div className='w-full p-8 border border-black hover:border-gray-800 cursor-pointer'>
          <div className='flex flex-row flex-nowrap'>
            <div className='h-auto flex items-center p-3 mr-8'>
              <div className='w-4 h-4 border-4 border-black rounded-full'></div>
            </div>
            <div className='flex-auto'>
              <div className='mb-1'>
                <h5>Dostawa standardowa</h5>
              </div>
              <p>DPD (Dostawa standardowa- NDP)</p>
            </div>
            <div>
              <p>8.99 zł</p>
            </div>
          </div>
        </div>
        <div className='w-full p-8 border border-gray-300 hover:border-gray-800 cursor-pointer'>
          <div className='flex flex-row flex-nowrap'>
            <div className='h-auto flex items-center p-3 mr-8'>
              <div className='w-4 h-4 border border-black rounded-full'></div>
            </div>
            <div className='flex-auto'>
              <div className='mb-1'>
                <h5>Dostawa standardowa</h5>
              </div>
              <p>DPD (Dostawa standardowa- NDP)</p>
            </div>
            <div>
              <p>8.99 zł</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Delivery() {
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
              <div className='w-7/12 pr-16 h-auto'>
                <div className='mb-8 pb-12'>
                  <h1 className='uppercase'>Wybór dostawy</h1>
                </div>
                <div>
                  {/* Cart product */}
                  <Form />
                  {/* Cart product */}
                </div>
              </div>
              <div className='w-5/12 p-16 h-auto'>
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
                      <Link href='/checkout/payment' passHref>
                        <a className='block text-sm py-3 px-6 uppercase font-bold border-2 border-black bg-black text-white'>
                          <div className='flex w-full flex-row flex-nowrap items-center'>
                            <div className='flex-auto'>
                              <span>Rodzaj płatności</span>
                            </div>
                            <div className='ml-6'>
                              <ArrowNarrowRightIcon className='w-6 h-6' />
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
        <footer className='mt-32 pb-10 w-full h-auto bg-gray-100'>
          <div className='border-y bnrder-gray-200 bg-gray-100 py-4'>
            <div className='container mx-auto px-16'>
              <Link href='/' passHref>
                <a className='block uppercase hover:underline'>
                  <div className='flex w-full flex-row flex-nowrap items-center'>
                    <div className='mr-6'>
                      <ArrowNarrowLeftIcon className='w-4 h-4' />
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
            <div className='pt-10 flex flex-row flex-wrap space-x-8'>
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
