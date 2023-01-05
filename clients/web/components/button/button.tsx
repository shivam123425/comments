import clsx from "clsx";
import React from "react";

type ButtonVariant = "contained" | "text";

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: ButtonVariant;
}

export const Button = (props: IButtonProps) => {
  const { variant, className, ...buttonProps } = props;
  return (
    <button
      className={clsx(
        "text-base outline-none border-none cursor-pointer py-2.5 px-10 font-semibold",
        {
          "bg-teal text-white rounded": variant === "contained",
          "text-teal bg-transparent": variant === "text",
        },
        className
      )}
      {...buttonProps}
    />
  );
};
