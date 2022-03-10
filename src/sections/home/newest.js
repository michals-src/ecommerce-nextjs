import { useEffect, useRef, useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"

const Card_PreviewProduct = () => {
  return (
    <>
      <div className="flex justify-end flex-row">
        <div className="w-full h-96 bg-gray-100">
        </div>
        <div className="mt-8 mb-6">
          <p className="text-lg font-medium">Nazwa produkty</p>
        </div>
        <p className="text-lg">999 zł</p>
      </div>
    </>
  )
}

export default function Newest() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const [Wrapper, setWrapper] = useState({ width: 0 });
  const [abc, setElemnt] = useState(0);
  const [key, setKey] = useState(0);
  const [tra, setTranslate] = useState(0);

  const [trs, setTransform] = useState(0);

  useEffect(() => {
    let width = ref2.current.getBoundingClientRect().width;

    //setWrapper({ ...Wrapper, width: (width / 3) * 10 });
    console.log(width);
    setElemnt(width);

  }, [ref2]);

  const handleNext = () => {
    //setKey(key++);
    //setTranslate(500 * key);
    console.log(abc);
    setTransform(abc)
    ref.current.scrollBy({ left: abc + 12, behavior: 'smooth' });
  }

  let a = Array(10).fill('');

  return (
    <>
      <div className="container mx-auto px-3 lg:px-2">
        <div className="my-32">
          <h2 className="text-3xl font-bold">
            Odkryj najnowsze produkty
          </h2>
          <div className="my-10">
            <div className="w-full overflow-hidden relative">
              <ul ref={ref} className={`w-full overflow-x-scroll list-none flex flex-row flex-nowrap`}>

                <li style={{ flex: '0 0 33%' }} className="mr-3 pr-3" ref={ref2}><Card_PreviewProduct /></li>
                <li style={{ flex: '0 0 33%' }} className="mr-3 pr-3"><Card_PreviewProduct /></li>
                <li style={{ flex: '0 0 33%' }} className="mr-3 pr-3"><Card_PreviewProduct /></li>
                <li style={{ flex: '0 0 33%' }} className="mr-3 pr-3"> <Card_PreviewProduct /></li>
                <li style={{ flex: '0 0 33%' }} className="mr-3 pr-3"><Card_PreviewProduct /></li>
                <li style={{ flex: '0 0 33%' }} className="mr-3 pr-3"><Card_PreviewProduct /></li>
                <li style={{ flex: '0 0 33%' }} className="mr-3 pr-3"><Card_PreviewProduct /></li>
                <li style={{ flex: '0 0 33%' }} className="mr-3 pr-3"><Card_PreviewProduct /></li>
                <li style={{ flex: '0 0 33%' }} className="mr-3 pr-3"><Card_PreviewProduct /></li>

              </ul>
              <div className="absolute top-0 left- 0 z-10 w-full h-96 px-10">
                <div className="w-full h-full flex flex-row flex-nowrap justify-between items-center">
                  <button className="p-3 bg-white border border-gray-800"><ChevronLeftIcon className="w-4 h-4 text-gray-800" /></button>
                  <button onClick={() => handleNext()} className="p-3 bg-white border border-gray-800"><ChevronRightIcon className="w-4 h-4 text-gray-800" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
