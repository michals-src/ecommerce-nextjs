import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import useBreakpoints from "../../hooks/useBreakpoints";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Card_PreviewProduct = () => {
  return (
    <>
      <div className='flex justify-end flex-row'>
        <div className='w-full h-96 bg-gray-100'></div>
        <div className='mt-8 mb-6'>
          <p className='text-lg font-medium'>Nazwa produkty</p>
        </div>
        <p className='text-lg'>999 zł</p>
      </div>
    </>
  );
};

const LeftArrow = ({ handleClick, ...props }) => {
  return (
    <div className='absolute top-0 left- 0 z-10 w-auto h-96 px-10'>
      <div className='w-auto h-full flex flex-row flex-nowrap justify-between items-center'>
        <button
          onClick={() => handleClick()}
          className='p-3 bg-white border border-gray-500'>
          <ChevronLeftIcon className='w-4 h-4 text-gray-800' />
        </button>
      </div>
    </div>
  );
};

const RightArrow = ({ handleClick, ...props }) => {
  return (
    <div className='absolute top-0 right-0 z-10 w-auto h-96 px-10'>
      <div className='w-auto h-full flex flex-row flex-nowrap justify-between items-center'>
        <button
          onClick={() => handleClick()}
          className='p-3 bg-white border border-gray-500'>
          <ChevronRightIcon className='w-4 h-4 text-gray-800' />
        </button>
      </div>
    </div>
  );
};

export default function Newest() {
  const breakpoint = useBreakpoints();
  const windowDimensions = useWindowDimensions();

  const ref = useRef(null);
  const ChildrenRefs = useRef([]);
  const [ScrollOffset, setScrollOffset] = useState(0);
  const [CarouselItem, setCarouselItem] = useState(0);

  let fakeProducts = Array(10).fill("");

  const [GetProductsOffset, setProductsOffset] = useState(0);

  const [moveDir, setMoveDir] = useState(null);
  const [prevScreenX, setPrevScreenX] = useState(null);
  const [isTouched, setTouched] = useState(false);
  const [hasMoved, setMoved] = useState(false);

  useEffect(() => {
    console.log(breakpoint);
    if ("lg" === breakpoint) {
      setProductsOffset(1);
      return;
    }
    if (["xl", "2xl"].indexOf(breakpoint) > -1) {
      setProductsOffset(2);
      return;
    }
    setProductsOffset(0);
  }, [breakpoint, windowDimensions]);

  useEffect(() => {
    ChildrenRefs.current = ChildrenRefs.current.slice(0, fakeProducts.length);
  }, [fakeProducts]);

  useEffect(() => {
    let width = ChildrenRefs.current[0].getBoundingClientRect().width;
    const gaps = 12;

    setScrollOffset(Math.round(width) + gaps);
  }, [ChildrenRefs, windowDimensions.width]);

  useEffect(() => {
    let currMaxCarouselSteps = fakeProducts.length - 1 - GetProductsOffset;
    if (CarouselItem > currMaxCarouselSteps) {
      setCarouselItem(currMaxCarouselSteps);
    }

    ref.current.scrollTo({
      left: ScrollOffset * CarouselItem,
      behavior: "smooth",
    });
  }, [windowDimensions.width]);

  const handleNext = () => {
    setCarouselItem(prevState => {
      let newState = prevState + 1;

      ref.current.scrollTo({
        left: ScrollOffset * newState,
        behavior: "smooth",
      });

      return newState;
    });
  };

  const handlePrev = () => {
    setCarouselItem(prevState => {
      let newState = prevState === 0 ? 0 : prevState - 1;

      ref.current.scrollTo({
        left: ScrollOffset * newState,
        behavior: "smooth",
      });

      return newState;
    });
  };

  const _TouchStart = () => {
    setTouched(true);
  };

  const _TouchEnd = () => {
    setTouched(false);
    setPrevScreenX(null);

    if (hasMoved) {
      let Lscroll = ref.current.scrollLeft;
      let Loffset = ScrollOffset * CarouselItem;

      //Scroll next
      if ("left" === moveDir) {
        if (Lscroll - Loffset >= ScrollOffset / 3) {
          handleNext();
          return;
        }
      }

      //Scroll back
      if ("right" === moveDir) {
        if (-(Lscroll - Loffset) >= ScrollOffset / 3) {
          handlePrev();
          return;
        }
      }

      //Scroll none action
      ref.current.scrollTo({
        left: ScrollOffset * CarouselItem,
        behavior: "smooth",
      });

      setMoved(false);
    }
  };

  const _TouchMove = e => {
    const scrollVelocity = 11;
    const props = "mousemove" === e.type ? e : e?.changedTouches[0];

    if (isTouched) {
      if (prevScreenX > props.screenX) {
        if ("left" !== moveDir) setMoveDir("left");
        ref.current.scrollBy({ left: scrollVelocity });
      }
      if (prevScreenX < props.screenX) {
        if ("right" !== moveDir) setMoveDir("right");
        ref.current.scrollBy({ left: -scrollVelocity });
      }

      setPrevScreenX(props.screenX);

      if (!hasMoved) setMoved(true);
    }
  };

  const _events = {
    onMouseLeave: () => _TouchEnd(),
    onMouseUp: () => _TouchEnd(),
    onMouseDown: () => _TouchStart(),
    onMouseMove: e => _TouchMove(e),
    onTouchStart: () => _TouchStart(),
    onTouchEnd: () => _TouchEnd(),
    onTouchMove: e => _TouchMove(e),
  };

  return (
    <>
      <div className='container mx-auto px-3 lg:px-2'>
        <div className='my-20'>
          <h2 className='mx-auto text-center text-3xl font-medium'>
            Odkryj najnowsze produkty
          </h2>
          <div className='my-20'>
            <div className='w-full overflow-hidden relative'>
              <ul
                {..._events}
                ref={ref}
                className={`slider [--col-offset:4px] cursor-pointer w-full overflow-x-hidden list-none flex flex-row flex-nowrap`}>
                {fakeProducts.map((_, key) => {
                  let cn = classNames("select-none", {
                    "mr-3": key === fakeProducts.length - 1 ? false : true,
                  });

                  return (
                    <li
                      key={key}
                      className={cn}
                      ref={el => (ChildrenRefs.current[key] = el)}>
                      <div className='flex justify-end flex-col'>
                        <div className='w-full h-[400px] bg-gray-100'></div>
                        <div className='p-6'>
                          <div className='mt-2 mb-4'>
                            <p className='text-lg font-medium truncate'>
                              Nazwa
                              produktuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
                            </p>
                          </div>
                          <p className='text-lg'>{10 * key} zł</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              {CarouselItem != 0 && <LeftArrow handleClick={handlePrev} />}
              {CarouselItem < fakeProducts.length - 1 - GetProductsOffset && (
                <RightArrow handleClick={handleNext} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
