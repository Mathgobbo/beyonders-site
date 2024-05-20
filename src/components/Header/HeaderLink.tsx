import Link from "next/link";
import { ReactNode } from "react";

export const HeaderLink = ({
  children,
  href,
  scroll = true,
}: {
  children: ReactNode;
  href: string;
  scroll?: boolean;
}) => {
  return (
    <Link
      scroll={scroll}
      className="font-poppins p-2  rounded-md lg:text-base md:hover:bg-transparent hover:border md:hover:border-none border-gray-600  md:p-0 tracking-wide capitalize md:uppercase transition md:hover:text-white text-main-white/80"
      href={href}
    >
      {children}
    </Link>
  );
};
