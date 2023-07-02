import { HTMLAttributes } from "react";

export const SectionTitle = (props: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      {...props}
      className="text-xl md:text-2xl font-normal font-inter tracking-wider text-gray-primary"
    >
      {props.children}
    </h2>
  );
};
