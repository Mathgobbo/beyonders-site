import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  additionalClassName?: string;
}

export const Section = (props: Props) => {
  return (
    <section
      className="px-4 py-10 lg:px-36 font-inter mt-24 lg:mt-52 relative overflow-x-hidden"
      {...props}
    >
      {props.children}
    </section>
  );
};
