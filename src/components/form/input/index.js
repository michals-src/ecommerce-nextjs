import { forwardRef, useState } from "react";
import classNames from "classnames";

const Input = forwardRef((props, ref) => {
  const { prefix, suffix, autoComplete, type, onBlur, onFocus } = props;
  const [Focused, _Focused] = useState(false);

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

  const _Prefix = ({ value, ...props }) => {
    return (
      <div
        className='flex items-center justify-center py-3 pl-5 pr-1'
        onClick={() => {
          ref.current.focus();
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
          ref.current.focus();
        }}>
        {value}
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
          className='w-full bg-transparent py-3 px-5 outline-none'
          onBlur={e => {
            _Focused(false);
            return onBlur ? onBlur(e) : null;
          }}
          onFocus={e => {
            _Focused(true);
            return onFocus ? onFocus(e) : null;
          }}
          {...props}
        />
        {suffix && <_Suffix value={suffix} />}
      </div>
    </>
  );
});

Input.displayName = "Input";

export default Input;
