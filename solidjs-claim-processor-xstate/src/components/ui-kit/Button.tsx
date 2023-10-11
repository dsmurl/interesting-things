import { JSX, splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";

type ButtonProps = JSX.IntrinsicElements["button"] & {
  primary?: boolean;
  secondary?: boolean;
};

export const Button = (props: ButtonProps) => {
  const [localProps, buttonProps] = splitProps(props, [
    "primary",
    "secondary",
    "class",
  ]);

  return (
    <button
      class={twMerge(`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 pr-7 pl-4 rounded  border border-blue-500 hover:border-blue-700 
        ${
          localProps.secondary
            ? " bg-white text-gray-500 border border-gray-300 hover:border-gray-500 hover:text-gray-700 hover:bg-gray-100 "
            : ""
        } 
        ${localProps.primary ? " bg-green-500 hover:bg-green-700 " : ""} 
        ${buttonProps.disabled ? " cursor-not-allowed opacity-25 " : ""}
        ${localProps.class}
      `)}
      {...buttonProps}
    >
      {buttonProps.children}
    </button>
  );
};
