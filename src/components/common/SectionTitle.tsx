import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  additionalClassName?: string;
}

export const SectionTitle = (props: Props) => {
  const { additionalClassName, ...rest } = props;
  return (
    <h2
      {...rest}
      className={`text-xl md:text-2xl font-bold font-inter tracking-wider text-gray-primary ${additionalClassName}`}
    >
      {rest.children}
    </h2>
  );
};
