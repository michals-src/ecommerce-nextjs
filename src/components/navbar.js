import { useState, useEffect, useRef, forwardRef } from "react";
import Link from "next/link";
import classNames from "classnames";

import {
  ShoppingBagIcon,
  SearchIcon,
  UserIcon,
  HeartIcon,
  ShoppingCartIcon,
  XIcon,
  ChatAlt2Icon,
  InformationCircleIcon,
  MenuAlt4Icon,
} from "@heroicons/react/outline";

/**
 * Pseudo-hook search input props
 *
 * @bool SearchVisible -> Search fullscreen window is visible
 * @void handleSearchClick -> Change visible state and body classes
 * @React.Ref searchInput -> reference to search input DOM
 *
 * @returns object
 */
const useSearch = () => {
  const [SearchVisible, setSearchVisible] = useState(false);
  const searchInput = useRef(null);

  const handleSearchClick = () => {
    setSearchVisible(!SearchVisible);

    const bodyClass = "overflow-y-hidden";

    if (!SearchVisible) {
      document.body.classList.add(bodyClass);
      return;
    }

    document.body.classList.remove(bodyClass);
  };

  useEffect(() => {
    if (SearchVisible) return searchInput.current.focus();
    return searchInput.current.blur();
  }, [SearchVisible]);

  return { SearchVisible, handleSearchClick, searchInput };
};

const SearchWrapper = ({ handleSearchClick }) => {
  return (
    <Link href='#' passHref>
      <a
        className='cursor-text block py-2 pl-3 pr-12 rounded-2xl bg-gray-100 hover:bg-gray-200'
        onClick={e => {
          e.preventDefault();
          handleSearchClick();
        }}>
        <span className='flex flex-row flex-nowrap items-center'>
          <SearchIcon className='w-4 h-4 text-gray-900' />
          <p className='text-sm text-gray-400 ml-4'>Wyszukaj</p>
        </span>
      </a>
    </Link>
  );
};

/**
 * Search fullscreen window
 */
const Search = forwardRef(({ visible, onClose, ...props }, ref) => {
  const [InputValue, setInputValue] = useState("");
  const [SearchInputFocus, setSearchInputFocus] = useState(false);
  const classes = classNames({
    hidden: !visible,
  });

  const inputClasses = classNames(
    "flex flex-row flex-nowrap rounded-3xl bg-gray-100 cursor-text",
    {
      "bg-gray-300": SearchInputFocus,
      "hover:bg-gray-200": !SearchInputFocus,
    }
  );

  return (
    <>
      <div className={classes}>
        <div className='bg-white top-0 fixed z-50 overflow-y-scroll w-full h-full p-12 lg:p-4'>
          <div className='max-w-4xl mx-auto px-2 py-10'>
            <div className='flex flex-row flex-nowrap justify-between items-center'>
              <div>
                <h2 className='text-4xl my-3'>Wyszukaj produkty</h2>
              </div>
              <div>
                <span className='block p-1 cursor-pointer'>
                  <XIcon
                    className='w-7 h-7 text-gray-900 hover:text-gray-500'
                    onClick={onClose}
                  />
                </span>
              </div>
            </div>
            <div className='my-8'>
              <form>
                <div className={inputClasses}>
                  <div
                    className='flex items-center justify-center p-4'
                    onClick={() => {
                      ref.current.focus();
                    }}>
                    <SearchIcon className='w-4 h-4 text-gray-900' />
                  </div>
                  <input
                    ref={ref}
                    type='text'
                    name='search-item'
                    className='px-3 py-4 bg-transparent w-full outline-none'
                    placeholder='Czego szukasz ?'
                    autoComplete='off'
                    onBlur={() => setSearchInputFocus(false)}
                    onFocus={() => setSearchInputFocus(true)}
                    value={InputValue}
                    onChange={e => setInputValue(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

const MobileNavigation = ({
  MobileNavbar,
  setMobileNavbar,
  handleSearchClick,
}) => {
  const wrapperClasses = classNames(
    "lg:hidden fixed top-0 left-0 w-full h-full z-50 bg-[#00000091]",
    {
      visible: MobileNavbar,
      hidden: !MobileNavbar,
    }
  );

  return (
    <div className={wrapperClasses}>
      <div className='fixed top-0 right-0 bg-white py-8 h-full overflow-y-scroll'>
        <div className='flex flex-col'>
          <div className='flex flex-row justify-end px-12'>
            <button onClick={() => setMobileNavbar(false)}>
              <XIcon className='w-8 h-8 p-1 rounded-full hover:bg-gray-100 text-gray-800 hover:text-gray-500' />
            </button>
          </div>
          <div className='my-8 px-12'>
            <SearchWrapper handleSearchClick={handleSearchClick} />
          </div>
          <ul className='list-none flex flex-col text-2xl px-6 my-12'>
            <Link href='#' passHref>
              <a className='block py-2 pl-8 pr-32 hover:text-gray-400 focus:text-gray-500'>
                Liście
              </a>
            </Link>
            <Link href='#' passHref>
              <a className='py-2 pl-8 pr-32 hover:text-gray-400 focus:text-gray-500'>
                Urządzenia
              </a>
            </Link>
            <Link href='#' passHref>
              <a className='py-2 pl-8 pr-32 hover:text-gray-400 focus:text-gray-500'>
                Akcesoria
              </a>
            </Link>
          </ul>
          <div className='my-6 p-8 px-12 bg-gray-100'>
            <div className='mb-3'>
              <button className='border-black border-2 text-black px-5 py-2 rounded-full font-medium text-sm w-full hover:bg-gray-200'>
                Dołącz do nas
              </button>
            </div>
            <div>
              <button className='bg-gray-600 border-2 border-gray-600 text-white px-5 py-2 rounded-full font-medium text-sm w-full hover:bg-gray-700'>
                Zaloguj się
              </button>
            </div>
          </div>
          <div className='py-4 px-12'>
            <h6 className='mb-4 text-lg'>Pomocne odnośniki</h6>
            <ul className='list-none flex flex-col flex-nowrap'>
              <li className='my-2'>
                <Link href='#' passHref>
                  <a className='flex flex-row flex-nowrap items-center text-xl hover:text-gray-400 focus:text-gray-500'>
                    <span className='p-1 mr-3'>
                      <ChatAlt2Icon className='w-5 h-5 text-gray-700' />
                    </span>
                    <span>Kontakt</span>
                  </a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='#' passHref>
                  <a className='flex flex-row flex-nowrap items-center text-xl hover:text-gray-400 focus:text-gray-500'>
                    <span className='p-1 mr-3'>
                      <InformationCircleIcon className='w-5 h-5 text-gray-700' />
                    </span>
                    <span>Pomoc</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const DesktopNavigation = () => {
  return (
    <div className='hidden lg:block'>
      <ul className='list-none flex flex-row items-center font-montserrat space-x-4'>
        <MenuItem url='#' label='Liście' />
        <MenuItem url='#' label='Urządzenia' />
        <MenuItem url='#' label='Akcesoria' />
        <MenuItem url='#' label='Dostawa' />
        <MenuItem url='#' label='Kontakt' />
      </ul>
    </div>
  );
};

/**
 * Website navbar
 */
const Navbar = () => {
  const { SearchVisible, handleSearchClick, searchInput } = useSearch();
  const [MobileNavbar, setMobileNavbar] = useState(false);

  return (
    <>
      <div className='bg-gray-100 py-1'>
        <div className='container mx-auto px-6 lg:px-2 py-1'>
          <ul className='list-none flex justify-end text-sm'>
            <li>
              <Link href='#' passHref>
                <a className='block pr-5 border-r border-r-gray-400 hover:underline text-sm'>
                  Dołącz do nas
                </a>
              </Link>
            </li>
            <li>
              <Link href='#' passHref>
                <a className='block pl-5 hover:underline'>Pomoc</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-row flex-nowrap border-b border-b-gray-300'>
        <div className='container mx-auto px-6 lg:px-2 py-4'>
          <div className='flex flex-row justify-between items-center'>
            <div className='navbar-logo'>
              <Link href='#' passHref>
                <a className='text-2xl font-bold'>Nazwa.</a>
              </Link>
            </div>
            <div className='flex flex-row flex-wrap flex-1 xl:flex-initial ml-8 xl:ml-0 self-end'>
              <MobileNavigation
                MobileNavbar={MobileNavbar}
                setMobileNavbar={setMobileNavbar}
                handleSearchClick={handleSearchClick}
              />
              <DesktopNavigation />
            </div>
            <div className='flex flex-row flex-nowrap'>
              <ul className='list-none flex flex-row items-center space-x-4 lg:space-x-6 relative'>
                <li className='cursor-text hidden lg:block absolute right-0 mr-[100%]'>
                  <SearchWrapper handleSearchClick={handleSearchClick} />
                </li>
                <li className='cursor-pointer'>
                  <Link href='#' passHref>
                    <a className='block'>
                      <UserIcon className='w-6 h-6 text-gray-900' />
                    </a>
                  </Link>
                </li>
                <li className='cursor-pointer'>
                  <Link href='#' passHref>
                    <a className='block'>
                      <span className='relative block'>
                        <span>
                          <HeartIcon className='p-1 hover:bg-gray-100 rounded-full w-8 h-8 text-gray-900' />
                        </span>
                        <span className='absolute z-10 top-[-25%] right-[-25%]'>
                          <span className='bg-black text-white text-[11px] rounded-full py-[1px] px-[6px]'>
                            99
                          </span>
                        </span>
                      </span>
                    </a>
                  </Link>
                </li>
                <li className='cursor-pointer'>
                  <Link href='#' passHref>
                    <a className='block'>
                      <ShoppingCartIcon className='w-6 h-6 text-gray-900' />
                    </a>
                  </Link>
                </li>
              </ul>
              <div className='flex lg:hidden cursor-pointer items-center ml-10'>
                <button onClick={() => setMobileNavbar(true)}>
                  <MenuAlt4Icon className='block w-7 h-7 p-1 rounded-full hover:bg-gray-100' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Search
        ref={searchInput}
        visible={SearchVisible}
        onClose={handleSearchClick}
      />
    </>
  );
};

/**
 * Navigation elements
 *
 * @param {string} url Address http
 * @param {string} label Address title
 * @return React.Element
 */
const MenuItem = ({ url, label }) => {
  return (
    <li className='tracking-wider'>
      <Link href={url} passHref>
        <a className='text-base px-1 py-2 border-b-2 border-b-transparent hover:border-b-gray-900'>
          {label}
        </a>
      </Link>
    </li>
  );
};

export default Navbar;
