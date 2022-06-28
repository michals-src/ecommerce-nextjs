import { forwardRef, useState, useRef } from "react";
import classNames from "classnames";

import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";
import useValidator from "../../../hooks/useValidator";

const NumberInput = forwardRef((props, ref) => {
  const {
    step = 1,
    value = 0,
    prefix,
    suffix,
    autoComplete,
    type,
    onBlur,
    onFocus,
    onChange,
    size = "md",
  } = props;
  const [val, _val] = useState(value);
  const [Focused, _Focused] = useState(false);
  const { Validator } = useValidator();

  let cn = classNames(
    [
      "flex flex-row flex-nowrap",
      //Default
      "box-border block w-full rounded-md border border-black outline-none",
      props?.className,
    ],
    {
      //Hover
      "hover:ring-1 hover:ring-primary-500": !Focused,
      //Focus
      "bg-white ring-2 ring-primary-300": Focused,
    }
  );

  let cn_input = classNames("w-full bg-transparent outline-none", {
    "py-1 px-3 text-sm": size === "sm",
    "py-3 px-5": size === "md",
    "py-4 px-6 text-lg": size === "lg",
  });

  const _Prefix = ({ value, ...props }) => {
    return (
      <div
        className='flex items-center justify-center py-3 pl-5 pr-1'
        onClick={() => {
          ref?.current.focus();
        }}>
        {value}
      </div>
    );
  };
  const _Suffix = ({ value, ...props }) => {
    return (
      <div
        className='flex items-center justify-center py-3 pr-5 pl-1'
        onClick={() => {
          ref?.current.focus();
        }}>
        {value}
      </div>
    );
  };

  const _increment = () => {
    _Focused(true);

    if (Number.isInteger(props.max) && val >= props.max) {
      _val(props.max);
      return;
    }
    _val(parseFloat(val, 10) + step);
  };

  const _decrement = () => {
    _Focused(true);
    if (Number.isInteger(props.min) && val <= props.min) {
      console.log(props.min);
      _val(props.min);
      return;
    }
    _val(parseFloat(val, 10) - step);
  };

  const cn_tickers = classNames(
    "flex h-full flex-col justify-center relative z-10",
    {
      "p-1": size === "sm",
      "p-2": size === "md",
      "p-3": size === "lg",
    }
  );

  const cn_wrapper = classNames("flex flex-col flex-nowrap justify-between ", {
    "rounded-sm py-0 px-1": size === "sm",
    "rounded-sm p-1 bg-gray-100": size === "md",
    "rounded-md p-2 bg-gray-100": size === "lg",
  });

  const cn_ticker = classNames(
    "w-3 h-3 text-black cursor-pointer",
    "hover:text-gray-500",
    {
      "w-3 h-3": size === "sm",
      "w-3 h-3": size === "md",
      "w-4 h-4": size === "lg",
    }
  );

  const _Tickers = props => {
    return (
      <div className={cn_tickers}>
        <div className={cn_wrapper}>
          <ChevronUpIcon
            onClick={e => {
              _increment();
            }}
            className={cn_ticker}
          />
          <ChevronDownIcon onClick={() => _decrement()} className={cn_ticker} />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={cn}>
        {prefix && <_Prefix value={prefix} />}
        <input
          ref={ref}
          type={!type ? "text" : type}
          className={cn_input}
          onBlur={e => {
            e.preventDefault();
            _Focused(false);
            return onBlur ? onBlur(e) : null;
          }}
          onFocus={e => {
            e.preventDefault();
            _Focused(true);
            return onFocus ? onFocus(e) : null;
          }}
          onChange={e => {
            if (Validator(e.target.value, "number")) _val(e.target.value);
            return onChange ? onChange(e) : null;
          }}
          value={parseFloat(val, 10)}
          {...props}
        />
        <_Tickers />
        {suffix && <_Suffix value={suffix} />}
      </div>
    </>
  );
});

NumberInput.displayName = "Input";

export default NumberInput;
