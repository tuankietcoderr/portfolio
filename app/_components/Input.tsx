'use client';
import {forwardRef, useRef} from 'react';

type Props = {
  showPlaceholder?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {showPlaceholder = false, ...rest} = props;
  const localRef = useRef<HTMLInputElement | null>();
  return (
    <div className="w-full">
      <div className="relative">
        <input
          className="bg-white peer w-full bg-transparent placeholder:text-slate-400 text-black text-sm border-2 border-black px-3 py-2 transition duration-300 ease focus:outline-none focus:border-[#00bf63] hover:border-[#00bf63] shadow-sm focus:shadow"
          {...rest}
          placeholder={showPlaceholder ? props.placeholder : undefined}
          ref={r => {
            if (ref) {
              (ref as any)(r);
            }
            localRef.current = r;
            return ref || (localRef as any);
          }}
        />
        <label
          className={`absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-black text-sm transition-all transform origin-left
          peer-hover:text-[#00bf63] peer-focus:text-xs peer-focus:text-[#00bf63] peer-focus:scale-90 ${
            props.value
              ? 'peer-focus:opacity-100 -top-2 left-2.5'
              : 'peer-focus:-top-2 peer-focus:left-2.5'
          }`}
          onClick={() => {
            localRef.current?.focus();
          }}>
          {props.placeholder || 'Type here'}
        </label>
      </div>
    </div>
  );
});

export default Input;
