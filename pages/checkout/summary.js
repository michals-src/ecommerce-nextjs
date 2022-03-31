import Link from "next/link";
import classNames from "classnames";

import products from "../../fakeData/products.json";

import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  PencilIcon,
  XIcon,
} from "@heroicons/react/outline";

const steps_list = {
  // True -> current
  // False -> active
  // null -> future
  Koszyk: { url: "/cart", state: false },
  "Informacje do dostawy": { url: "/cart", state: false },
  "Wybór dostawy": { url: "/checkout/delivery", state: false },
  Płatność: { url: "/checkout/payment", state: false },
  Finalizacja: { url: "/cart", state: true },
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

const Summary_cards = () => {
  let product = products[0];

  return (
    <>
      <div className='mb-10'>
        <div className='mb-6'>
          <div className='flex flex-row flex-nowrap'>
            <div className='w-10/12'>
              <h4>Dane do dostawy</h4>
            </div>
            <div className='w-2/12 flex justify-end'>
              <Link href='/' passHref>
                <a className='block uppercase hover:underline'>
                  <div className='flex w-full flex-row flex-nowrap items-center'>
                    <div className='mr-3'>
                      <PencilIcon className='w-4 h-4' />
                    </div>
                    <div className='flex-auto text-sm'>
                      <span>Zmień</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className='border border-gray-300 rounded-md p-6 space-y-4'>
          <div className='flex flex-row flex-wrap pb-3 border-b border-gray-300'>
            <div className='w-8/12 pr-4'>
              <p className='mb-1 text-gray-400 text-sm'>Imię i nazwisko</p>
              <p>Jan Kowalski</p>
            </div>
          </div>
          <div className='flex flex-row flex-wrap  pb-3 border-b border-gray-300'>
            <div className='w-8/12 pr-4'>
              <p className='mb-1 text-gray-400 text-sm'>Ulica</p>
              <p>Piaskowa 3</p>
            </div>
            <div className='w-4/12 pl-4'>
              <p className='mb-1 text-gray-400 text-sm'>Numer lok./m./dom</p>
              <p>7</p>
            </div>
          </div>
          <div className='flex flex-row flex-wrap items-start'>
            <div className='w-full'>
              <p className='mb-1 text-sm text-gray-400'>
                Miejscowość, kod pocztowy, kraj
              </p>
              <p>Warszawa, 00-000, Polska</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-10'>
        <div className='mb-6'>
          <div className='flex flex-row flex-nowrap'>
            <div className='w-10/12'>
              <h4>Szczegóły rachunku</h4>
            </div>
            <div className='w-2/12 flex justify-end'>
              <Link href='/' passHref>
                <a className='block uppercase hover:underline'>
                  <div className='flex w-full flex-row flex-nowrap items-center'>
                    <div className='mr-3'>
                      <PencilIcon className='w-4 h-4' />
                    </div>
                    <div className='flex-auto text-sm'>
                      <span>Zmień</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className='border border-gray-300 rounded-md p-6 space-y-4'>
          <p>Taki jak adres dostawy</p>
        </div>
      </div>
      <div className='mb-10'>
        <div className='mb-6'>
          <div className='flex flex-row flex-nowrap'>
            <div className='w-full'>
              <h4>Produkty (1)</h4>
            </div>
          </div>
        </div>
        <div>
          <div className='border-b border-grey-600 p-5'>
            <div className='flex flex-row flex-nowrap'>
              <div className='w-1/12 h-auto'>
                <img
                  className='w-full'
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className='w-11/12 pl-10'>
                <div className='flex flex-row flex-nowrap'>
                  <div className='w-10/12 pr-1'>
                    <p>{product.title}</p>
                    <div className='flex flex-row items-center mt-1'>
                      <p className='text-sm mr-2'>Ilość</p>
                      <p>1</p>
                    </div>
                    <div className='flex flex-row items-center'>
                      <p className='text-sm mr-2'>Waga</p>
                      <p>1g</p>
                    </div>
                    <div className='mt-4'>
                      <p>{product.price} zł</p>
                    </div>
                  </div>
                  <div className='w-2/12 pl-1 flex flex-row items-start justify-end'>
                    <button className='flex flex-row flex-nowrap items-center text-gray-600 hover:underline text-sm'>
                      <div className='mr-2'>
                        <XIcon className='w-5 h-5' />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Summary_cards_right = () => {
  return (
    <>
      <div className='mb-10'>
        <div className='mb-6'>
          <div className='flex flex-row flex-nowrap'>
            <div className='w-10/12'>
              <h4>Dostawa</h4>
            </div>
            <div className='w-2/12 flex justify-end'>
              <Link href='/' passHref>
                <a className='block uppercase hover:underline'>
                  <div className='flex w-full flex-row flex-nowrap items-center'>
                    <div className='mr-3'>
                      <PencilIcon className='w-4 h-4' />
                    </div>
                    <div className='flex-auto text-sm'>
                      <span>Zmień</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className='border border-gray-300 rounded-md p-6 space-y-4'>
          <div className='flex flex-row flex-nowrap'>
            <div className='flex-auto'>
              <div className='mb-1'>
                <p>Dostawa standardowa</p>
              </div>
              <p className='text-sm'>DPD (Dostawa standardowa- NDP)</p>
              <div className='mt-4'>
                <p>Pn, 04.04. - Cz, 07.04.</p>
              </div>
            </div>
            <div>
              <p>8.99 zł</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-10'>
        <div className='mb-6'>
          <div className='flex flex-row flex-nowrap'>
            <div className='w-10/12'>
              <h4>Płatność</h4>
            </div>
            <div className='w-2/12 flex justify-end'>
              <Link href='/' passHref>
                <a className='block uppercase hover:underline'>
                  <div className='flex w-full flex-row flex-nowrap items-center'>
                    <div className='mr-3'>
                      <PencilIcon className='w-4 h-4' />
                    </div>
                    <div className='flex-auto text-sm'>
                      <span>Zmień</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className='border border-gray-300 rounded-md p-6 space-y-4'>
          <div className='flex flex-row flex-nowrap'>
            <div className='flex-auto'>
              <div className='mb-1'>
                <p>Przelewy24 (Szybki przelew online / BLIK)</p>
              </div>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                iure, praesentium veritatis a, animi porro debitis in quae
                assumenda voluptate suscipit sit ipsa vitae quos earum
                recusandae reprehenderit voluptas ut.
              </p>
            </div>
            <div className='flex-auto w-4/12 text-right'>
              <p>za darmo</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-10'>
        <div className='mb-3'>
          <div className='flex flex-row flex-nowrap'>
            <div className='w-full'>
              <h4>
                Kod rabatowy <span className='text-gray-500'>(opcjonalne)</span>
              </h4>
            </div>
          </div>
        </div>
        <div>
          <input
            type='text'
            className='border border-gray-400 rounded-md outline-none py-3 px-5 w-full block'
            placeholder='Wpisz kod rabatowy'
          />
        </div>
      </div>
    </>
  );
};

export default function Summary() {
  let product = products[0];

  return (
    <>
      <>
        <div className='bg-gray-100'>
          <div className='container mx-auto px-16 text-center'>
            <div className='py-3'>
              <h4 className='font-bold'>Sklepshop</h4>
            </div>
          </div>
        </div>
        <main id='main' className='mb-16'>
          <div className='mt-10 mb-20 py-6'>
            <div className='container mx-auto px-16'>
              <Steps />
            </div>
          </div>
          <div className='container mx-auto px-16'>
            <div className='mb-8 pb-12'>
              <h1 className='uppercase'>Sprawdź i złóż zamówienie</h1>
            </div>
            <div className='flex flex-row flex-wrap '>
              <div className='w-6/12 pr-16 h-auto'>
                <div>
                  {/* Cart product */}
                  <Summary_cards />
                  {/* Cart product */}
                </div>
              </div>
              <div className='w-6/12 pl-16 h-auto'>
                <Summary_cards_right />
                <div className='p-8 h-auto bg-gray-100'>
                  <div className='space-y-4'>
                    <div className='flex flex-row flex-nowrap space-between'>
                      <div className='flex-auto'>
                        <p>Suma produktów</p>
                      </div>
                      <div>
                        <p>{product.price} zł</p>
                      </div>
                    </div>
                    <div className='flex flex-row flex-nowrap space-between'>
                      <div className='flex-auto'>
                        <p>Dostawa</p>
                      </div>
                      <div>
                        <p>8,99 zł</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-row flex-nowrap space-between mt-4'>
                    <div className='flex-auto'>
                      <p className='text-lg'>Łącznie (w tym VAT)</p>
                    </div>
                    <div>
                      <p className='text-lg'>300,00 zł</p>
                    </div>
                  </div>
                  <div className='mt-8'>
                    <Link href='/checkout' passHref>
                      <a className='block w-full text-sm py-3 px-6 uppercase font-bold border-2 border-black bg-black text-white'>
                        <div className='flex w-full flex-row flex-nowrap items-center'>
                          <div className='flex-auto'>
                            <span>Zamawiam i płacę</span>
                          </div>
                          <div className='ml-6'>
                            <ArrowNarrowRightIcon className='w-6 h-6' />
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className='mt-4'>
                    <p>
                      Składając zamówienie na Zalando.pl, akceptujesz
                      Postanowienia Polityki Prywatności, Regulamin oraz zasady
                      odstąpienia od umowy. Potwierdzasz także, że ten zakup
                      jest przeznaczony wyłącznie do użytku osobistego. Możemy
                      okazjonalnie wysyłać do Ciebie wiadomości e-mail z
                      rekomendacjami dotyczącymi produktów. Nie przejmuj się,
                      możesz w każdym momencie zrezygnować z subskrybcji,
                      klikając w link w wiadomości e-mail.
                    </p>
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
