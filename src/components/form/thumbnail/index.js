import { useState, useRef, forwardRef } from "react";
import classNames from "classnames";

import { CheckIcon } from "@heroicons/react/solid";

export default function Thumbnail({
  indicator = true,
  selected = false,
  children,
  ...props
}) {
  const [hovered, _hovered] = useState(false);

  let cn = classNames(
    "box-border block w-full rounded-md border outline-none cursor-pointer p-8",
    props?.className,
    {
      "border-gray-300 hover:border-gray-600": !selected,
      "border-black": selected,
      "ring-1 ring-black": !indicator && selected,
    }
  );

  let cn_indicator = classNames(
    "flex flex-nowrap items-center justify-center",
    "w-5 h-5 rounded-full border",
    {
      "border-gray-600": hovered,
      "border-gray-300": !selected && !hovered,
      "border-black bg-black": selected,
    }
  );

  const _Indicator = forwardRef((props, ref) => {
    if (selected) {
      return (
        <div className='mr-8 flex h-auto items-center p-3'>
          <div ref={ref} className={cn_indicator}>
            <CheckIcon className='h-3 w-3 text-white' />
          </div>
        </div>
      );
    }

    return (
      <div className='mr-8 flex h-auto items-center p-3'>
        <div ref={ref} className={cn_indicator}></div>
      </div>
    );
  });
  _Indicator.displayName = "_Indicator";

  return (
    <div
      className={cn}
      onMouseEnter={() => _hovered(true)}
      onMouseLeave={() => _hovered(false)}
      {...props}>
      <div className='flex flex-row flex-nowrap'>
        {indicator && <_Indicator />}
        {children}
      </div>
    </div>
  );
}
