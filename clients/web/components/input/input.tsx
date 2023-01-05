import clsx from "clsx";
import React from "react";

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
  id: string;
  label: string;
}

export const Input = (props: IInputProps) => {
  const { className, id, errorMessage, error, label, ...inputProps } = props;
  return (
    <div className="w-full">
      <div className="relative h-12">
        <input
          className={clsx(
            "peer w-full block outline-none rounded pl-3 pt-[12px] text-base placeholder-transparent h-full",
            error ? "border border-red" : "border-none",
            className
          )}
          id={id}
          {...inputProps}
        />
        <label
          className="absolute text-xs top-[5px] left-[12px] pointer-events-none transition-all peer-placeholder-shown:top-[13px] peer-placeholder-shown:text-base peer-focus:text-xs peer-focus:top-[5px]"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
      {errorMessage && (
        <div className="text-sm text-red mb-4 px-1 pt-2">{errorMessage}</div>
      )}
    </div>
  );
};
