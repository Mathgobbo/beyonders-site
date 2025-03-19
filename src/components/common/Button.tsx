import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  additionalClassName?: string;
}

export const Button = (props: ButtonProps) => {
  const { additionalClassName, ...rest } = props;
  return (
    <button
      {...rest}
      className={`font-inter text-white px-6 py-3 shadow-md text-sm sm:text-base font-semibold rounded-md bg-gradient-to-r from-secondary-green to-main-green/80 hover:bg-main-green/80  hover:cursor-pointer ${additionalClassName}`}
    >
      {rest.children}
    </button>
  );
};

export const OutlineButton = (props: ButtonProps) => {
  const { additionalClassName, ...rest } = props;
  return (
    <button
      {...rest}
      className={`font-inter text-white mx-1 px-20 py-3 shadow-md text-sm sm:text-base font-semibold rounded-md outline outline-1 transition hover:bg-[#31a85d] hover:text-white hover:cursor-pointer ${additionalClassName}`}
    >
      {rest.children}
    </button>
  );
};
