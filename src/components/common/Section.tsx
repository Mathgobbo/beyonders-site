import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Section = ({ children }: Props) => {
  return (
    <section className="px-4 py-10 lg:px-36 font-inter mt-24 lg:mt-52">
      {children}
    </section>
  );
};
