import { useState, useEffect, useRef, forwardRef } from "react";
import Link from "next/link";
import classNames from "classnames";
import { motion } from "framer-motion";

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
      <motion.a
        initial={{ paddingLeft: "12px" }}
        whileHover={{ paddingLeft: "18px", transition: { duration: 0.1 } }}
        className='block cursor-text bg-complement-100 py-2 pl-3 pr-12'
        onClick={e => {
          e.preventDefault();
          handleSearchClick();
        }}>
        <span className='flex flex-row flex-nowrap items-center'>
          <SearchIcon className='h-4 w-4 text-complement-900' />
          <p className='ml-4 text-sm text-complement-800'>Wyszukaj</p>
        </span>
      </motion.a>
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
    "flex flex-row flex-nowrap rounded-sm border-2 cursor-text",
    {
      "border-primary-800": !SearchInputFocus,
      "border-primary-500": SearchInputFocus,
      "shadow-lg": SearchInputFocus,
      "hover:bg-gray-100": !SearchInputFocus,
    }
  );

  const variants = {
    closed: {
      opacity: 0,
      display: "none",
    },
    open: {
      opacity: 1,
      display: "block",
    },
  };

  return (
    <>
      <motion.div
        initial={"closed"}
        animate={visible ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className='absolute left-0 top-0 z-20 h-full w-full'>
        <div className='fixed top-0 z-50 h-full w-full overflow-y-scroll bg-[rgb(0,0,0,.8)] pb-0 md:pb-4 lg:pb-12'>
          <div className='relative mx-auto h-auto bg-white px-32 py-12'>
            <div className='mx-auto max-w-4xl'>
              <div className='flex flex-row flex-nowrap items-center justify-between'>
                <div>
                  <h2 className='my-3 text-4xl'>Wyszukaj produkty</h2>
                </div>
                <div>
                  <span className='block cursor-pointer p-1'>
                    <XIcon
                      className='h-7 w-7 text-gray-900 hover:text-gray-500'
                      onClick={onClose}
                    />
                  </span>
                </div>
              </div>
              <div className='my-8'>
                <div className={inputClasses}>
                  <div
                    className='flex items-center justify-center p-4'
                    onClick={() => {
                      ref.current.focus();
                    }}>
                    <SearchIcon className='h-4 w-4 text-gray-900' />
                  </div>
                  <input
                    ref={ref}
                    type='text'
                    name='search-item'
                    className='w-full bg-transparent px-3 py-4 outline-none'
                    placeholder='Czego szukasz ?'
                    autoComplete='off'
                    onBlur={() => setSearchInputFocus(false)}
                    onFocus={() => setSearchInputFocus(true)}
                    value={InputValue}
                    onChange={e => setInputValue(e.target.value)}
                  />
                </div>

                <div className='mt-10 py-12'>
                  <p className='mb-6 uppercase text-gray-600'>
                    Popularne wyszukiwania
                  </p>
                  <ul className='m-0 flex w-full list-none flex-col p-0'>
                    <li className='py-2 tracking-wide'>
                      <Link href='#' passHref>
                        <a className='hover:underline'>
                          <h6>Fjallraven - Foldsack</h6>
                        </a>
                      </Link>
                    </li>
                    <li className='py-2 tracking-wide'>
                      <Link href='#' passHref>
                        <a className='hover:underline'>
                          <h6>Cotton Jacket</h6>
                        </a>
                      </Link>
                    </li>
                    <li className='py-2 tracking-wide'>
                      <Link href='#' passHref>
                        <a className='hover:underline'>
                          <h6>White Gold Plated</h6>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
});

Search.displayName = "Search";

const MobileNavigation = ({
  MobileNavbar,
  setMobileNavbar,
  handleSearchClick,
  handleHamburgerClick,
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
      <div className='fixed top-0 right-0 h-full overflow-y-scroll bg-white py-8'>
        <div className='flex flex-col'>
          <div className='flex flex-row justify-end px-12'>
            <button onClick={() => handleHamburgerClick()}>
              <XIcon className='h-8 w-8 rounded-full p-1 text-gray-800 hover:bg-gray-100 hover:text-gray-500' />
            </button>
          </div>
          <div className='my-8 px-12'>
            <SearchWrapper handleSearchClick={handleSearchClick} />
          </div>
          <ul className='my-12 flex list-none flex-col px-6 text-2xl'>
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
          <div className='my-6 bg-gray-100 p-8 px-12'>
            <div className='mb-3'>
              <button className='w-full rounded-full border-2 border-black px-5 py-2 text-sm font-medium text-black hover:bg-gray-200'>
                Dołącz do nas
              </button>
            </div>
            <div>
              <button className='w-full rounded-full border-2 border-gray-600 bg-gray-600 px-5 py-2 text-sm font-medium text-white hover:bg-gray-700'>
                Zaloguj się
              </button>
            </div>
          </div>
          <div className='py-4 px-12'>
            <h6 className='mb-4 text-lg'>Pomocne odnośniki</h6>
            <ul className='flex list-none flex-col flex-nowrap'>
              <li className='my-2'>
                <Link href='#' passHref>
                  <a className='flex flex-row flex-nowrap items-center text-xl hover:text-gray-400 focus:text-gray-500'>
                    <span className='mr-3 p-1'>
                      <ChatAlt2Icon className='h-5 w-5 text-gray-700' />
                    </span>
                    <span>Kontakt</span>
                  </a>
                </Link>
              </li>
              <li className='my-2'>
                <Link href='#' passHref>
                  <a className='flex flex-row flex-nowrap items-center text-xl hover:text-gray-400 focus:text-gray-500'>
                    <span className='mr-3 p-1'>
                      <InformationCircleIcon className='h-5 w-5 text-gray-700' />
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
      <ul className='flex list-none flex-row items-center space-x-4 font-montserrat tracking-wider '>
        <MenuItem url='/products' label='Liście' active={true} />
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

  const handleHamburgerClick = () => {
    setMobileNavbar(!MobileNavbar);

    const bodyClass = "overflow-y-hidden";

    if (!MobileNavbar) {
      document.body.classList.add(bodyClass);
      return;
    }

    document.body.classList.remove(bodyClass);
  };

  return (
    <>
      <div className='bg-primary py-1 text-white'>
        <div className='container mx-auto px-6 py-1 lg:px-2'>
          <ul className='flex list-none justify-end text-sm'>
            <li>
              <Link href='#' passHref>
                <a className='block border-r border-r-gray-800 pr-5 text-sm hover:underline'>
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
      <div className='flex flex-row flex-nowrap bg-black text-white '>
        <div className='container mx-auto px-6 pt-4 lg:px-16'>
          <div className='flex flex-row items-center justify-between'>
            <div className='navbar-logo'>
              <Link href='/' passHref>
                <a>
                  <h2 className='font-bold'>Sklepshop.</h2>
                  <span className='mt-2 block text-lg'>
                    Wyposaż swoją kolekcję w nowe akcesoria
                  </span>
                </a>
              </Link>
            </div>
            <div className='flex flex-row flex-nowrap'>
              {/* Icons */}
              <ul className='relative flex list-none flex-row items-center space-x-4 lg:space-x-6'>
                <li className='cursor-pointer'>
                  <Link href='/login' passHref>
                    <a className='block'>
                      <div className='flex flex-row flex-nowrap items-center'>
                        <span className='mr-2 block'>Zaloguj się</span>
                        <span className='block'>
                          <span>
                            <UserIcon className='h-8 w-8 rounded-full p-1 text-white hover:bg-complement-100 hover:text-black' />
                          </span>
                        </span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className='cursor-pointer'>
                  <Link href='#' passHref>
                    <a className='block'>
                      <span className='relative block'>
                        <span>
                          <HeartIcon className='h-8 w-8 rounded-full p-1 text-white hover:bg-complement-100 hover:text-black' />
                        </span>
                        <span className='absolute top-[-25%] right-[-25%] z-10'>
                          <span className='rounded-full bg-primary py-[1px] px-[6px] text-[11px] text-white'>
                            99+
                          </span>
                        </span>
                      </span>
                    </a>
                  </Link>
                </li>
                <li className='cursor-pointer'>
                  <Link href='/cart' passHref>
                    <a className='block'>
                      <span className='block'>
                        <span>
                          <ShoppingCartIcon className='h-8 w-8 rounded-full p-1 text-white hover:bg-complement-100 hover:text-black' />
                        </span>
                      </span>
                    </a>
                  </Link>
                </li>
              </ul>
              {/* Hamburger menu icon */}
              <div className='ml-10 flex cursor-pointer items-center lg:hidden'>
                <button onClick={() => handleHamburgerClick()}>
                  <MenuAlt4Icon className='block h-7 w-7 rounded-full p-1 hover:bg-gray-100' />
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-row flex-nowrap'>
            <div className='mt-12 flex flex-1 flex-row flex-wrap self-end xl:ml-0 xl:flex-initial'>
              <MobileNavigation
                MobileNavbar={MobileNavbar}
                setMobileNavbar={setMobileNavbar}
                handleSearchClick={handleSearchClick}
                handleHamburgerClick={handleHamburgerClick}
              />
              <DesktopNavigation />
            </div>
            <div className='ml-auto flex w-3/12 flex-col self-end'>
              <SearchWrapper handleSearchClick={handleSearchClick} />
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
const MenuItem = ({ url, label, active }) => {
  const cn = classNames(
    "block border-b-4 border-b-transparent py-3 text-base hover:border-complement hover:text-white",
    {
      "bg-complement-900": active,
      "border-b-complement": active,
      "px-1": !active,
      "px-4": active,
    }
  );

  return (
    <li className='tracking-wider'>
      <Link href={url} passHref>
        <a className={cn}>{label}</a>
      </Link>
    </li>
  );
};

export default Navbar;
