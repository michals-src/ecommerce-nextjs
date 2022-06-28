import { forwardRef, useState, useEffect, useRef } from "react";
import classNames from "classnames";

import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";
import useValidator from "../../../hooks/useValidator";

const Select = forwardRef((props, ref) => {
  const {
    step = 1,
    value = "Wybierz",
    prefix,
    suffix,
    autoComplete,
    type,
    onBlur: _onBlur,
    onFocus: _onFocus,
    onChange,
    size = "md",
    options,
  } = props;
  const [val, _val] = useState(value);
  const [Focused, _Focused] = useState(false);
  const { Validator } = useValidator();
  const inputRef = useRef(null);

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

  let cn_input = classNames(
    "w-full bg-transparent outline-none cursor-pointer",
    {
      "py-1 px-3 text-sm": size === "sm",
      "py-3 px-5": size === "md",
      "py-4 px-6 text-lg": size === "lg",
    }
  );

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
    "flex h-auto flex-col justify-center relative z-10",
    {
      "p-1": size === "sm",
      "p-2": size === "md",
      "p-3": size === "lg",
    }
  );

  const cn_wrapper = classNames(
    "flex flex-col flex-nowrap justify-center items-center",
    {
      "rounded-sm px-1": size === "sm",
      "rounded-sm p-1 bg-gray-100": size === "md",
      "rounded-md p-2 bg-gray-100": size === "lg",
    }
  );

  const cn_ticker = classNames("w-3 h-3 text-black cursor-pointer", {
    "w-3 h-3": size === "sm",
    "w-3 h-3": size === "md",
    "w-4 h-4": size === "lg",
  });

  const _Tickers = props => {
    return (
      <div className={cn_tickers}>
        <div className={cn_wrapper}>
          <ChevronDownIcon className={cn_ticker} />
        </div>
      </div>
    );
  };

  const _Options = ({ value, ...props }) => {
    const cn_wrapper = classNames(
      "top-100 absolute w-full rounded border border-gray-500 bg-white p-0 shadow-sm"
    );

    const cn_option = classNames(
      "cursor-pointer py-1 px-4",
      "hover:bg-primary-100",
      {
        "text-sm": size === "sm",
        "text-normal": size === "md",
        "text-lg": size === "lg",
      }
    );

    const __handleClick = (option_value, e) => {
      _Focused(!Focused);
      _val(option_value);
    };

    return (
      <div className={cn_wrapper}>
        {Object.keys(value).map((option_value, index) => {
          return (
            <>
              <div
                key={0}
                className={cn_option}
                onClick={e => __handleClick(option_value, e)}>
                {value[option_value]}
              </div>
            </>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className='relative h-auto w-full cursor-pointer'>
        <div className={cn} onClick={() => _Focused(!Focused)}>
          {prefix && <_Prefix value={prefix} />}
          <input
            ref={ref => (inputRef = ref)}
            type={!type ? "text" : type}
            className={cn_input}
            onBlur={e => {
              return _onBlur ? _onBlur(e) : null;
            }}
            onFocus={e => {
              return _onFocus ? _onFocus(e) : null;
            }}
            onChange={e => {
              if (options[val] === "undefined") _val(Object.values(options)[0]);
              return onChange ? onChange(e) : null;
            }}
            value={val}
            {...props}
            readOnly
            autoComplete='off,chrome-off'
          />
          {suffix && <_Suffix value={suffix} />}
          <_Tickers />
        </div>
        {Focused && options && <_Options value={options} />}
      </div>
    </>
  );
});

Select.displayName = "Select";

export default Select;
